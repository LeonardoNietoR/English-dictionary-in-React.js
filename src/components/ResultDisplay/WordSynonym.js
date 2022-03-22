import React, { useContext, useState, useEffect } from "react";
import ResultConext from "../../store/result-context";
import classes from "./WordSynonym.module.css";

const WordSynonym = () => {
   const ctx = useContext(ResultConext);
   const [displaySynAnt, setDisplaySynAnt] = useState(true);

   const { synonymsAntonyms } = ctx.resultSearch;

   useEffect(() => {
      if (
         synonymsAntonyms.synonyms.length === 0 &&
         synonymsAntonyms.antonyms.length === 0
      )
         setDisplaySynAnt(false);
   }, [synonymsAntonyms.synonyms, synonymsAntonyms.antonyms]);

   const arraySynonymsAntonyms = Object.entries(synonymsAntonyms);

   const synonymsAntonymsJSX = arraySynonymsAntonyms.map((elem) => {
      const titleItem = elem[1].length === 0 ? "" : elem[0];

      return (
         <li key={Math.random()}>
            <h3>{titleItem}</h3>
            <span className={classes.text}>{elem[1].join(", ")}</span>
         </li>
      );
   });

   const content = displaySynAnt ? (
      <ul>{synonymsAntonymsJSX}</ul>
   ) : (
      <p>Sorry, neither synonyms nor antonyms are available for this word. </p>
   );

   return <div className={classes.container}>{content}</div>;
};

export default WordSynonym;
