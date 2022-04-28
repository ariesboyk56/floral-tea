import { createContext, ReactNode, useReducer } from "react";
import { authReducer, SET_AUTH } from "../store/reducers/authReducer";
interface IAuthContext {
  children: ReactNode;
}
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  image: string;
  roleId: string;
}
export interface InitialState {
  isAuthenticated: boolean;
  user: User | null;
}

interface AuthState {
  authState: InitialState;
  setAuth: (data: User) => void;
}

export const AuthContext = createContext<AuthState>({
  authState: {
    isAuthenticated: false,
    user: null,
  },
  setAuth: () => null,
});

const AuthContextProvider = ({ children }: IAuthContext) => {
  const [authState, dispatch] = useReducer(authReducer, {
    isAuthenticated: false,
    user: null,
  });
  const setAuth = (data: User) => {
    dispatch({ type: SET_AUTH, payload: data });
  };
  const AuthData = {
    authState,
    setAuth,
  };
  return (
    <AuthContext.Provider value={AuthData}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
