import { useState, useEffect } from 'react';

const Tytul: React.FC = () => {
  const [tytul, setTytul] = useState('');

  useEffect(() => {
    document.title = tytul || 'Bez tytułu';
  }, [tytul]);

  return (
    <div>
      <h2>Ustaw tytuł strony</h2>
      <input
        type="text"
        value={tytul}
        onChange={(e) => setTytul(e.target.value)}
        placeholder="Wpisz tytuł"
      />
    </div>
  );
};

export default Tytul;
