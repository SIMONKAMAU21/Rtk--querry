import "../../App.css";
import ClipLoader from "react-spinners/ClipLoader";
import Comment from "../../components/Comment";
import { useGetCommentsQuery } from "./CommentsApi";

const CommentLists = () => {
  const {
    data: comments,
    error,
    isLoading,
    isError,
    isFetching,
  } = useGetCommentsQuery();

  return (
    <div>
      {isError && <div>Error: {error.data.message}</div>}
      {isLoading ||
        (isFetching && <ClipLoader color="#000" loading={true} size={150} />)}
      <h2>Comments</h2>
      <section className="container">
        {comments &&
          comments.map((comment, index) => (
            <Comment key={index} comment={comment} />
          ))}
      </section>
    </div>
  );
};

export default CommentLists;
