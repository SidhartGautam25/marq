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
  title: any;
  linki: any;
  linkp: any;
  industry: any;
  subind: any;
  createdAt: any;
  desc: any;
  cpage: any;
};

const INITIAL_STATE: State = {
  title:
    typeof window !== "undefined"
      ? localStorage.getItem("marq-rep-title") || null
      : null,
  cpage:
    typeof window !== "undefined"
      ? localStorage.getItem("reportpage") || null
      : null,
  linki:
    typeof window !== "undefined"
      ? localStorage.getItem("marq-rep-linki") || null
      : null,
  linkp:
    typeof window !== "undefined"
      ? localStorage.getItem("marq-rep-linkp") || null
      : null,
  industry:
    typeof window !== "undefined"
      ? localStorage.getItem("marq-rep-industry") || null
      : null,
  subind:
    typeof window !== "undefined"
      ? localStorage.getItem("marq-rep-subind") || null
      : null,
  desc:
    typeof window !== "undefined"
      ? localStorage.getItem("marq-rep-desc") || null
      : null,
  createdAt:
    typeof window !== "undefined"
      ? localStorage.getItem("marq-rep-createdAt") || null
      : null,
};

export type ReportContextType = {
  state: State;
  dispatch: Dispatch<Action>;
};

type Action =
  | { type: "SET_CURRENT"; payload: any }
  | { type: "SET_CURR_PAGE"; payload: any };

export const ReportContext = createContext<ReportContextType | null>(null);

const Reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_CURRENT":
      return {
        title: action.payload.title,
        desc: action.payload.desc,
        linki: action.payload.linki,
        linkp: action.payload.linkp,
        industry: action.payload.industry,
        subind: action.payload.subind,
        createdAt: action.payload.createdAt,
        cpage: 0,
      };
    case "SET_CURR_PAGE":
      return {
        title: action.payload.title,
        desc: action.payload.desc,
        linki: action.payload.linki,
        linkp: action.payload.linkp,
        industry: action.payload.industry,
        subind: action.payload.subind,
        createdAt: action.payload.createdat,
        cpage: action.payload.page,
      };
    default:
      return state;
  }
};

export const ReportContextProvider: React.FC<ReportProviderProps> = ({
  children,
}) => {
  const initialState: State = {
    title: "",
    desc: "",
    linki: "",
    linkp: "",
    industry: "",
    subind: "",
    createdAt: "",
    cpage: 0,
  };

  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
  useEffect(() => {
    // console.log("state ",state);
    localStorage.setItem("marq-rep-title", state.title);
    localStorage.setItem("marq-rep-desc", state.desc);
    localStorage.setItem("marq-rep-industry", state.industry);
    localStorage.setItem("marq-rep-subind", state.subind);
    localStorage.setItem("marq-rep-linki", state.linki);
    localStorage.setItem("marq-rep-linkp", state.linkp);
    localStorage.setItem("marq-rep-createdAt", state.createdAt);
    localStorage.setItem("reportpage", state.cpage);
  }, [state]);

  // Here, we're casting the value to UserContextType because we're certain it matches the shape
  const value = { state, dispatch } as ReportContextType;

  return (
    <ReportContext.Provider value={value}>{children}</ReportContext.Provider>
  );
};
