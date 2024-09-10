/*
Container level:
Mid screen gameboard -> grid
Above grid -> Current word being clicked
Timer? -- this can be later not really relevant for a while
Error messages -> If we have a non-word? Clear current clicked if so?
Side bar list of entered words so far for tracking? Maybe maybe not not important 
*/

import Grid from "../Grid/Grid"
import { useState } from "react";

function Game() {

    const [currentWord, setCurrentWord] = useState("");

    const checkIsWord = (word: string) =>  {
        console.log(word)
        if (word === "AAA"){
            console.log("real word")
        }
    }

    return (<>
    <Grid onClick={(word) => checkIsWord(word)} />
    </>)
}


export default Game;

