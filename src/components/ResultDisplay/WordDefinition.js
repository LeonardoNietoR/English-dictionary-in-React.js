import React, { useContext } from "react";
import ResultConext from "../../store/result-context";
import classes from "./WordDefinition.module.css";

const WordDefinition = () => {
   const ctx = useContext(ResultConext);
   console.log(ctx.resultSearch.definitions);

   const { definitions } = ctx.resultSearch;

   let definitionsJSX;

   if (definitions) {
      const arrayPartsOfSpeech = Object.entries(definitions);

      definitionsJSX = arrayPartsOfSpeech.map((elem) => {
         const definitionsList = elem[1].map((definition) => {
            return (
               <li key={Math.random()}>
                  <span className={classes.definition_text}>
                     {definition.definition}
                  </span>
                  <span className={classes.example_text}>
                     {definition.example}
                  </span>
               </li>
            );
         });

         return (
            <div className={classes.block_partOfSpeech} key={Math.random()}>
               <h3>{elem[0]}</h3>
               {definitionsList}
            </div>
         );
      });
   }

   return <ol className={classes.container}>{definitionsJSX}</ol>;
};

export default WordDefinition;
