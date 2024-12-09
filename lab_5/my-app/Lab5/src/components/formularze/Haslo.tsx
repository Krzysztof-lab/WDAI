import { useState } from 'react';

const Haslo: React.FC = () => {
  const [haslo, setHaslo] = useState('');
  const [powtHaslo, setPowtHaslo] = useState('');
  const [komunikat, setKomunikat] = useState('');

  const handleHasloChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHaslo(event.target.value);
  };

  const handlePowtHasloChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPowtHaslo(event.target.value);
  };

  const validateHasla = () => {
    if (!haslo || !powtHaslo) {
      setKomunikat('Proszę wprowadzić hasło');
    } else if (haslo !== powtHaslo) {
      setKomunikat('Hasła nie są zgodne');
    } else {
      setKomunikat('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={haslo}
        onChange={handleHasloChange}
        placeholder="Hasło"
      />
      <input
        type="text"
        value={powtHaslo}
        onChange={handlePowtHasloChange}
        placeholder="Powtórz Hasło"
      />
      <div>{komunikat}</div>
      <button onClick={validateHasla}>Sprawdź</button>
    </div>
  );
};

export default Haslo;
