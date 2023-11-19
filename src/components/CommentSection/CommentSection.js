// components/CommentSection.js
import React, { useState } from 'react';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div>
      <h3 className="text-[35px] text-center underline mb-4 pt-5">Comments</h3>
      <div>
        {comments.map((comment, index) => (
          <div key={index} className="border p-3 mb-2">
            {comment}
          </div>
        ))}
      </div>
      <div className="mt-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="w-full p-2 border rounded-md"
        />
        <button
          onClick={handleAddComment}
          className="mt-2 px-4 py-2 bg-black text-white rounded-md hover:bg-white hover:text-black border"
        >
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
