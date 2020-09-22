import React from 'react';

const ErrorList = ({ errors }) => {
    if (errors.length === 0) { return null;}
    const errorItems = errors.session.map(error => {
        return <li key={error}>{error}</li>
    });
    return (
        <ul className="error-list">{errorItems}</ul>
    )
}

export default ErrorList;