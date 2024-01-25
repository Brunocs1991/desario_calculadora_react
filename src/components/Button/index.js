import {ButtonContainer} from "./styles";
import PropTypes from 'prop-types';
const Button = ({label, onClick}) => {
    return (
       <ButtonContainer onClick={onClick}>{label}</ButtonContainer>
    );
}

Button.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
};
export default Button;
