import PropTypes from "prop-types"

export default function GetRecipie(props) {
    const getRecipie = () => {
        props.setRecipieShown(prevVal=>!prevVal);
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
    setRecipieShown: PropTypes.func.isRequired
}