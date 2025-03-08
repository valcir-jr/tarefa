import { useState, useEffect } from 'react';
import { Props } from '../types';
import loteria from '../services/loteria';

const useLoteria = () => {
  const [megasena, setMegasena] = useState<Props | null>(null);
  const [lotofacil, setLotofacil] = useState<Props | null>(null);

  useEffect(() => {
    const fetchResultado = async () => {
        const res = await loteria.get(); 
        setMegasena(res.megasena); 
        setLotofacil(res.lotofacil);
    };

    fetchResultado();
  }, []);

  return { megasena, lotofacil };
};

export default useLoteria;