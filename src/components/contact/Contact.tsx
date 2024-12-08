import React, {useState} from 'react';
import contact from "../../assets/icons/navbar3/call_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg"

const Contact: React.FC<{onClick: () => void}> = ({onClick}) => {
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
                <img src={contact} alt="Icon Button" className="w-10 h-10 object-center"/>
            </button>
    );
};

export default Contact;