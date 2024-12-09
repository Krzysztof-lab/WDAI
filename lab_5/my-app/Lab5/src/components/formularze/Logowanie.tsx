import { useState } from 'react';

const Logowanie: React.FC = () => {
  const [nazwaUzytkownika, setNazwaUzytkownika] = useState('');
  const [haslo, setHaslo] = useState('');
  const [powtHaslo, setPowtHaslo] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const handleNazwaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNazwaUzytkownika(event.target.value);
  };

  const handleHasloChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHaslo(event.target.value);
  };

  const handlePowtHasloChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPowtHaslo(event.target.value);
  };

  const validateForm = () => {
    if (!nazwaUzytkownika || !haslo || !powtHaslo) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };

  const handleLogowanie = () => {
    if (haslo !== powtHaslo) {
      alert('Hasła nie są zgodne');
    } else {
      alert('Zalogowano poprawnie');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={nazwaUzytkownika}
        onChange={handleNazwaChange}
        placeholder="Nazwa użytkownika"
        onBlur={validateForm}
      />
      <input
        type="text"
        value={haslo}
        onChange={handleHasloChange}
        placeholder="Hasło"
        onBlur={validateForm}
      />
      <input
        type="text"
        value={powtHaslo}
        onChange={handlePowtHasloChange}
        placeholder="Powtórz Hasło"
        onBlur={validateForm}
      />
      <button
        onClick={handleLogowanie}
        disabled={isDisabled}
      >
        Logowanie
      </button>
    </div>
  );
};

export default Logowanie;
