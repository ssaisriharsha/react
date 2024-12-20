import { useState } from "react";
import IngredientList from "./IngredientList";
import GetRecipie from "./GetRecipie";
import RecipieDetails from "./RecipieDetails";

export default function Form() {

    function isBlank(str) {
        return !str || /^\s*$/.test(str);
    }
    const [recipieShown, setRecipieShown] = useState(false);
    const [ingredients, setIngredients] = useState([]);
    const addIngredient = function(formData) {
        !isBlank(formData.get("ingredient"))?setIngredients((prevArray)=>[...prevArray, formData.get("ingredient")]):null;
    }
    return(
            <>
                <div className="input-container">
                    <form action={addIngredient}>
                        <input type="text" placeholder="eg. orange" aria-label="add ingredient" name="ingredient"/>
                        <button className="add-ingredient">Add Ingredient</button>
                    </form>
                    <div className="text-container">
                        {ingredients.length!=0?<IngredientList ingredients={ingredients.map(x=><li key={x} className="ingredient">{x}</li>)} />:null}
                    </div>
                    {ingredients.length>=3?<GetRecipie setRecipieShown={setRecipieShown} />:null}
                    {recipieShown?<RecipieDetails />:null}
                </div>
            </>
    )
}
