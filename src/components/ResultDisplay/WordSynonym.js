import React, { useContext } from "react";
import ResultConext from "../../store/result-context";
import classes from "./WordSynonym.module.css";

const WordSynonym = () => {
   const ctx = useContext(ResultConext);

   const { synonymsAntonyms } = ctx.resultSearch;

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

   return <ul className={classes.container}>{synonymsAntonymsJSX}</ul>;
};

export default WordSynonym;
