// src/asyncActionAdapter/__test__/adapter.test.ts

import {Handler} from "../interface";
import {asyncActionAdapter} from "../asyncActionAdapter";


test('test action', (done) => {
    async function actionFunc(eventArgs: any, state: any, handler: Handler) {
        console.log('eventArgs', eventArgs);
        console.log('state', state);
        console.log('handler', handler);
    }
    const asyncAction = asyncActionAdapter(actionFunc, {}, {
        success: () => {
            done();
        },
        error: () => {
            done();
        },
    });
    asyncAction({arg1: 1, arg2: 2});
});