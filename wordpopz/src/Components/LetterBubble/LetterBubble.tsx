import {useEffect, useState} from 'react'
import './LetterBubble.css'
type LetterBubbleProps = {
    value: string,
    isClicked: Boolean | false,
    onClick: (l :string) => void 
}



function LetterBubble(props: LetterBubbleProps) {
    
    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(!isClicked);
        props.onClick(props.value)
    }

    return (
        <button className={ `LetterBubble ${isClicked && 'selected'}` } onClick={handleClick}>{props.value}</button>
    )
}

export default LetterBubble