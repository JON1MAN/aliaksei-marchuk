import React, {useState} from 'react';
import terminal from "../../assets/icons/navbar3/person_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg"

const Terminal: React.FC<{onClick: () => void}> = ({onClick}) => {
    const [isJumping, setIsJumping] = useState(false);
    const handleOnClick = () => {
        setIsJumping(true);
        setTimeout(() => {
            setIsJumping(false);
        }, 1000);
        onClick();
    }
    return (
        <div>
            <button
                onClick={handleOnClick}
                className={`p-2 rounded-2xl bg-white focus:outline-none transition ${
                    isJumping ? 'animate-bounce' : ''
                }`}
            >
                <img src={terminal} alt="Icon Button" className="w-10 h-10 object-center"/>
            </button>
        </div>
    );
};

export default Terminal;