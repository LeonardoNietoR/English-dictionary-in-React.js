import React, { useContext, useState } from "react";
import ResultConext from "../../store/result-context";
import WordHeader from "./WordHeader";
import WordDefinition from "./WordDefinition";
import WordSynonym from "./WordSynonym";
import classes from "./ResultDisplay.module.css";

const ResultDisplay = () => {
   const [showDefinition, setShowDefinition] = useState(true);
   const ctx = useContext(ResultConext);

   const chooseDefinitionOrSynonymHandler = (result) => {
      result === "definition"
         ? setShowDefinition(true)
         : setShowDefinition(false);
   };

   const displayWord = (
      <div>
         <WordHeader onSelectTypeResult={chooseDefinitionOrSynonymHandler} />
         {showDefinition ? <WordDefinition /> : <WordSynonym />}
      </div>
   );

   const setErrorMessage = (err) => {
      if (err) {
         const arrayErrorMessage = err.split(" ");
         const wordNotFound = arrayErrorMessage.pop();
         const message = arrayErrorMessage.join(" ");

         return (
            <div className={classes.container_error}>
               <p className={classes.error}>
                  {message} <span>{wordNotFound}</span>
               </p>
            </div>
         );
      }
   };

   const displayError = setErrorMessage(ctx.error);

   return (
      <div className={classes.container}>
         {ctx.error ? displayError : displayWord}
      </div>
   );
};

export default ResultDisplay;
