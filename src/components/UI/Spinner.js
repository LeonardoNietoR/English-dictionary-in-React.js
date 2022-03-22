import classes from "./Spinner.module.css";

const Spinner = (props) => {
   return (
      <div className={`${classes.spinner} ${props.className}`}>
         <div></div>
         <div></div>
      </div>
   );
};

export default Spinner;
