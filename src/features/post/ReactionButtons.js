import { useAddReactionMutation } from "./postSlice";
const reactionEmoji = {
  thumbsUp: "th",
  wow: "ww",
  heart: "ht",
  rocket: "rc",
  coffee: "cf",
};

function ReactionButtons({ post }) {
  const [addReaction] = useAddReactionMutation();
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className=""
        onClick={() => {
          const newValue = post.reactions[name] + 1;

          addReaction({
            postId: post.id,
            reactions: { ...post.reactions, [name]: newValue },
          });
        }}
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });
  return <div>{reactionButtons}</div>;
}

export default ReactionButtons;
