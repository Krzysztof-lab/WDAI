import Produkt from './Produkt';

const NowyKoszyk: React.FC = () => {
  const Produkty = ['Jabłko', 'Gruszka', 'Pomarańcza', 'Banana', 'Ananas'];

  return (
    <div>
      <h2>Nowy Koszyk</h2>
      {Produkty.map((nazwa, index) => (
        <Produkt key={index} nazwa={nazwa} />
      ))}
    </div>
  );
};

export default NowyKoszyk;
