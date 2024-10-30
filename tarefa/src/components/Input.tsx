import styled from "styled-components";

interface Props {
    value: number;
    set: (value:string) => void; 
    label: string;
}

export default function Input({value, set, label}:Props) {
    return(
        <InputDiv>
            <LabelStyle>{label}</LabelStyle>
            <InputStyle value={value} onChange={ (e) => set(e.target.value) } />
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