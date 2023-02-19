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

  return (
    <AppContext.Provider value={{ ...state }}>
      {children}
    </AppContext.Provider>
  );
};

const useApp = () => useContext(AppContext);
export default useApp;
