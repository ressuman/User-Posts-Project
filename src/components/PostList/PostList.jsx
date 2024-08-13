import { useState } from "react";
import { NewPost } from "../NewPost/NewPost";
import Post from "../Post/Post";
import classes from "./PostList.module.css";
import { Modal } from "../Modal/Modal";

export default function PostList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((prevPosts) => [postData, ...prevPosts]);
  }

  // let modalContent;
  // if (isPosting) {
  //   modalContent = (
  //     <Modal onClose={onStopPosting}>
  //       <NewPost
  // onCancel={onStopPosting} onAddPost={addPostHandler}
  //       />
  //     </Modal>
  //   );
  // }

  return (
    <>
      {/* {isPosting ? (
        <Modal onClose={onStopPosting}>
          <NewPost
            onCancel={onStopPosting}  onAddPost={addPostHandler}
          />
        </Modal>
      ) : null} */}
      {/* {modalContent} */}
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}

      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post, index) => (
            <Post key={index} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}
