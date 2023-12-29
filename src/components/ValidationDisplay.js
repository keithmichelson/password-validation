import React from 'react';

const ValidationDisplay = ({ condition, value }) => {
    const errorMessages = {
        match: 'Passwords do not match!',
        length: 'Password needs a minimum length of 6 characters',
        number: 'Password needs at least 1 number',
        capital: 'Password needs at least 1 uppercase character',
        lower: 'Password needs at least 1 lowercase character',
        specialChar: 'Password needs at least 1 special character'
    };

    let errorMessage = null;

    if (value === false) {
        errorMessage = errorMessages[condition];
    }

    return (
        errorMessage &&
        <li className={`text-sm`} >
            {errorMessage}
        </li>
    );
};

export default ValidationDisplay;
