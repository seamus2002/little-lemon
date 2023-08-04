import { Link } from "react-router-dom";

const LargeButton = (props) => {
    return (
        <Link to={props.link}>
            <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
            >
                {props.text}
            </button>
        </Link>
    );
};

export default LargeButton;
