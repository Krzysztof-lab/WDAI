import { useState } from 'react';

const Licznik: React.FC = () => {
  const [liczba, setLiczba] = useState(0);

  return (
    <div>
      <h2>Licznik: {liczba}</h2>
      <button onClick={() => setLiczba((prev) => prev + 1)}>Dodaj</button>
    </div>
  );
};

export default Licznik;
