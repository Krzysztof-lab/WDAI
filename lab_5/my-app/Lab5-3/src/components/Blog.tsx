import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    const savedArticles = localStorage.getItem('articles');
    if (savedArticles) {
      setArticles(JSON.parse(savedArticles));
    }
  }, []);

  return (
    <div>
      <h2>Blog</h2>
      <ul>
        {articles.length > 0 ? (
          articles.map((article: any) => (
            <li key={article.id}>
              <Link to={`/article/${article.id}`}>{article.title}</Link>
            </li>
          ))
        ) : (
          <p>Brak artykułów.</p>
        )}
      </ul>
    </div>
  );
};

export default Blog;
