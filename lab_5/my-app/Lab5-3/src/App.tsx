import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Blog from './components/Blog';
import Article from './components/Article';
import Dodaj from './components/Dodaj';
import Home from './components/Home';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> | <Link to="/blog">Blog</Link> | <Link to="/dodaj">Dodaj artykuł</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/dodaj" element={<Dodaj />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
