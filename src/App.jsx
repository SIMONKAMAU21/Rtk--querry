import "./App.css";
import CommentLists from "./features/Comments/CommentList";
import CreateComment from "./features/Comments/CreateComment";
import CreatePost from "./features/Posts/CreatePost";
import PostLists from "./features/Posts/PostList";

function App() {
  return (
    <>
      <div className="posts">
        <CreatePost />

        <PostLists />
      </div>
      <div className="comments">
        <CreateComment />

        <CommentLists />
      </div>
    </>
  );
}

export default App;
