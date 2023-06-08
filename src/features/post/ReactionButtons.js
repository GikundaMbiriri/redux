import { useDispatch } from "react-redux";
import { reactionAdded } from "./postSlice";
const reactionEmoji = {
  thumbsUp: "th",
  wow: "ww",
  heart: "ht",
  rocket: "rc",
  coffee: "cf",
};

function ReactionButtons({ post }) {
  const dispatch = useDispatch();
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className=""
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });
  return <div>{reactionButtons}</div>;
}

export default ReactionButtons;
