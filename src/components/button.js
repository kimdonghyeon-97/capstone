import React from 'react';

const Button = ({
    type = 'button',
    className,
    width,
    height,
    margin,
    padding,
    onClick,
    children,
 }) => {
     return (
     <button
       type={type}
       className={className}
       onClick={onClick}
       style={{ width, height, padding, margin }}>
       {children}
       </button>
    );
};

export default Button;

