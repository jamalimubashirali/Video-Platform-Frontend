import React, { useEffect } from 'react';
import commentService from '../services/comment.service';
import { CommentView } from '.';

const CommentList = ({ videoId }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    ;(async () => {
      const comments = await commentService.getComments(videoId);
      if (comments) {
        setComments(comments);
      }
    })();
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h1 className="text-xl font-bold mb-4">
        {`Comments (${comments.length})`}
      </h1>
      <div className='space-y-2'>
        {comments.map((comment) => (
          <CommentView key={comment._id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentList;
