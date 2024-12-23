import PropTypes from "prop-types"

export default function Die(props) {
    return(
        <>
            <div className="die"><b>{props.dieValue}</b></div>
        </>
    )
}

Die.propTypes = {
    dieValue: PropTypes.number.isRequired,
}