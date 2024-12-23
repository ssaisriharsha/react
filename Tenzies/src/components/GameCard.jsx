import { useState } from "react"
import Die from "./Die"
import { nanoid } from "nanoid";

export default function GameCard() {
    function generateRandomArrayObject() {
        const arr = [];
        for(let i =  0; i < 10; i++) {
            arr.push(
                {
                    value: Math.floor(Math.random()*6)+1,
                    isHeld: false,
                    id: nanoid(),
            }
        ); 
        }
        return arr;
    }

    const rollDice = ()=>{setDieValueArray(generateRandomArrayObject())}
    const hold  = (id)=>{setDieValueArray(prevArray=>prevArray.map(x=>x.id===id?{...x, isHeld: !x.isHeld}:{...x}))};

    const [dieValueArray, setDieValueArray] = useState(generateRandomArrayObject());
    let dieComponents = dieValueArray.map((x)=><Die key={x.id} dieValue={x.value} held={x.isHeld} id={x.id} holdfn={hold}/>)
    return (
        <div className="game-card">
            <h1>Tenzies</h1>
            <p>Roll until all dice are the same. Click each die to freeze at its current value between rolls.</p>
            <div className="dice-container">
                {dieComponents}
            </div>
            <div className="btn-container">
                <button className="roll" onClick={rollDice}>Roll dice</button>
            </div>
        </div>
    )
}