import { useState } from "react"

export default function App() {
    // let [stateText, setStateText] = useState(0);
    const [isGoingOut, setIsGoingOut] = useState(true);
    const [unreadMessages, setUnreadMessages] = useState(["a", "b"])
    const handleClick = () => {
        setIsGoingOut(prevValue=>!prevValue);
    }
    return(
        <>
            <h1>State demonstration</h1>
            <h2>Do you feel like going out?</h2>
            <button onClick={handleClick}>{isGoingOut?"Yes":"No"}</button>
            {/* <button onClick={handleMinusClick}>-</button> */}
            {unreadMessages.length==0?<p>You have no unread messages.</p>:null}
        </>
    )
}