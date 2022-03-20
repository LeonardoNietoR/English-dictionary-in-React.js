import React, {
   useRef,
   useEffect,
   useState,
   useContext,
   useCallback,
} from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import classes from "./FormDictionary.module.css";
import ResultConext from "../../store/result-context";

const FormDictionary = () => {
   const [inputValue, setInputValue] = useState("run");
   const [error, setError] = useState({});

   const inputText = useRef();
   const ctx = useContext(ResultConext);

   const AJAXCall = useCallback(async () => {
      try {
         const results = await fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`
         );
         console.log(results);

         if (!results.ok) {
            throw new Error(`Sorry, no results found for ${inputValue}`);
         }

         const [data] = await results.json();
         ctx.changeResult(data);
         inputText.current.value = "";
      } catch (err) {
         ctx.changeResult(null, err.message);
      }
   }, [inputValue]);

   useEffect(() => {
      AJAXCall();
   }, [AJAXCall]);

   const submitHandler = (e) => {
      e.preventDefault();
      setInputValue(inputText.current.value);
   };

   return (
      <div className={classes.header}>
         <div className={classes.container_h1}>
            <h1>Dictionary</h1>
         </div>
         <form className={classes.form} onSubmit={submitHandler}>
            <Input
               ref={inputText}
               label=""
               className={classes.input}
               input={{
                  id: "inputDictionary",
                  type: "text",
                  placeholder: "Search",
               }}
            />
            <Button type={"submit"} className={classes.button}>
               <span className={`material-icons ${classes.button_span}`}>
                  search
               </span>
            </Button>
         </form>
      </div>
   );
};

export default FormDictionary;
