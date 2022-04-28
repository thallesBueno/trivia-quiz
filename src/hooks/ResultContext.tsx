import React, { createContext, ReactNode, useContext, useState } from "react";

import Result from "../entities/Result";

const ResultContext = createContext<[Result, React.Dispatch<React.SetStateAction<Result>>] | null>(null);

interface props {
  children: ReactNode
}

const ResultContextProvider : React.FC<props>= ({ children }) => {
  const [result, setResult] = useState<Result>({} as Result);

  return (
    <ResultContext.Provider value={[result, setResult]}>
      {children}
    </ResultContext.Provider>
  )
};

const useResultContext = () => {
  const resultState = useContext(ResultContext);

  return resultState || [{} as Result, () => {}];
}

export { ResultContextProvider, useResultContext };
