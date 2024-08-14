import { Outlet } from "react-router-dom";
import PostList from "../../components/PostList/PostList";
import axios from "axios";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  try {
    const response = await axios.get(
      import.meta.env.VITE_REACT_USER_POSTS_BACKEND_SERVER
    );
    return response.data.posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error("Failed to load posts. Please try again later.");
  }
}
