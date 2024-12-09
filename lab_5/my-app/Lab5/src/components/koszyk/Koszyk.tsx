import Produkt from './Produkt';

const Koszyk: React.FC = () => {

  return (
    <div>
      <h2>Koszyk</h2>
      <Produkt nazwa='Jabłko' />
      <Produkt nazwa='Borówka' />
      <Produkt nazwa='Wiśnia' />
      <Produkt nazwa='Banan' />
      <Produkt nazwa='Gruszka' />
    </div>
  );
};

export default Koszyk;
