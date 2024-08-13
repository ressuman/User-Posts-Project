import { MdPostAdd, MdMessage } from "react-icons/md";
import PropTypes from "prop-types";
import classes from "./MainHeader.module.css";

export default function MainHeader({ onCreatePost }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React User Poster
      </h1>
      <p>
        <button className={classes.button} onClick={onCreatePost}>
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
    </header>
  );
}

MainHeader.propTypes = {
  onCreatePost: PropTypes.func.isRequired,
};
