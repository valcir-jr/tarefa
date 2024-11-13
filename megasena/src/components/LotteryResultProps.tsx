import React from 'react';
import styled from 'styled-components';
import { LotteryResultProps } from '../types';



const LotteryResult: React.FC<LotteryResultProps> = ({ megasena }) => {
  return (
    <Panel>
      <Titulo>MEGA-SENA</Titulo>
      <DezenasContainer>
        {megasena.dezenas.map((dezena, index) => (
          <Dezena key={index}>
            {dezena}
          </Dezena>
        ))}
      </DezenasContainer>
      <Data>{megasena.dataPorExtenso}</Data>    
    </Panel>
  );
};


const Data = styled.p`
  color: gray;
  font-size: 18px;
`;

const Titulo = styled.h1`
  color: black;
  font-weight: bold;
`;

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
  background-color: #f5f5f5;
  text-align: center;
  padding: 20px;
  border: 2px solid silver;
  border-radius: 8px;
`;

const DezenasContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  padding: 20px; 
`;

const Dezena = styled.span`
  background-color: #209869;
  height: 60px; 
  width: 60px; 
  color: #fff;
  display: flex; 
  justify-content: center; 
  align-items: center; 
  border-radius: 50%;
  font-size: 20px;
  font-weight: bold;
`;

export default LotteryResult;