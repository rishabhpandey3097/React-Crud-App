import classes from "./NotFound.module.css";
import NotFoundImage from "../assets/images/NotFound.jpg";

const NotFound = (props) => {
  return (
    <div className={classes["not-found"]}>
      <img src={NotFoundImage} />
    </div>
  );
};

export default NotFound;
