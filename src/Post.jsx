export default function Post({ post }) {
  return (
    <div
      style={{
        border: "2px solid goldenrod",
        borderRadius: "10px",
        marginTop: "5px",
      }}
    >
      <h4>Post Title: {post.title}</h4>
      <p>Post Body: {post.body}</p>
    </div>
  );
}
