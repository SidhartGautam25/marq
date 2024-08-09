"use client";
import React, {
  createContext,
  useReducer,
  ReactNode,
  Dispatch,
  useEffect,
} from "react";
import Industry from "../comp/industryser/Industryser";

interface CurrRelatedProviderProps {
  children: ReactNode;
}

type State = Array<{
  [key: string]: any;
}>;

const INITIAL_STATE: State =
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("current-related") || "[]")
    : null;

export type CurrRelatedContextType = {
  state3: State;
  dispatch3: Dispatch<Action>;
};

type Action = { type: "SET_CURR_REL"; payload: any };

export const CurrRelatedContext = createContext<CurrRelatedContextType | null>(
  null
);

const Reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_CURR_REL":
      return action.payload;

    default:
      return state;
  }
};

export const CurrRelatedContextProvider: React.FC<CurrRelatedProviderProps> = ({
  children,
}) => {
  const initialState: State = [];
  const [state3, dispatch3] = useReducer(Reducer, INITIAL_STATE);
  useEffect(() => {
    console.log("state 33333 is ", state3);
    localStorage.setItem("current-related", JSON.stringify(state3));
    console.log("state33333 is ", state3);
  }, [state3]);

  // Here, we're casting the value to UserContextType because we're certain it matches the shape
  const value = { state3, dispatch3 } as CurrRelatedContextType;

  return (
    <CurrRelatedContext.Provider value={value}>
      {children}
    </CurrRelatedContext.Provider>
  );
};
