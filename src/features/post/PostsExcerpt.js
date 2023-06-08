import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPostById } from "./postSlice";
function PostsExcerpt({ postId }) {
  const post = useSelector((state) => selectPostById(state, postId));
  //247
  return (
    <article>
      <h3>{post?.title}</h3>
      <p>{post?.body.substring(0, 75)}</p>
      <p>
        <Link to={`post/${post.id}`}>View Post</Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timeStamp={post.date} />
        <ReactionButtons post={post} />
      </p>
    </article>
  );
}

export default PostsExcerpt;
