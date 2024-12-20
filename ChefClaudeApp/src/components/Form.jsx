import { useState } from "react";
import IngredientList from "./IngredientList";
// import GetRecipie from "./GetRecipie";
import RecipieDetails from "./RecipieDetails";

export default function Form() {
	function isBlank(str) {
		return !str || /^\s*$/.test(str);
	}
	const [recipieShown, setRecipieShown] = useState(false);
	const [ingredients, setIngredients] = useState([]);
	const addIngredient = function (formData) {
		!isBlank(formData.get("ingredient"))
			? setIngredients((prevArray) => [
					...prevArray,
					formData.get("ingredient"),
			  ])
			: null;
	};
    const getRecipie = ()=>{
        setRecipieShown(true);
    }
	return (
		<>
			<div className="input-container">
				<form action={addIngredient}>
					<input
						type="text"
						placeholder="eg. orange"
						aria-label="add ingredient"
						name="ingredient"
					/>
					<button className="add-ingredient">Add Ingredient</button>
				</form>
				<div className="text-container">
					{ingredients.length != 0 ? (
						<IngredientList
							ingredients={ingredients.map((x) => (
								<li key={x} className="ingredient">
									{x}
								</li>
							))}
						/>
					) : null}
				</div>
				{ingredients.length >= 3 ? (
					<div className="recipie-getter-card">
						<div className="recipie-text-container">
							<h3>Ready for a recipie?</h3>
							<span>
								Generate a recipie from your list of
								ingredients.
							</span>
						</div>
						<div className="recipie-button-container">
							<button type="button" onClick={getRecipie}>Get a recipie</button>
						</div>
					</div>
				) : null}
				{recipieShown ? <RecipieDetails /> : null}
			</div>
		</>
	);
}
