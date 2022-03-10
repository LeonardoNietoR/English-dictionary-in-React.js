import React, { useEffect, useCallback } from "react";
import FormDictionary from "./components/FormDictionary/FormDictionary";

const App = () => {
   const executeFetch = useCallback(async () => {
      const results = await fetch(
         "https://api.dictionaryapi.dev/api/v2/entries/en/get"
      );
      const data = await results.json();
      console.log(data);
   }, []);

   useEffect(() => {
      executeFetch();
   }, [executeFetch]);

   return <FormDictionary />;
};

export default App;
