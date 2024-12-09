import React, { useState, useEffect } from 'react';

const Licznik: React.FC = () => {
  const [liczba, setLiczba] = useState<number>(() => {
    // Pobranie wartości z localStorage lub ustawienie domyślnej wartości 0
    const savedValue = localStorage.getItem('licznik');
    return savedValue ? parseInt(savedValue, 10) : 0;
  });

  const dodaj = () => {
    setLiczba((prev) => prev + 1);
  };

  // Użycie useEffect do zapisywania stanu licznika w localStorage po każdej zmianie
  useEffect(() => {
    localStorage.setItem('licznik', liczba.toString());
  }, [liczba]);

  return (
    <div>
      <h2>Licznik: {liczba}</h2>
      <button onClick={dodaj}>Dodaj</button>
    </div>
  );
};

export default Licznik;
