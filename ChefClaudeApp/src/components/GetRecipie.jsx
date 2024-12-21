import PropTypes from "prop-types"
import { gAPICall } from "./gAPICall";

export default function GetRecipie(props) {
    const getRecipie = async() => {
        props.setRecipieDetails("");
        props.setRecipieDetails(await gAPICall(props.ingredients));
    }
    return(
        <>
            <div className="recipie-getter-card">
                <div className="recipie-text-container">
                    <h3>Ready for a recipie?</h3>
                    <span>Generate a recipie from your list of ingredients.</span>
                </div>
                <div className="recipie-button-container">
                    <button type="button" onClick={getRecipie}>Get a recipie</button>
                </div>
            </div>
        </>
    )
}

GetRecipie.propTypes = {
    ingredients: PropTypes.string.isRequired,
    recipieDetails: PropTypes.string,
    setRecipieDetails: PropTypes.func.isRequired
}