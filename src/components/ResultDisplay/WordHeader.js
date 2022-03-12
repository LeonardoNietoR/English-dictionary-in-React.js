import React, { useContext } from "react";
import ResultConext from "../../store/result-context";
import classes from "./WordHeader.module.css";

const WordHeader = () => {
   const ctx = useContext(ResultConext);

   const phoneticItems = ctx.resultSearch.phonetics?.map((el) => {
      return (
         <li key={Math.random()}>
            <span className={classes.phonetic}>{el.text}</span>
            <span className={`material-icons ${classes.icon}`}>volume_up</span>
         </li>
      );
   });

   return (
      <div className={classes.container}>
         <h2>{ctx.resultSearch.word}</h2>
         <ul>{phoneticItems}</ul>
      </div>
   );
};

export default WordHeader;
