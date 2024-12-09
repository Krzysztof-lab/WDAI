import { useEffect, useState } from 'react';
import Komentarz from './Komentarz';

interface User {
  id: number;
  username: string;
  fullName: string;
}

interface Comment {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: User;
}

const Komentarze: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/comments')
      .then((response) => response.json())
      .then((data) => {
        const formattedComments = data.comments.map((comment: any) => ({
          id: comment.id,
          body: comment.body,
          postId: comment.postId,
          likes: Math.floor(Math.random() * 1000),
          user: {
            id: comment.user.id,
            username: comment.user.username,
            fullName: `${comment.user.firstName} ${comment.user.lastName}`,
          },
        }));
        setComments(formattedComments);
      });
  }, []);

  return (
    <div>
      <h2>Komentarze</h2>
      {comments.map((comment) => (
        <Komentarz key={comment.id} {...comment} />
      ))}
    </div>
  );
};

export default Komentarze;
