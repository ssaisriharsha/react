import { useState } from "react";
import IngredientList from "./IngredientList";
import GetRecipie from "./GetRecipie";
import RecipieDetails from "./RecipieDetails";
export default function Form() {

    function isBlank(str) {
        return !str || /^\s*$/.test(str);
    }
    const [ingredients, setIngredients] = useState([]);
    const [recipieDetails, setRecipieDetails] = useState("");
    const addIngredient = function(formData) {
        !isBlank(formData.get("ingredient"))?setIngredients((prevArray)=>[...prevArray, formData.get("ingredient")]):null;
    }
    const reset = () => {
        setRecipieDetails("");
        setIngredients([]);
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
                    {ingredients.length>=3?<GetRecipie ingredients={ingredients} recipieDetails={recipieDetails} setRecipieDetails={setRecipieDetails} />:null}
                    {recipieDetails!=""?<RecipieDetails recipieDetails={recipieDetails}/>:null}
                    {recipieDetails!=""&&ingredients!=[]?
                    (<div className="button-container">
                        <button onClick={reset} className="reset">Reset</button>
                    </div>)
                    :null}
                </div>
            </>
    )
}

