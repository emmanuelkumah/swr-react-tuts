import "./App.css";
import { useState } from "react";
import Comments from "./components/Comments/Comments";

function App() {
  const [showComments, setShowComments] = useState(false);

  return (
    <>
      <main>
        <h2>Prefetching data with useSWR</h2>
        <p>This demonstrae how to preload data with SWR</p>
        <button
          onClick={() => setShowComments(true)}
          style={{ backgroundColor: "blue", color: "white" }}
        >
          Show all comments
        </button>
        {showComments && <Comments />}
      </main>
    </>
  );
}

export default App;
