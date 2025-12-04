import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PostList from "./components/PostList";

function App() {
  return (
    <>
      <PostList />
      <button className="btn btn-primary">Hello Bootstrap</button>
    </>
  );
}

export default App;
