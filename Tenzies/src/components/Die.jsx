import PropTypes from "prop-types"

export default function Die(props) {
    const handleClick = () =>props.holdfn(props.id);

    return(
        <>
            <div className={props.held===true?"die held":"die"} onClick={handleClick}><b>{props.dieValue}</b></div>
        </>
    )
}

Die.propTypes = {
    dieValue: PropTypes.number.isRequired,
    held: PropTypes.bool.isRequired,
    holdfn: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
}