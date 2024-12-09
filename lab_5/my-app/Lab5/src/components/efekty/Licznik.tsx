import { useState, useEffect } from 'react';

const Licznik: React.FC = () => {
  const [liczba, setLiczba] = useState(0);

  const dodaj = () => {
    setLiczba(liczba + 1);
  };
  useEffect(() => {
    console.log(`Licznik zwiększył się do ${liczba}`);
  }, [liczba]);
  
  useEffect(() => {
    console.log('Hello world');
  }, []);

  return (
    <div>
      <h2>Licznik: {liczba}</h2>
      <button onClick={dodaj}>Dodaj</button>
    </div>
  );
};

export default Licznik;
