// example/actions/updateText/index.js

import {action} from "./action";
import {actionAdapter} from "dist/index";
import {reduxActionMap} from "example/redux/actions";

export const updateText = actionAdapter(action, reduxActionMap);
