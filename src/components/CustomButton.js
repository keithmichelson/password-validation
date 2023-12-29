import React from 'react';

const CustomButton = ({ label, onClick }) => {
    return (
        <button
            className={`bg-purple-500 text-white font-bold py-2 px-4 rounded hover:opacity-75 text-sm`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default CustomButton;
