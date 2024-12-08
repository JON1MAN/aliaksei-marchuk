import React, {useState} from 'react';
import experience from "../../assets/icons/navbar3/monitoring_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg"

const Experience: React.FC<{onClick: () => void}> = ({onClick}) => {
    const [isJumping, setIsJumping] = useState(false);
    const handleOnClick = () => {
        setIsJumping(true);
        setTimeout(() => {
            setIsJumping(false);
        }, 1000);
        onClick();
    }
    return (
            <button
                onClick={handleOnClick}
                className={`p-2 rounded-2xl bg-white focus:outline-none transition ${
                    isJumping ? 'animate-bounce' : ''
                }`}
            >
                <img src={experience} alt="Icon Button" className="w-10 h-10 bg-white"/>
            </button>
    );
};

export default Experience;