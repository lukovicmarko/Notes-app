import React from 'react';

const Alert = ({ className, message }) => {
    return (
        <div className={className}>
            {message}
        </div>
    );
};

export default Alert;