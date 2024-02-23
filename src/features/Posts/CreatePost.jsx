import { useAddPostMutation } from "./PostsApi";

const CreatePost = () => {
  const [addPost, { isLoading }] = useAddPostMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target[0].value === "" || e.target[1].value === "") {
      alert("Please fill in all fields");
    } else {
      addPost({
        post_title: e.target[0].value,
        post_content: e.target[1].value,
        author_id: 1,
      });
      e.target.reset();
    }
  };
  return (
    <section>
      <h2>Create a New Post</h2>
      <form action="" onSubmit={handleSubmit} className="create-post">
        <label htmlFor="postTitle" className="form-input">
          Title:
          <input type="text" id="postTitle" name="postTitle" />
        </label>
        <label htmlFor="postContent" className="form-input">
          Content:
          <input type="text" id="postContent" name="postContent" />
        </label>
        <button type="submit">{isLoading ? "Loading" : "Save"}</button>
      </form>
    </section>
  );
};

export default CreatePost;
