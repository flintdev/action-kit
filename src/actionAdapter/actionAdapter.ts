// src/actionAdapter/actionAdapter.ts

import {ActionFunc, AdapterCallback, Handler, ReduxActionMap} from "./interface";
import {Dispatch} from "redux";

export const actionAdapter = (actionFunc: ActionFunc, reduxActionMap: ReduxActionMap, callback? : AdapterCallback) => (eventArgs: object) => {
    return (dispatch: Dispatch, getState) => {
        const currentState = getState();
        const handler = getHandler(dispatch, getState, reduxActionMap);
        const action = async () => {
            await actionFunc(eventArgs, currentState, handler);
        };
        action()
            .then(r => callback?.success())
            .catch(e => callback?.error(e));
    };
};


function getHandler(dispatch: Dispatch, getState: any, reduxActionMap: ReduxActionMap): Handler {
    const setState = (stateUpdaterName: string, args: object) => {
        const reduxAction = reduxActionMap[stateUpdaterName];
        if (!reduxAction) throw new Error(`State updater not found: ${stateUpdaterName}`);
        dispatch(reduxAction(args));
    };
    return {setState, getState};
}
