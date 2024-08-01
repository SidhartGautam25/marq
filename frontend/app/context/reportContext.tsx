"use client";
import React, {
  createContext,
  useReducer,
  ReactNode,
  Dispatch,
  useEffect,
} from "react";
import Industry from "../comp/industryser/Industryser";

interface ReportProviderProps {
  children: ReactNode;
}

type State = {
  [key: string]: any;
};

const INITIAL_STATE: State =
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("current-rd") || "{}")
    : null;

export type ReportContextType = {
  state: State;
  dispatch: Dispatch<Action>;
};

type Action = { type: "SET_CURRENT"; payload: any };

export const ReportContext = createContext<ReportContextType | null>(null);

const Reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_CURRENT":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export const ReportContextProvider: React.FC<ReportProviderProps> = ({
  children,
}) => {
  const initialState: State = {};
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
  useEffect(() => {
    localStorage.setItem("current-rd", JSON.stringify(state));
  }, [state]);

  // Here, we're casting the value to UserContextType because we're certain it matches the shape
  const value = { state, dispatch } as ReportContextType;

  return (
    <ReportContext.Provider value={value}>{children}</ReportContext.Provider>
  );
};
