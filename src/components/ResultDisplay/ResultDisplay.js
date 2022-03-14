import React, { useContext, useState } from "react";
import ResultConext from "../../store/result-context";
import WordHeader from "./WordHeader";
import WordDefinition from "./WordDefinition";
import WordSynonym from "./WordSynonym";
import classes from "./ResultDisplay.module.css";

const ResultDisplay = () => {
   const [showDefinition, setShowDefinition] = useState(true);
   // const ctx = useContext(ResultConext);

   const selectTypeResultHandler = (result) => {
      if (result === "definition") {
         setShowDefinition(true);
      } else {
         setShowDefinition(false);
      }
   };

   return (
      <div className={classes.container}>
         <WordHeader onSelectTypeResult={selectTypeResultHandler} />
         {showDefinition ? <WordDefinition /> : <WordSynonym />}
      </div>
   );
};

export default ResultDisplay;
