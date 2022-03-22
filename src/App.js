import React, { useState } from "react";
import FormDictionary from "./components/FormDictionary/FormDictionary";
import ResultDisplay from "./components/ResultDisplay/ResultDisplay";
import ResultProvider from "./store/ResultProvider";
import classes from "./App.module.css";

const App = () => {
   const [showInitialPage, setShowInitialPage] = useState(true);

   const submitHandler = () => {
      setShowInitialPage(false);
   };

   const formStyles = {
      header: classes.initial_header,
      container_h1_form: classes.container_h1_form,
      container_h1: classes.container_h1,
   };

   return (
      <div className={classes.container}>
         <ResultProvider>
            <FormDictionary
               className={showInitialPage ? formStyles : ""}
               onSubmit={submitHandler}
            />
            <ResultDisplay />
         </ResultProvider>
      </div>
   );
};

export default App;
