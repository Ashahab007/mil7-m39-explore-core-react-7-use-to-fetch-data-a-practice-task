import { use } from "react";
import Post from "./Post";

export default function Posts({ responsePost }) {
  const posts = use(responsePost);
  console.log(posts);

  return (
    <div
      style={{
        border: "2px solid tomato",
        borderRadius: "10px",
        marginTop: "10px",
        padding: "5px",
      }}
    >
      <p>Total Posts: {posts.length} </p>
      {posts.map((post) => (
        <Post post={post}></Post>
      ))}
    </div>
  );
}
