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
    active: boolean,
}

function Grid(props: GridProps) {

    //Scrabble letter counts go to 98 since there are 2 blanks, 
    //this is close enough to 100 to take the random and give the extra one to e since it's most common anyways
    

    const [currentWord, setCurrentWord] = useState("");
    const [letterGrid, setLetterGrid] = useState<LetterGridInfo[]>([]); //determine grid size after but just for starting we can go small
    const [indices, setIndices] = useState<number[]>([])

    useEffect( () => setLetterGrid(new Array(64).fill(0).map(()=> {
        let lgi:  LetterGridInfo= {
            active: false,
        }      
    return lgi})),[])
    


    /*
    Rules for click being allowed:
    touching last selected
    not currently in the list (except if last selected)
    */
    function isAllowedClick(index: number): boolean {
        if (indices.includes(index)){ //block clicking letters that weren't last and in the array
            return false
        }
        const last = indices[indices.length-1]
         if (last % 8 === 0) { //Left side
            if (last +1 === index || last+8 === index || last-7 ===index || last+9 === index || last-8 ===index) {
                return true
            }
            return false
        }
        if (last %8 === 7) { //Right side
            if (last-1 === index|| last+8 === index || last-8 ===index || last+7 ===index || last-9 === index) {
                return true
            }
            return false
        }
        if (last+1 === index || last-1 === index || last+8 === index || last-8 === index || last-7 ===index || last+9 === index || last+7 ===index || last-9 === index){
            return true
        }
        return false

    }

    const handleChildClick= (letter: string, selected :boolean, index: number) => {

        //Do this before other checks as the logic is to deselect if it's allowed as opposed to select
        const lastSelected = indices[indices.length-1]
        if (lastSelected === index){
            letterGrid[index].active = false
            setLetterGrid(letterGrid.slice())
            indices.pop()
            setCurrentWord(currentWord.slice(0, -1))
            return
        }
        if (lastSelected === undefined || isAllowedClick(index)){
            letterGrid[index].active = true
            setLetterGrid(letterGrid.slice())
            indices.push(index)
            setCurrentWord(currentWord + letter )
            return
        }
    }

    const submitButtonClick = () => {
        props.onClick(currentWord)
    }

    const letterBubbles = letterGrid.map((c,i) => 
        <LetterBubble key={i} isClicked={c.active} onClick={(letter: string, state :boolean) => handleChildClick(letter, state, i)}/>
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