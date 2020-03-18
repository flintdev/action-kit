// example/redux/reducer.js

import * as types from './types';
import update from 'immutability-helper';

export function reducer(state, action) {
    switch (action.type) {
        case types.TEXT_VALUE_CHANGE:
            return update(state, {
                textValue: {$set: action.value}
            });
        default:
            return state;
    }
}