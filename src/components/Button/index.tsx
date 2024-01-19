import React from 'react';
//must import otherwise no function
import PropTypes from 'prop-types';
// Styles
import { Wrapper } from './Button.styles';

//Types
type Props = {
  text: string;
  callback: () => void;
}


const Button: React.FC<Props> = ({ text, callback }) => (
  <Wrapper type='button' onClick={callback}>
    {text}
  </Wrapper>
);
/*** 
Button.propTypes = {
  text: PropTypes.string,
  callback: PropTypes.func
};*/

export default Button;
