// src/asyncActionAdapter/asyncActionAdapter.ts

import {ActionFunc, Handler, ReduxActionMap} from "./interface";
import {Dispatch} from "redux";

export const asyncActionAdapter = (actionFunc: ActionFunc, reduxActionMap: ReduxActionMap) => (...eventArgs: any[]) => {
    return (dispatch: Dispatch, getState) => {
        const currentState = getState();
        const handler = getHandler(dispatch, reduxActionMap);
        const action = async () => {
            await actionFunc({}, currentState, handler);
        };
        action().then(r => {});
    };
};


function getHandler(dispatch: Dispatch, reduxActionMap: ReduxActionMap): Handler {
    const setState = (stateUpdaterName: string, args: object) => {
        const reduxAction = reduxActionMap[stateUpdaterName];
        dispatch(reduxAction(args));
    };
    return {setState};
}