import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();
// prepares the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
// wrap our app and provide the data layer to every componenet in our app
export const useStateValue = () => useContext(StateContext);
// this is used to pull the information from the data layer
