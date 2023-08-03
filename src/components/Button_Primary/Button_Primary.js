import React from "react";
import './Button_Primary.css';

function Button_Primary(props) {
    const {variant = 'btn_Pry', children, icon, ...rest} = props
  return (
    <button className={`btnBlue ${variant}`} {...rest}>
      {children}
    </button>
  );
}

export default Button_Primary;
