import React from 'react';
import terminal from "../../assets/icons/terminal.png"

const Github: React.FC<{onClick: () => void}> = ({onClick}) => {

    return (
        <div>
            <button
                onClick={onClick}
                className="p-2 rounded-full focus:outline-none transition"
            >
                <img src={terminal} alt="Icon Button" className="w-10 h-10"/>
            </button>
        </div>
    );
};

export default Github;