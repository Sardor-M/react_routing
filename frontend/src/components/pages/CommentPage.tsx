import React, { useState, useEffect } from 'react';
import { CommentService } from '../../services/CommentService';
import { socket } from '../../socket';
import { useAuth } from '../../context/AuthContext';

interface Comment {
  id: number;
  content: string;
  createdAt: string;
  userId: number;
  eventId: number;
}

interface CommentPageProps {
  eventId: number;
}

const CommentPage: React.FC<CommentPageProps> = ({ eventId }) => {

  const { user } = useAuth();
  const userId = user?.id;

    console.log("user id: " + userId);

  // if (!userId) {
  //   return <div>Please login first to process further</div>;
  // }


  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {

    if(!socket.connected) {
      socket.connect();
      console.log('Socket connected:', socket.connected);
    }

    loadComments();

    socket.on('comment:new', (comment: Comment) => {
      if (comment.eventId === eventId) {
        setComments(prevComments => [...prevComments, comment]);
      }
    });

    return () => {
      socket.off('comment:new');
    };
  }, [eventId]);

  const loadComments = async () => {
    try {
      const fetchedComments = await CommentService.getCommentsByEventId(eventId);
      setComments(fetchedComments);
    } catch (error) {
      console.error('Error loading comments:', error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting comment:', newComment);
    if (newComment.trim()) {
      socket.emit('comment:add', { content: newComment, eventId, userId});
      setNewComment('');
    }
  };

  return (
    <div>
      <h3>Comments</h3>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            {comment.content} - {new Date(comment.createdAt).toLocaleString()}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default CommentPage;