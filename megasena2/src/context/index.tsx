import { createContext } from "react";
import { LoteriaProps } from "../types";
import useLoteria from "../hooks";

export const Contexto = createContext({} as LoteriaProps);

export function Provider({ children }: any) {
const { megasena, lotofacil } = useLoteria()

  return (
    <Contexto.Provider value={{ megasena, lotofacil }}>
        {children}
    </Contexto.Provider>
  );
}