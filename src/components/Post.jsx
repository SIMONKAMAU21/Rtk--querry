import { useState } from "react";
import { createPortal } from "react-dom";
// import { useParams } from "react-router-dom";

import {
  useDeletePostMutation,
  useUpdatePostMutation,
} from "../features/Posts/PostsApi";
import UpdatePost from "../features/Posts/UpdatePost";

const Post = ({ post }) => {

  const [deletePost, { isLoading: isDeleting }] = useDeletePostMutation();
  const [isEditing, setIsEditing] = useState(false);
 

  const handleDelete = () => {
    deletePost(post.id);
  };

  return (
    <article className="card" key={post._id}>
      <h3>{post.post_title}</h3>
      <p>{post.body}</p>
      <p>Author: {post.userId}</p>
      <button onClick={() => setIsEditing(true)} disabled={isEditing}>
        Update
      </button>
      <button onClick={handleDelete} disabled={isDeleting}>
        {isDeleting ? "Deleting..." : "Delete"}
      </button>

      {isEditing &&
        createPortal(
          <UpdatePost post={post} onClose={() => setIsEditing(false)} />,
          document.body
        )}
    </article>
  );
};

export default Post;
