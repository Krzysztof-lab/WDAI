import { useState } from 'react';

interface Student {
  imie: string;
  nazwisko: string;
  rocznik: number;
}

interface DodawanieProps {
  addStudent: (student: Student) => void;
}

const Dodawanie: React.FC<DodawanieProps> = ({ addStudent }) => {
  const [imie, setImie] = useState('');
  const [nazwisko, setNazwisko] = useState('');
  const [rocznik, setRocznik] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!imie || !nazwisko || !rocznik || isNaN(Number(rocznik))) {
      alert('Wszystkie dane muszą być wpisane oraz rocznik musi być liczbą');
      return;
    }

    addStudent({
      imie,
      nazwisko,
      rocznik: Number(rocznik),
    });

    setImie('');
    setNazwisko('');
    setRocznik('');
  };

  return (
    <div>
      <h3>Dodaj nowego studenta</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Imię"
          value={imie}
          onChange={(e) => setImie(e.target.value)}
        />
        <input
          type="text"
          placeholder="Nazwisko"
          value={nazwisko}
          onChange={(e) => setNazwisko(e.target.value)}
        />
        <input
          type="text"
          placeholder="Rocznik"
          value={rocznik}
          onChange={(e) => setRocznik(e.target.value)}
        />
        <button type="submit">Dodaj</button>
      </form>
    </div>
  );
};

export default Dodawanie;