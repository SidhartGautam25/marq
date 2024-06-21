"use client";
import React, {
  createContext,
  useReducer,
  ReactNode,
  Dispatch,
  useEffect,
} from "react";
import Industry from "../comp/industryser/Industryser";

interface BlogProviderProps {
  children: ReactNode;
}

// type State = {
//   title: any;
//   linki: any;
//   linkp: any;
//   industry: any;
//   subind: any;
//   createdAt: any;
//   desc: any;
//   cpage: any;
//   linkt: any;
//   linkf: any;
//   study?: any;
//   forcast?: any;
//   base?: any;
//   dataSuite?: any;
//   insightReport?: any;
// };

const INITIAL_STATE: Record<string, any> = {
  title:
    typeof window !== "undefined"
      ? localStorage.getItem("marq-blog-title") || null
      : null,

  linkt:
    typeof window !== "undefined"
      ? localStorage.getItem("marq-blog-linkt") || null
      : null,
  linkp:
    typeof window !== "undefined"
      ? localStorage.getItem("marq-blog-linkp") || null
      : null,
  industry:
    typeof window !== "undefined"
      ? localStorage.getItem("marq-blog-industry") || null
      : null,
  subind:
    typeof window !== "undefined"
      ? localStorage.getItem("marq-blog-subind") || null
      : null,
  desc:
    typeof window !== "undefined"
      ? localStorage.getItem("marq-blog-desc") || null
      : null,
  createdAt:
    typeof window !== "undefined"
      ? localStorage.getItem("marq-blog-createdAt") || null
      : null,
  ctitle:
    typeof window !== "undefined"
      ? localStorage.getItem("marq-blog-ctitle") || null
      : null,

  clinkt:
    typeof window !== "undefined"
      ? localStorage.getItem("marq-blog-clinkt") || null
      : null,
  clinkp:
    typeof window !== "undefined"
      ? localStorage.getItem("marq-blog-cinkp") || null
      : null,
  cindustry:
    typeof window !== "undefined"
      ? localStorage.getItem("marq-blog-cindustry") || null
      : null,
  csubind:
    typeof window !== "undefined"
      ? localStorage.getItem("marq-blog-csubind") || null
      : null,
  cdesc:
    typeof window !== "undefined"
      ? localStorage.getItem("marq-blog-cdesc") || null
      : null,
  ccreatedAt:
    typeof window !== "undefined"
      ? localStorage.getItem("marq-blog-ccreatedAt") || null
      : null,
};

export type BlogContextType = {
  state: Record<string, any>;
  dispatch: Dispatch<Action>;
};

type Action =
  | { type: "SET_LATEST"; payload: any }
  | {
      type: "SET_CURRENT";
      payload: any;
    };

export const BlogContext = createContext<BlogContextType | null>(null);

const Reducer = (
  state: Record<string, any>,
  action: Action
): Record<string, any> => {
  switch (action.type) {
    case "SET_LATEST":
      return {
        ...state,
        title: action.payload.title,
        desc: action.payload.desc,
        linkp: action.payload.linkp,
        linkt: action.payload.linkt,
        industry: action.payload.industry,
        subind: action.payload.subind,
        createdAt: action.payload.createdAt,
      };
    case "SET_CURRENT":
      return {
        ...state,
        ctitle: action.payload.title,
        cdesc: action.payload.desc,
        clinkp: action.payload.linkp,
        clinkt: action.payload.linkt,
        cindustry: action.payload.industry,
        csubind: action.payload.subind,
        ccreatedAt: action.payload.createdAt,
      };

    default:
      return state;
  }
};

export const BlogContextProvider: React.FC<BlogProviderProps> = ({
  children,
}) => {
  const initialState: Record<string, any> = {
    title: "",
    desc: "",
    linkp: "",
    industry: "",
    subind: "",
    createdAt: "",
    linkt: "",
    ctitle: "",
    cdesc: "",
    clinkp: "",
    cindustry: "",
    csubind: "",
    ccreatedAt: "",
    clinkt: "",
  };

  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
  useEffect(() => {
    // console.log("state ",state);
    localStorage.setItem("marq-blog-title", state.title);
    localStorage.setItem("marq-blog-desc", state.desc);
    localStorage.setItem("marq-blog-industry", state.industry);
    localStorage.setItem("marq-blog-subind", state.subind);
    localStorage.setItem("marq-blog-linkp", state.linkp);
    localStorage.setItem("marq-blog-createdAt", state.createdAt);
    localStorage.setItem("marq-blog-linkt", state.linkt);
    localStorage.setItem("marq-blog-ctitle", state.ctitle);
    localStorage.setItem("marq-blog-cdesc", state.cdesc);
    localStorage.setItem("marq-blog-cindustry", state.cindustry);
    localStorage.setItem("marq-blog-csubind", state.csubind);
    localStorage.setItem("marq-blog-clinkp", state.clinkp);
    localStorage.setItem("marq-blog-ccreatedAt", state.ccreatedAt);
    localStorage.setItem("marq-blog-clinkt", state.clinkt);
  }, [state]);

  // Here, we're casting the value to UserContextType because we're certain it matches the shape
  const value = { state, dispatch } as BlogContextType;

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
