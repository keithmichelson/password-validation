import React from 'react';

const PasswordInput = ({ value, onChange, placeholder }) => {
    return (
        <input
            type="password"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="border border-black p-2"
        />
    );
};

export default PasswordInput;