import { useContext, useReducer, createContext } from "react";

import AppReducer from "../reducers/AppReducer";

export const AppContext = createContext(null);

const initialState = {
  categories: [],
  authUser: {
    avatar: "/",
    accessToken: null,
  },
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const login = async (username, password) => {
    //TODO: show toast notification instead of the alert
  };
  return (
    <AppContext.Provider value={{ ...state, login }}>
      {children}
    </AppContext.Provider>
  );
};

const useApp = () => useContext(AppContext);
export default useApp;
