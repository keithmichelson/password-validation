import React from 'react';

const ValidationDisplay = ({ condition, value }) => {
    let errorMessage;

    if (condition === 'match' && !value) {
        errorMessage = 'Passwords do not match!';
    }

    if (condition === 'length' && !value) {
        errorMessage = 'Password needs a min length of 6 characters';
    }

    if (condition === 'number' && !value) {
        errorMessage = 'Password needs at least 1 number';
    }

    if (condition === 'capital' && !value) {
        errorMessage = 'Password needs at least 1 uppercase character';
    }

    if (condition === 'lower' && !value) {
        errorMessage = 'Password needs at least 1 lowercase character';
    }

    if (condition === 'specialChar' && !value) {
        errorMessage = 'Password needs at least 1 special character';
    }

    return (
        errorMessage &&
        <li className={`text-sm`} >
            {errorMessage}
        </li>
    );
};

export default ValidationDisplay;
