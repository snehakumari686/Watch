import './Button.css'


import React from 'react';

function Button({ name, onclick }) {
    return <button className="btn" id={name}  onClick={onclick}>{name}</button>;
}

export default Button;
