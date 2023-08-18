import "./App.css";
import Post from "./components/Post";
import { posts } from "./utils";

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center my-10">
      <h1 className="text-3xl font-bold mb-4">Facebook Posts</h1>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default App;
