import PropTypes from "prop-types"

export default function Joke(props) {
    return (
        <>
            {props.setup&&<p>Setup: {props.setup}</p>}
            {props.punchline&&<p>Punchline: {props.punchline}</p>}
            <hr />
        </>
    );
}

Joke.propTypes = {
    setup: PropTypes.string,
    punchline: PropTypes.string
}