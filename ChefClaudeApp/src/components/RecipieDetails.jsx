import PropTypes from "prop-types"
import parse from "html-react-parser"

export default function RecipieDetails(props) {
    return(
        <>
            {parse(props.recipieDetails.slice(6, -4))}
        </>
    )
}

RecipieDetails.propTypes = {
    recipieDetails: PropTypes.string
}
