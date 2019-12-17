import React from 'react';

function Alert(props) {
    const {status, children} = props;
    return <div className={`alert ${status}`}>{children}</div>
}

export default Alert;