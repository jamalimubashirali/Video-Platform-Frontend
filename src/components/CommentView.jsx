import React, { useEffect, useState } from 'react';
import { Avatar } from './index';
import likesService from '../services/likes.service';

const CommentView = ({ comment }) => {
  const [likes, setLikes] = useState(0);
  useEffect(() => {
    (async () => {
      try {
        const likes = await likesService.getCommentLikes(comment._id);
        setLikes(likes);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  return (
    <div className="flex items-start space-x-4">
      <Avatar avatar={comment.avatar} />
      <div>
        <h3 className="text-lg font-bold">{comment.username}</h3>
        <p className="text-gray-700">{comment.content}</p>
        <div className="text-gray-500">
          <span className="mr-2">Likes: {likes}</span>
        </div>
      </div>
    </div>
  );
};

export default CommentView;
