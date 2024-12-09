import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Witaj na naszej stronie!</h1>
      <Link to="/blog">Przejdź do bloga</Link>
    </div>
  );
};

export default Home;
