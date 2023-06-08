import { useSelector } from "react-redux";
import { selectPostIds, getPostsStatus, getPostsError } from "./postSlice";
import PostsExcerpt from "./PostsExcerpt";
function PostsList() {
  const orderedPostIds = useSelector(selectPostIds);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  let content;
  if (postsStatus == "loading") {
    content = <p>Loading</p>;
  } else if (postsStatus === "succeeded") {
    content = orderedPostIds.map((postId) => (
      <PostsExcerpt key={postId} postId={postId} />
    ));
  } else if (postsStatus === "failed") {
    content = <p>{error}</p>;
  }
  return (
    <div>
      <section>
        <h2>Posts</h2>
        {content}
      </section>
    </div>
  );
}

export default PostsList;