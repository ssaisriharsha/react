export default function Form() {
    const ingredients = [];
    const addIngredient = function() {
       ingredients.push(document.querySelector("input").value)
       console.log(ingredients)
    }
    return(
            <div className="input-container">
                <form method="POST" action="">
                    <input type="text" placeholder="eg. orange" aria-label="add ingredient" name="ingredient"/>
                    <button type="button" className="add-ingredient" onClick={addIngredient}>Add Ingredient</button>
                </form>
            </div>
    )
}
