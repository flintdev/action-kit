// example/redux/actions.js

import * as types from './types';

function textValueChange(args) {
    const {value} = args;
    return {
        type: types.TEXT_VALUE_CHANGE,
        value
    }
}

export const reduxActionMap = {
    [types.TEXT_VALUE_CHANGE]: textValueChange
};
