import React from "react";

const ResultConext = React.createContext({
   resultSearch: {},
   changeResult: () => {},
   // {
   //    word: "",
   //    phonetics: [{ text: "", audio: "" }],
   //    partOfSpeech: {
   //       verb: [{ definition: "", example: "" }],
   //       noun: [{ definition: "", example: "" }],
   //       pronoun: [{ definition: "", example: "" }],
   //       adjective: [{ definition: "", example: "" }],
   //       adverb: [{ definition: "", example: "" }],
   //       preposition: [{ definition: "", example: "" }],
   //       conjunction: [{ definition: "", example: "" }],
   //       interjection: [{ definition: "", example: "" }],
   //    },
   // },
});

export default ResultConext;
