import styled from "styled-components";

export default function Input(props:any) {
    return(
        <div>
            <label>{props.label}</label>
            <input type="number" />
        </div>
    );
};