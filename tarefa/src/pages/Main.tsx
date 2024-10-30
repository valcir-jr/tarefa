import styled from "styled-components"
import Input from "../components/Input";
import { useContext } from "react";
import { RGBContext } from "../context/RGBcontext";

export default function Main() {
    const { corR, corG, corB, setRed, setGreen, setBlue } = useContext(RGBContext);

    return (
        <Principal $r={corR} $g={corG} $b={corB}>
            <Input value={corR} set={setRed} label="R" />
            <Input value={corG} set={setGreen} label="G" />
            <Input value={corB} set={setBlue} label="B" />
        </Principal>
    )
}

const Principal = styled.div<{$r:number, $g:number, $b:number}>`
    display: flex;
    flex-direction: row;
    padding: 20px;
    border-radius: 8px;
    box-sizing: border-box;
    gap: 10px;

    background-color: ${ ({$r,$g,$b}) => `rgb(${$r},${$g},${$b})` };
    color: ${ ({$r,$g,$b}) => `rgb(${255-$r},${255-$g},${255-$b})` };
`;