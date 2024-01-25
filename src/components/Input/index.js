import {InputContainer} from "./styles";
import PropTypes from "prop-types";

const Input = ({value}) => {
    return (
        <InputContainer>
            <input disabled value={value}/>
        </InputContainer>
    );
}


Input.propTypes = {
    value: PropTypes.string
}
export default Input;
