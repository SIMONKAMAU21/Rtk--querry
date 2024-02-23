import { useState } from "react";
import { createPortal } from "react-dom";
// import { useParams } from "react-router-dom";

import { useDeleteCommentMutation } from "../features/Comments/CommentsApi";

const Comment = ({ comment }) => {
  const [deleteComment, { isLoading: isDeleting }] = useDeleteCommentMutation();
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    deleteComment(comment.id);
  };

  return (
    <article className="card" key={comment._id}>
      <h3>{comment.comment_title}</h3>
      <p>{comment.body}</p>
      <p>Author: {comment.email}</p>
      <button onClick={() => setIsEditing(true)} disabled={isEditing}>
        Update
      </button>
      <button onClick={handleDelete} disabled={isDeleting}>
        {isDeleting ? "Deleting..." : "Delete"}
      </button>

      {isEditing &&
        createPortal(
          <UpdatePost comment={comment} onClose={() => setIsEditing(false)} />,
          document.body
        )}
    </article>
  );
};

export default Comment;
