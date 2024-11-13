import React from 'react';
import useLottery from '../hooks/useLottery';
import LotteryResult from '../components/LotteryResultProps';
import styled from 'styled-components';


const Home: React.FC = () => {
  const { megasena, loading } = useLottery();

 
  if (loading) {
    return <Carregando>Carregando...</Carregando>;
  }

  return (
    <div>
      {megasena && <LotteryResult megasena={megasena.megasena} />}
    </div>
  );
};

const Carregando = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
  color: black;
  background-color: #f5f5f5;
  text-align: center;
  padding: 20px;
  border: 2px solid silver;
  border-radius: 8px;
  font-weight: bold;
  font-size: 30px;
  width: 450px;
`;


export default Home;