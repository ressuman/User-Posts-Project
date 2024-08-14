import classes from "./NewPost.module.css";
import { Modal } from "../../components/Modal/Modal";
import { Form, Link, redirect } from "react-router-dom";
import axios from "axios";

export const NewPost = () => {
  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" name="author" id="name" required />
        </p>
        <p className={classes.actions}>
          <Link to="/" type="button">
            Cancel
          </Link>
          <button type="submit">Submit</button>
        </p>
      </Form>
    </Modal>
  );
};

export async function action({ request }) {
  try {
    const formData = await request.formData();
    const postData = {
      body: formData.get("body"),
      author: formData.get("author"),
    };

    const response = await axios.post(
      import.meta.env.VITE_REACT_USER_POSTS_BACKEND_SERVER,
      postData
    );

    return redirect("/");
  } catch (error) {
    console.error("Error submitting post:", error);

    throw new Error("Failed to submit post. Please try again later.");
  }
}
