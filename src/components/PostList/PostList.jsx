import { useEffect, useState } from "react";
import { NewPost } from "../NewPost/NewPost";
import Post from "../Post/Post";
import classes from "./PostList.module.css";
import { Modal } from "../Modal/Modal";
import PropTypes from "prop-types";
import axios from "axios";

export default function PostList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get(
          import.meta.env.VITE_REACT_USER_POSTS_BACKEND_SERVER
        );
        setPosts(response.data.posts);
        console.log(response.data.posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchPosts();
  }, []);

  function addPostHandler(postData) {
    axios
      .post(import.meta.env.VITE_REACT_USER_POSTS_BACKEND_SERVER, postData)
      .then((response) => {
        console.log("Post successfully created:", response.data.post);
        setPosts((prevPosts) => [response.data.post, ...prevPosts]);
      })
      .catch((error) => {
        console.error("Error creating post:", error);
      });
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
          {posts.map((post) => (
            <Post key={post.id} author={post.author} body={post.body} />
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

PostList.propTypes = {
  isPosting: PropTypes.bool.isRequired,
  onStopPosting: PropTypes.func.isRequired,
};
