import { useAddCommentMutation } from "./CommentsApi";

const CreateComment = () => {
  const [addComment, { isLoading }] = useAddCommentMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target[0].value === "" || e.target[1].value === "") {
      alert("Please fill in all fields");
    } else {
      addComment({
        comment_title: e.target[0].value,
        comment_content: e.target[1].value,
        author_id: 1,
      });
      e.target.reset();
    }
  };
  return (
    <section>
      <h2>Create a New Comment</h2>
      <form onSubmit={handleSubmit} className="create-post">
        <label htmlFor="commentTitle" className="form-input">
          Title:
          <input type="text" id="commentTitle" name="commentTitle" />
        </label>
        <label htmlFor="commentContent" className="form-input">
          Content:
          <input type="text" id="commentContent" name="commentContent" />
        </label>
        <button type="submit">{isLoading ? "Loading" : "Save"}</button>
      </form>
    </section>
  );
};

export default CreateComment;
