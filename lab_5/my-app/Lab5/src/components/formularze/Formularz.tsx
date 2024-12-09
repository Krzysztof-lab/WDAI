import { useState } from 'react';

const Formularz: React.FC = () => {
  const [tekst, setTekst] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTekst(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={tekst}
        onChange={handleChange}
        placeholder="Type here"
      />
      <div>{tekst}</div>
    </div>
  );
};

export default Formularz;
