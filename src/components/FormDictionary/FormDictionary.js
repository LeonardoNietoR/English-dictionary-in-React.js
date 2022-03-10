import React, { useRef, useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import classes from "./FormDictionary.module.css";

const FormDictionary = () => {
   const [inputValue, setInputValue] = useState("");
   const inputText = useRef();

   const submitHandler = (e) => {
      e.preventDefault();
      setInputValue(inputText.current.value);
      console.log(inputValue);
   };

   return (
      <form onSubmit={submitHandler}>
         <Input
            ref={inputText}
            label=""
            input={{
               id: "inputDictionary",
               type: "text",
               placeholder: "Search",
            }}
         />
         <Button type={"submit"} className={classes.button} />
      </form>
   );
};

export default FormDictionary;
