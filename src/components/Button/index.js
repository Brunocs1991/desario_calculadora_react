import {ButtonContainer} from "./styles";
import PropTypes from 'prop-types';
const Button = ({label, onClick}) => {
    return (
       <ButtonContainer onClick={onClick}>{label}</ButtonContainer>
    );
}

Button.propTypes = {
    label: PropTypes.string, // Assuming label is a required string
    onClick: PropTypes.func, // Assuming onClick is a required function
};
export default Button;
