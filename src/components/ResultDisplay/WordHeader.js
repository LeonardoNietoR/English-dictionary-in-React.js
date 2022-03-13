import React, { useContext } from "react";
import ResultConext from "../../store/result-context";
import classes from "./WordHeader.module.css";
import Button from "../UI/Button";

const WordHeader = () => {
   const ctx = useContext(ResultConext);
   console.log(ctx.resultSearch);

   const phoneticItems = ctx.resultSearch.phonetics?.map((el) => {
      const linkAudio = el.audio;
      const countryAbbreviationCode = linkAudio.match(/[A-Za-z]{2}(?=.\mp3)/gi);

      const handlePlayPronunciation = async function () {
         const audioPhonetic = new Audio(linkAudio);

         try {
            await audioPhonetic.play();
         } catch (err) {
            console.log(err);
         }
      };

      return (
         <li key={Math.random()}>
            <span className={classes.abbreviation_code}>
               {countryAbbreviationCode}
            </span>

            <Button
               type="button"
               onClick={handlePlayPronunciation}
               className={`material-icons ${classes.button}`}
            >
               <span className={`material-icons ${classes.button_span}`}>
                  volume_up
               </span>
            </Button>

            <span className={classes.phonetic}>{el.text}</span>
         </li>
      );
   });

   return (
      <div className={classes.container}>
         <h2>{ctx.resultSearch.word}</h2>
         <ul>{phoneticItems}</ul>
      </div>
   );
};

export default WordHeader;
