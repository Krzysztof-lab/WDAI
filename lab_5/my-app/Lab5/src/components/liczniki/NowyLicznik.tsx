import { useState } from 'react';
import Przycisk from './Przycisk';

const NowyLicznik: React.FC = () => {
  const [liczba, setLiczba] = useState(0);

  return (
    <div>
      <h2>Licznik: {liczba}</h2>
      <Przycisk onClick={() => setLiczba((prev) => prev + 1)} />
    </div>
  );
};

export default NowyLicznik;
