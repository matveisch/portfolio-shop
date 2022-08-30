import React from 'react';

import './UserInit.css';

const UserInit = ({color, width, height, onClick}) => {
    return (
        <div className="user-initials"
             style={{
                 backgroundColor: color,
                 width: width,
                 height: height
        }} onClick={onClick}>MB</div>
    );
};

export default UserInit;