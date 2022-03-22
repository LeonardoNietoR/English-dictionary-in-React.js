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

const FormDictionary = (props) => {
   const [inputValue, setInputValue] = useState();

   const input = useRef();

   const ctx = useContext(ResultConext);

   const AJAXCall = useCallback(async () => {
      ctx.setIsLoading(true);
      try {
         const results = await fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`
         );

         if (!results.ok) {
            throw new Error(`Sorry, no results found for ${inputValue}`);
         }

         const [data] = await results.json();
         ctx.changeResult(data);
         input.current.value = "";
         input.current.blur();
      } catch (err) {
         ctx.changeResult(null, err.message);
      }
      ctx.setIsLoading(false);
   }, [inputValue]);

   useEffect(() => {
      AJAXCall();
   }, [AJAXCall]);

   const submitHandler = (e) => {
      e.preventDefault();
      if (input.current.value.trim().length > 0) {
         setInputValue(input.current.value);
         props.onSubmit();
      }
   };

   return (
      <div className={`${classes.header} ${props.className.header}`}>
         <div
            className={`${classes.container_h1_form} ${props.className.container_h1_form}`}
         >
            <div
               className={`${classes.container_h1} ${props.className.container_h1}`}
            >
               <h1>Az Dictionary</h1>
               <span>
                  Welcome to Az-Dictionary. Find English definitions, idioms,
                  pronunciations, synonyms and antonyms.
               </span>
            </div>
            <form className={classes.form} onSubmit={submitHandler}>
               <Input
                  ref={input}
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
      </div>
   );
};

export default FormDictionary;
