import React, { useState } from "react";
import ResultConext from "./result-context";

const ResultProvider = (props) => {
   const [finalDataObject, setFinalDataObject] = useState({});
   const [error, setError] = useState(null);

   // func: the "data" comes from fetch().
   const setDataToBeRendered = (data, errorMessage = null) => {
      if (errorMessage) {
         setError(errorMessage);
         return;
      }

      setError(errorMessage);

      const word = data.word;
      const definitions = {};
      const synonymsAntonyms = { synonyms: [], antonyms: [] };

      const phonetics = data.phonetics
         .filter((el) => el.hasOwnProperty("text") && el.audio?.length > 0)
         .map((el) => {
            return { text: el.text, audio: el.audio };
         });

      const mappingDefinitionsAndExamples = (originalData) => {
         return originalData.map((item) => {
            return {
               definition: item.definition,
               example: item.example || "",
               // synonyms: item.synonyms.length > 0 ? item.synonyms : "",
            };
         });
      };
      data.meanings.forEach((el) => {
         if (!definitions[el.partOfSpeech]) {
            definitions[el.partOfSpeech] = mappingDefinitionsAndExamples(
               el.definitions
            );
         } else {
            definitions[el.partOfSpeech].push(
               ...mappingDefinitionsAndExamples(el.definitions)
            );
         }
         synonymsAntonyms.synonyms.push(...el.synonyms);
         synonymsAntonyms.antonyms.push(...el.antonyms);
      });

      setFinalDataObject({ word, phonetics, definitions, synonymsAntonyms });
   };

   const resultContext = {
      resultSearch: finalDataObject,
      changeResult: setDataToBeRendered,
      error,
   };
   return (
      <ResultConext.Provider value={resultContext}>
         {props.children}
      </ResultConext.Provider>
   );
};

export default ResultProvider;
