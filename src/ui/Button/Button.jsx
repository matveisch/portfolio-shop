import React, {useState} from 'react';

import './Button.css';

const Button = ({onClick, name, bgColor, width, cursor, border}) => {
    const [hover, setHover] = useState(false);

    return (
        <button onClick={onClick}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={{
                    width: `${width}`,
                    color: `${bgColor === '#FFFFFF' ? '#302B62' : '#FFFFFF'}`,
                    backgroundColor: `${(hover && bgColor !== '#FFFFFF') ? '#1E1E1E' : bgColor}`,
                    border: border || `${bgColor === '#FFFFFF' ? '1px solid #302B62' : 'none'}`,
                    cursor: cursor || "pointer"
                }}
                className="s-btn button">
            {name}
        </button>
    );
};

export default Button;