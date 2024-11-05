import { createContext, useEffect, useState } from "react";
import { RGBContextProps } from "../types";
import RGB from "../services/RGB";

export const RGBContext = createContext({} as RGBContextProps);

export function RGBProvider({children}:any) {
    const [corR, setCorR] = useState(0);
    const [corG, setCorG] = useState(0);
    const [corB, setCorB] = useState(0);

    useEffect(() => {
        getRGB();
    }, [])

    const getRGB = async () => {
        const result = await RGB.get();
        setCorR(result.r);
        setCorG(result.g);
        setCorB(result.b);
    };

    const saveRGB = async () => {
        await RGB.save(corR,corG,corB);
    }

    const set = (value:string, f:(value:number) => void) => {
        let temp = parseInt(value);
        temp = !isNaN(temp)? temp : 0;
        temp = temp >= 0? temp : 0;
        temp = temp <= 255? temp : 255;
        f(temp)
    };

    const setRed = (value:string) => set(value, setCorR);
    const setGreen = (value:string) => set(value, setCorG);
    const setBlue = (value:string) => set(value, setCorB);

    return <RGBContext.Provider value={{ corR, corG, corB, setRed, setGreen, setBlue, saveRGB }}>{children}</RGBContext.Provider>
}