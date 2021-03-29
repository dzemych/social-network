import {combineReducers} from "redux";
import appReducer from "./appRedcuer";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import searchReducer from "./searchReducer";
import chatReducer from "./chatReducer";
import photoReducer from "./photoReducer";

export default combineReducers({
    app: appReducer,
    auth: authReducer,
    user: userReducer,
    search: searchReducer,
    chat: chatReducer,
    photo: photoReducer
})