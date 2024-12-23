import Die from "./Die"

export default function GameCard() {
    return (
        <div className="game-card">
            <h1>Tenzies</h1>
            <p>Roll until all dice are the same. Click each die to freeze at its current value between rolls.</p>
            <div className="dice-container">
                <Die dieValue={5} />
                <Die dieValue={5} />
                <Die dieValue={5} />
                <Die dieValue={5} />
                <Die dieValue={5} />
                <Die dieValue={5} />
                <Die dieValue={5} />
                <Die dieValue={5} />
                <Die dieValue={5} />
                <Die dieValue={5} />
            </div>
            <div className="btn-container">
                <button className="roll">Roll dice</button>
            </div>
        </div>
    )
}