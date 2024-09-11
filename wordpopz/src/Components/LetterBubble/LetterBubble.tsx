import {useEffect, useState} from 'react'
import './LetterBubble.css'
type LetterBubbleProps = {
    value: string,
    isClicked: Boolean | false,
    onClick: (l :string, state :boolean) => void 
}



function LetterBubble(props: LetterBubbleProps) {
    
    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        const state = !isClicked //use const to handle async nature of state
        setIsClicked(!isClicked);
        props.onClick(props.value, state)
    }

    return (
        <button className={ `LetterBubble ${isClicked && 'selected'}` } onClick={handleClick}>{props.value}</button>
    )
}

export default LetterBubble