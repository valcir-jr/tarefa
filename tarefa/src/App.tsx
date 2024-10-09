import { useState } from "react";
import styled from "styled-components";
import Input from "./components/Input";

function App() {
  const [corR, setCorR] = useState(0);
  const [corG, setCorG] = useState(0);
  const [corB, setCorB] = useState(0);

  return (
    <Principal style={{ backgroundColor: `rgb(${corR}, ${corG}, ${corB})` }}>
      <Input label="R" value={corR} onChange={(value:number) => setCorR(value)}/>
      <Input label="G" value={corG} onChange={(value:number) => setCorG(value)}/>
      <Input label="B" value={corB} onChange={(value:number) => setCorB(value)}/>
    </Principal> 
  );
}

export default App;

const Principal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  min-height: 150px;
  width: 555px;
  margin-top: 17%;
  margin-left: 34%;
`;