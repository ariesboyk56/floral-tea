import { combineReducers } from "redux"
import notification from "./notificationReducer"
const rootReducers = combineReducers({
    //
    notification
})
// export type RootState = ReturnType<typeof rootReducers>
export default rootReducers