import React from 'react';

const ErrorList = ({ errors }) => {
    if (errors.session.length === 0) { return null;}
    const errorItems = errors.session.map(error => {
        return <li key={error}>{error}</li>
    });
    return (
        <div className={errors.session.length === 0 ? "hidden" : "error-list"}>
            <p className={errors.session.length <= 1 ? "hidden" : "show"}>The following errors occured:</p>
            <ul>{errorItems}</ul>
        </div>
    )
}

export default ErrorList;