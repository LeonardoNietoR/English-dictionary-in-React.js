import React, { useContext } from "react";
import ResultConext from "../../store/result-context";
import WordHeader from "./WordHeader";
import WordDefinition from "./WordDefinition";

const ResultDisplay = () => {
   const ctx = useContext(ResultConext);

   console.log(ctx.resultSearch);

   return (
      <div>
         <WordHeader />
         <WordDefinition />
      </div>
   );
};

export default ResultDisplay;
