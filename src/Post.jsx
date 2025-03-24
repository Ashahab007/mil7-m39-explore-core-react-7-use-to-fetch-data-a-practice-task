export default function Post({ post }) {
  return (
    <div>
      <p>Post Title: {post.title}</p>
      <p>Post Body: {post.body}</p>
    </div>
  );
}
