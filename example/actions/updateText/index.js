// example/actions/updateText/index.js

import {action} from "example/actions/updateText/action";
import {actionAdapter} from "dist/index";
import {reduxActionMap} from "example/redux/actions";

export const updateText = actionAdapter(action, reduxActionMap);
