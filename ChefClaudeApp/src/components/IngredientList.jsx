import PropTypes from "prop-types"

export default function IngredientList(props) {
    return(
        <>
            <h2>Ingredients on hand: </h2>
            <ul>
                {props.ingredients}
            </ul>
        </>
    );
}

IngredientList.propTypes = {
    ingredients: PropTypes.array
}