import {action} from "./action";
import {actionAdapter} from "dist/index";
import {reduxActionMap} from "../../redux/actions";

export const toggleLoading = actionAdapter(action, reduxActionMap);
