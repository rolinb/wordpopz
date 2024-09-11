//This will house the letters 8x8 grid? 
//should be able to clear all clicked updates current word component depending on return from children?
//should this live in a game component? probably
import {useEffect, useState} from 'react';
import LetterBubble from "../LetterBubble/LetterBubble"
import './Grid.css'

type GridProps = {
    onClick: (l :string) => void 
}

type LetterGridInfo = {
    letter: string,
    active: boolean,
}

function Grid(props: GridProps) {

    //Scrabble letter counts go to 98 since there are 2 blanks, 
    //this is close enough to 100 to take the random and give the extra one to e since it's most common anyways
    const letters = ["e", "a", "i", "o", "n", "r", "t", "l", "s","u", 
                    "d", "g", 
                    "b", "c", "m", "p",
                    "f", "h", "v", "w", "y",
                    "k",
                    "j", "x",
                    "q", "z"
                    ]
    const letterWeights = [12, 21, 30, 38, 44, 50, 56, 60, 64, 68, 
                    72, 75,
                    77, 79, 81, 83,
                    85, 87, 89, 91, 93,
                    94,
                    95, 96,
                    97, 98
                    ]

    function weighted_letter_generation(): string{
        const r = Math.random()*98
        for (let i = 0; i < letterWeights.length; i++) {
            if (letterWeights[i] >= r){
                return letters[i]
            }
        }
        return "e"
    }

    const [currentWord, setCurrentWord] = useState("");
    const [letterGrid, setLetterGrid] = useState<LetterGridInfo[]>([]); //determine grid size after but just for starting we can go small

    useEffect( () => setLetterGrid(new Array(9).fill(0).map(()=> {
        let lgi:  LetterGridInfo= {
            letter: weighted_letter_generation(),
            active: false,
        }      
    return lgi})),[])
    


    // Child should not care about it's index that's only for the grid so make it an optional
    const handleChildClick= (letter :string, selected :boolean, index?: number) => {
        console.log("Index clicked: " + index)
        if (selected) {
            setCurrentWord(currentWord + letter)
        } else {
            const tmp  = currentWord.slice(0, -1)
            setCurrentWord(tmp)
        }
    }

    const submitButtonClick = () => {
        props.onClick(currentWord)
    }

    const generateGrid = () => {

    }

    const letterBubbles = letterGrid.map((c,i) => 
        <LetterBubble key={i} value={c.letter} isClicked={c.active} onClick={(letter: string, state :boolean) => handleChildClick(letter, state, i)}/>
    )

    return (
        <>
        <span>Current Word: {currentWord} </span>
        <div className='grid'>
            {letterBubbles}
        </div>

        <button onClick={submitButtonClick}>Submit</button>
        </>
        
    )
}

export default Grid;