import { Link, useLoaderData } from "react-router-dom";
import { Modal } from "../../components/Modal/Modal";
import classes from "./PostDetails.module.css";
import axios from "axios";

export const PostDetails = () => {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }

  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.body}</p>
      </main>
    </Modal>
  );
};

export async function loader({ params }) {
  const { id } = params;
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_REACT_USER_POSTS_BACKEND_SERVER}/${id}`
    );
    return response.data.post;
  } catch (error) {
    console.error("Error fetching post details:", error);

    throw new Error("Failed to load post details. Please try again later.");
  }
}
