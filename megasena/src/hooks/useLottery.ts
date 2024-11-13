import { useState, useEffect } from 'react';
import { LotteryProps } from '../types';
import lottery from '../services/Lottery';

const useLottery = () => {
  const [megasena, setMegasena] = useState<LotteryProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResultado = async () => {
      try {
        const data = await lottery.get(); // Chamando o método get() do serviço
        setMegasena(data); // Armazenando os dados no estado
      } catch (err) {
        setError('Erro ao carregar os dados');
      } finally {
        setLoading(false);
      }
    };

    fetchResultado();
  }, []);

  return { megasena, loading, error };
};

export default useLottery;