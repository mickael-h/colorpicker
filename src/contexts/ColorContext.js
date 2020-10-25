import React, { useReducer } from 'react';
import { reducer, initalState } from '../reducers/colorReducer';

export const ColorContext = React.createContext();

export const ColorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);
  return <ColorContext.Provider value={{ state, dispatch }}>
    {children}
  </ColorContext.Provider>;
};
