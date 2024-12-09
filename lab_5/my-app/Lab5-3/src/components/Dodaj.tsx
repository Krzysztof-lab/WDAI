import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dodaj: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleAddArticle = () => {
    const newArticle = {
      id: Date.now().toString(),
      title,
      content,
    };

    const savedArticles = localStorage.getItem('articles');
    const articles = savedArticles ? JSON.parse(savedArticles) : [];
    articles.push(newArticle);
    localStorage.setItem('articles', JSON.stringify(articles));

    navigate('/blog');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '300px', margin: '0 auto' }}>
  <h2>Dodaj nowy artykuł</h2>
  <input
    type="text"
    placeholder="Tytuł"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
  />
  <textarea
    placeholder="Treść"
    value={content}
    onChange={(e) => setContent(e.target.value)}
    
  />
  <button onClick={handleAddArticle}>DODAJ</button>
</div>

  );
};

export default Dodaj;
