import { useState } from 'react';

interface User {
  id: number;
  username: string;
  fullName: string;
}

interface KomentarzProps {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: User;
}

const Komentarz: React.FC<KomentarzProps> = ({ id, body, postId, likes, user }) => {
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => setLikeCount(likeCount + 1);
  const handleDislike = () => setLikeCount(likeCount - 1);

  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        margin: '8px 0',
        maxWidth: '500px',
      }}
    >
      <h4>{user.username} (ID:{id}, postID:{postId})</h4>
      <p>{body}</p>
      <div>
        <strong>Liczba polubień:</strong> {likeCount}
        <button onClick={handleLike} style={{ marginLeft: '8px' }}>👍</button>
        <button onClick={handleDislike} style={{ marginLeft: '8px' }}>👎</button>
      </div>
    </div>
  );
};

export default Komentarz;
