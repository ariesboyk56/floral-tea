import { combineReducers } from "redux"
import notification from "./notificationReducer"
import lang from "./languageReducer"
const rootReducers = combineReducers({
    //
    notification,
    lang
})
export type RootState = ReturnType<typeof rootReducers>
export default rootReducers