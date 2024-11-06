import { useContext } from "react";
import styled from "styled-components";
import { RGBContext } from "../context/RGBcontext";

interface Props {
    value: number;
    set: (value:string) => void; 
    label: string;
}

export default function Input({value, set, label}:Props) {
    const {saveRGB, currentId, getRGB} = useContext(RGBContext);

    const handle = (e:any) => {
        if (e.key === "Enter" || e.key === "Tab"){
            saveRGB();
        }
        if (e.key === "ArrowLeft") {
            if (currentId && currentId > 1) {
                getRGB(currentId - 1);
            }
        }
        if (e.key === "ArrowRight") {
            if (currentId) {
                getRGB(currentId + 1);
            }
        }
    };

    return(
        <InputDiv>
            <LabelStyle>{label}</LabelStyle>
            <InputStyle value={value} onChange={ (e) => set(e.target.value) } onKeyDown={handle} />
        </InputDiv>
    );
};

const InputDiv = styled.div`
  display: flex;
  flex-direction: column; 
`;

const LabelStyle = styled.label`
    font-weight: bold;
    color: inherit;
`;

const InputStyle = styled.input`
  font-family: Arial;
  font-size: 16px;
  padding: 5px;
  border-radius: 4px;
  border: none;
  width: 100px;
`;