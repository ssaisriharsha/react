import { useState } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

export default function GameCard() {
	function generateRandomArrayObject() {
		const arr = [];
		for (let i = 0; i < 10; i++) {
			arr.push({
				value: Math.floor(Math.random() * 6) + 1,
				isHeld: false,
				id: nanoid(),
			});
		}
		return arr;
	}

	function modifyRandomArrayObject(oldArr) {
		const arr = [];
		for (let obj of oldArr) {
			obj.isHeld
				? arr.push(obj)
				: arr.push({
						...obj,
						value: Math.floor(Math.random() * 6) + 1,
				  });
		}
		return arr;
	}

	function gameWon() {
		let win = false;
		let val = dieValueArray[0].value;
		for (let obj of dieValueArray) {
			if (obj.isHeld && obj.value == val) {
				win = true;
			} else {
				win = false;
				break;
			}
		}
		return win;
	}

	function newGame() {
		setDieValueArray((oldDieValueArray) =>
			oldDieValueArray.map((x) => {
				return {
					...x,
					isHeld: false,
					value: Math.floor(Math.random() * 6) + 1,
				};
			})
		);
        setTurn(0);
	}

	const rollDice = () => {
		setDieValueArray((oldDieValueArray) =>
			modifyRandomArrayObject(oldDieValueArray)
		);
        setTurn(prevTurn=>prevTurn+1);
	};
	const hold = (id) => {
		!gameWon()
			? setDieValueArray((prevArray) =>
					prevArray.map((x) =>
						x.id === id ? { ...x, isHeld: !x.isHeld } : { ...x }
					)
			  )
			: null;
	};

	const [dieValueArray, setDieValueArray] = useState(() =>
		generateRandomArrayObject()
	);
    const [turn, setTurn] = useState(0);
	let dieComponents = dieValueArray.map((x) => (
		<Die
			key={x.id}
			dieValue={x.value}
			held={x.isHeld}
			id={x.id}
			holdfn={hold}
		/>
	));
	return (
		<div className="game-card">
			{gameWon() ? <Confetti /> : null}
			<h1>Tenzies</h1>
			<p>
				Roll until all dice are the same. Click each die to freeze at
				its current value between rolls.
			</p>
            <div className="turn"><b>Turn: {turn}</b></div>
			<div className="dice-container">{dieComponents}</div>
			{!gameWon() ? (
				<div className="btn-container">
					<button className="roll" onClick={rollDice}>
						Roll Dice
					</button>
				</div>
			) : (
				<div className="btn-container">
					<button className="roll" onClick={newGame}>
						New Game
					</button>
				</div>
			)}
		</div>
	);
}
