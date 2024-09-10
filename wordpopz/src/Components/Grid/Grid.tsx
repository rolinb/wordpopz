//This will house the letters 8x8 grid? 
//should be able to clear all clicked updates current word component depending on return from children?
//should this live in a game component? probably
import {useState} from 'react';
import LetterBubble from "../LetterBubble/LetterBubble"

type GridProps = {
    onClick: (l :string) => void 
}

function Grid(props: GridProps) {

    const [currentWord, setCurrentWord] = useState("")

    const handleChildClick= (letter :string) => {
        setCurrentWord(currentWord + letter)
    }

    const submitButtonClick = () => {
        props.onClick(currentWord)
    }

    return (
        <>
        <span>Current Word: {currentWord} </span>
        <LetterBubble
        value="A"
        isClicked={false} 
        onClick={(l :string) => handleChildClick(l)}/>
        <button onClick={submitButtonClick}>Submit</button>
        </>
        
    )
}

export default Grid;