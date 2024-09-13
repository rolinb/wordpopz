import {useEffect, useState} from 'react'
import './LetterBubble.css'
type LetterBubbleProps = {
    //value: string,
    isClicked: boolean | false,
    onClick: (l :string, state :boolean) => void 
}

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


function LetterBubble(props: LetterBubbleProps) {
    
    const [isClicked, setIsClicked] = useState(false)
    const [value, setValue] = useState("")

    useEffect( () => {
        setValue(weighted_letter_generation())
    }, [])

    useEffect( () => {
        const isSelected = props.isClicked
        setIsClicked(isSelected)
    }, [props.isClicked])

    const handleClick = () => {
        props.onClick(value, props.isClicked)
    }

    return (
        <button className={ `LetterBubble ${isClicked && 'selected'}` } onClick={handleClick}>{value}</button>
    )
}

export  default LetterBubble
