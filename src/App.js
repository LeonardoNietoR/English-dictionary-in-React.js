import React, { Fragment } from "react";
import FormDictionary from "./components/FormDictionary/FormDictionary";
import ResultDisplay from "./components/ResultDisplay/ResultDisplay";
import ResultProvider from "./store/ResultProvider";
import classes from "./App.module.css";

const App = () => {
   return (
      <div className={classes.container}>
         <ResultProvider>
            <FormDictionary />
            <ResultDisplay />
         </ResultProvider>
      </div>
   );
};

export default App;
