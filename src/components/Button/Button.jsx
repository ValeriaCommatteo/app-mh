import React from 'react';
import { Link as Anchor } from 'react-router-dom';

function ActionButton({ toTop, buttonText }) {

    return (
        <Anchor to='/cities' className="btn btn-outline-light login" style={{ backgroundColor: '#210062' }}>{buttonText}</Anchor>
    );
}

export default ActionButton;