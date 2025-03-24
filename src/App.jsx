import { Suspense } from "react";
import "./App.css";
import Posts from "./Posts";

function App() {
  const fetchPost = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json();
  };
  const responsePost = fetchPost();
  return (
    <>
      <h3>Vite + React</h3>
      <Suspense fallback={<p>Post is Loading. . . </p>}>
        <Posts responsePost={responsePost}></Posts>
      </Suspense>
    </>
  );
}

export default App;
