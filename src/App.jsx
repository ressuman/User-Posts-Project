import { useState } from "react";
import "./App.css";
import MainHeader from "./components/MainHeader/MainHeader";
import PostList from "./components/PostList/PostList";

function App() {
  const [modalIsVisble, setModalIsVisible] = useState(true);

  function showModalHandler() {
    setModalIsVisible(true);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList isPosting={modalIsVisble} onStopPosting={hideModalHandler} />
      </main>
    </>
  );
}

export default App;
