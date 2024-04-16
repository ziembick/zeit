'use client'

import React, { createContext, useReducer, useContext, Dispatch } from 'react';

interface SizeState {
  selectedSize: string;
}

type SizeAction = { type: 'SELECT_SIZE'; payload: string };

const sizeReducer = (state: SizeState, action: SizeAction): SizeState => {
  switch (action.type) {
    case 'SELECT_SIZE':
      return { ...state, selectedSize: action.payload };
    default:
      return state;
  }
};

interface SizeContextType {
  state: SizeState;
  dispatch: Dispatch<SizeAction>;
}

const SizeContext = createContext<SizeContextType>({
  state: { selectedSize: '' },
  dispatch: () => {},
});

export const SizeProvider: React.FC = ({ children } : {children}) => {
  const [state, dispatch] = useReducer(sizeReducer, { selectedSize: '' });

  return (
    <SizeContext.Provider value={{ state, dispatch }}>
      {children}
    </SizeContext.Provider>
  );
};

export const useSize = () => {
  const context = useContext(SizeContext);
  if (!context) {
    throw new Error('useSize must be used within a SizeProvider');
  }
  return context;
};
