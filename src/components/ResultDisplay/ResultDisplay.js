import React, { useContext, Fragment } from "react";
import ResultConext from "../../store/result-context";
import WordHeader from "./WordHeader";
import WordDefinition from "./WordDefinition";
import classes from "./ResultDisplay.module.css";

const ResultDisplay = () => {
   const ctx = useContext(ResultConext);

   return (
      <div className={classes.container}>
         <WordHeader />
         <WordDefinition />
      </div>
   );
};

export default ResultDisplay;
