import React, { Fragment } from "react";
import FormDictionary from "./components/FormDictionary/FormDictionary";
import ResultDisplay from "./components/ResultDisplay/ResultDisplay";
import ResultProvider from "./store/ResultProvider";

const App = () => {
   return (
      // <Fragment>
      <ResultProvider>
         <FormDictionary />
         <ResultDisplay />
      </ResultProvider>
      // </Fragment>
   );
};

export default App;
