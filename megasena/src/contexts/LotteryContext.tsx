import {  useState } from "react";
import { createContext } from "vm";
import { LotteryContextProps, Props, ProviderProps } from "../types";

export const LotteryContext = createContext({} as LotteryContextProps);

export function LotteryProvider({children}:ProviderProps){
    const [megasena,setMegasena]= useState<Props|undefined>();

    return (
        <LotteryContext.Provider value={{megasena}}>
            {children}
        </LotteryContext.Provider>
    )
}