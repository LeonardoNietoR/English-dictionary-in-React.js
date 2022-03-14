import React from "react";
import classes from './SelectTypeResult.module.css'

const SelectTypeResult = (props) => {
   const handleSelect = (e) => {
      props.onSelectTypeResult(e.target.value);
   };
   return (
      <select className={classes.select} onChange={handleSelect}>
         <option value="definition">English: Definition</option>
         <option value="synonyms">Synonyms/Antonyms</option>
      </select>
   );
};

export default SelectTypeResult;
