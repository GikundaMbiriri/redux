import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

function PostAuthor({ userId }) {
  const users = useSelector(selectAllUsers);
  const author = users.find((user) => user.id === userId);

  return (
    <div>
      <span>by {author ? author.name : "Unknown Author"}</span>
    </div>
  );
}

export default PostAuthor;
