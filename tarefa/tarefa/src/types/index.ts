export interface RGBContextProps {
    corR: number;
    corG: number;
    corB: number;
    setRed: (value:string) => void;
    setGreen: (value:string) => void;
    setBlue: (value:string) => void;
    saveRGB: () => void;
}