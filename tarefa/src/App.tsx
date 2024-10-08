import { useState } from "react";
import styled from "styled-components";
import Input from "./components/Input";

function App() {
  const [corR, setCorR] = useState(0);
  const [corG, setCorG] = useState(0);
  const [corB, setCorB] = useState(0);

  return (
    <Principal>
      <Input label="R" />
      <Input label="G" />
      <Input label="B" />
    </Principal> 
  );
}

export default App;

const Principal = styled.div`
  background-color: rgb(0,0,0);
`;