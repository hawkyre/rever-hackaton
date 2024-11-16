'use client';
import { ACTIONS, FSM } from '@/fsm';
import React, { createContext, useContext, useState } from 'react';

// Define the shape of the context's state
interface FSMCtxState {
  fsm: FSM;
}

// Create the context with a default value
const FSMCtx = createContext<FSMCtxState>({
  fsm: new FSM(),
});

// Create a provider component
interface FSMCtxProviderProps {
  children: React.ReactNode;
}

export const FSMCtxProvider: React.FC<FSMCtxProviderProps> = ({ children }) => {
  const [action, setAction] = useState<ACTIONS>(ACTIONS.WHY);

  const goToAction = (action: ACTIONS) => {
    setAction(action);
  };
  return (
    <FSMCtx.Provider value={{ fsm: { action, goToAction } }}>
      {children}
    </FSMCtx.Provider>
  );
};

// Custom hook for using the context
export const useFSMCtx = () => useContext(FSMCtx);
