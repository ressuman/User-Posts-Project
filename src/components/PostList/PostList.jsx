import { useState } from "react";
import { NewPost } from "../NewPost/NewPost";
import Post from "../Post/Post";
import classes from "./PostList.module.css";
import { Modal } from "../Modal/Modal";

export default function PostList() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  return (
    <>
      <Modal>
        <NewPost
          onBodyChange={bodyChangeHandler}
          onAuthorChange={authorChangeHandler}
        />
      </Modal>

      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Daniel" body="Hey there!" />
      </ul>
    </>
  );
}
