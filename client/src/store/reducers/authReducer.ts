import { InitialState, User } from "../../contexts/AuthContext"
export const SET_AUTH = "SET_AUTH"

interface ISetAuthAction {
    type: typeof SET_AUTH,
    payload: User,
}

export type AuthAction = ISetAuthAction;

export const authReducer = (state: InitialState, action: AuthAction) => {

    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                isAuthenticated: !state.isAuthenticated,
                user: action.payload
            }
        default:
            return state
    }
}