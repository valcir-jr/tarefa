export interface RGBContextProps {
    corR: number;
    corG: number;
    corB: number;
    currentId: number|null;
    setRed: (value:string) => void;
    setGreen: (value:string) => void;
    setBlue: (value:string) => void;
    saveRGB: () => void;
    getRGB: (id?: number | null) => Promise<void>;
}