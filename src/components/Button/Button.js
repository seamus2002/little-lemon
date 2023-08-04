import { Link } from "react-router-dom";

const Button = (props) => {
    return (
        <Link to={props.link} class="btn btn-primary">
            {props.text}
        </Link>
    );
};

export default Button;
