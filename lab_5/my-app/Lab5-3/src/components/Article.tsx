import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Article: React.FC = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<any | null>(null);

  useEffect(() => {
    const savedArticles = localStorage.getItem('articles');
    if (savedArticles) {
      const articles = JSON.parse(savedArticles);
      const foundArticle = articles.find((a: any) => a.id === id);
      setArticle(foundArticle);
    }
  }, [id]);

  if (!article) {
    return <div>Artykuł nie znaleziony.</div>;
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
    </div>
  );
};

export default Article;
