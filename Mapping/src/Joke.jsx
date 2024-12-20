import PropTypes from "prop-types"
import { useState } from "react"

export default function Joke(props) {
    const [isShown, setIsShown] = useState(false);
    const handleClick = ()=>{
        setIsShown(prevState=>!prevState);
    }
    return (
        <>
            {props.setup&&<p>Setup: {props.setup}</p>}
            {isShown&&<p>Punchline: {props.punchline}</p>}
            <button onClick={handleClick}>{isShown?"Hide Punchline":"Show Punchline"}</button>
            <hr />
        </>
    );
}

Joke.propTypes = {
    setup: PropTypes.string,
    punchline: PropTypes.string
}