import { useState } from "react";
import { useUpdateCommentMutation } from "./CommentsApi";

const UpdateComment = ({ onClose, comment }) => {
  const [updateComment, { isLoading }] = useUpdateCommentMutation();

  const [editedComment, setEditedComment] = useState({
    ...comment,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedComment((prevComment) => {
      return { ...prevComment, [name]: value };
    });
  };
  console.log(" comment (in update comment ) -> " + JSON.stringify(comment));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target[0].value === "" || e.target[1].value === "") {
      alert("Please fill in all fields");
    } else {
      updateComment({
        ...editedComment,
      });
      e.target.reset();
    }
  };
  return (
    <section className="modal">
      <h2> Edit your Comment </h2>
      <form onSubmit={handleSubmit} className="form">
        <label className="form-input" htmlFor="commentTitle">
          Title:
          <input
            type="text"
            id="commentTitle"
            name="comment_title"
            value={editedComment.comment_title}
            onChange={handleChange}
          />
        </label>
        <label className="form-input" htmlFor="commentContent">
          Content:
          <textarea
            id="commentContent"
            name="comment_content"
            value={editedComment.comment_content}
            onChange={handleChange}
          />
        </label>
        <button type="submit">{isLoading ? "Loading" : "Save Comment"}</button>
        <button onClick={onClose}>Close Modal</button>
      </form>
    </section>
  );
};

export default UpdateComment;
