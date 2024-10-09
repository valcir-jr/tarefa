import styled from "styled-components";

export default function Input(props:any) {
    const handler = (e:any) => {
        const valor = Math.max(0, Math.min(255, e.target.value));
        props.onChange(valor);
    }

    return(
        <InputDiv>
            <label>{props.label}</label>
            <input type="number" value={props.value} onChange={handler}/>
        </InputDiv>
    );
};

const InputDiv = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center; 
  color: white;
   margin: 0 10px;
`