import { useNavigate } from "react-router-dom";
import classes from "./Modal.module.css";
import PropTypes from "prop-types";

export const Modal = ({ children }) => {
  const navigate = useNavigate();

  function closeHandler() {
    navigate("..");
  }

  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};
