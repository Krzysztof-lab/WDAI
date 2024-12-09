import { useState, useEffect } from 'react';

const Odliczanie: React.FC = () => {
  const [licznik, setLicznik] = useState(15.0);
  const [aktywny, setAktywny] = useState(false);

  const toggleStartStop = () => {
    setAktywny((prev) => !prev);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (aktywny && licznik > 0) {
      interval = setInterval(() => {
        setLicznik((prev) => Math.max(prev - 0.1, 0));
      }, 100);
    }

    if (licznik === 0 && interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [aktywny, licznik]);

  return (
    <div>
      <h2>Odliczanie: {licznik.toFixed(1)} sek</h2>
      <button
        onClick={toggleStartStop}
        disabled={licznik === 0}
      >
        {licznik === 0 ? 'Odliczanie zakończone' : aktywny ? 'STOP' : 'START'}
      </button>
    </div>
  );
};

export default Odliczanie;
