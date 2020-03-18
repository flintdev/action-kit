// src/actionAdapter/__test__/adapter.test.ts

import {Handler} from "../interface";
import {actionAdapter} from "../actionAdapter";


test('test action', (done) => {
    async function actionFunc(eventArgs: any, state: any, handler: Handler) {
        console.log('eventArgs', eventArgs);
        console.log('state', state);
        console.log('handler', handler);
    }
    const asyncAction = actionAdapter(actionFunc, {}, {
        success: () => {
            done();
        },
        error: () => {
            done();
        },
    });
    asyncAction({arg1: 1, arg2: 2});
});