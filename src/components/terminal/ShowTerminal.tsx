import React, {useState} from 'react';
import {TypeAnimation} from "react-type-animation";

const ShowTerminal: React.FC<{ onClick: () => void }> = ({onClick}) => {

    const [isTextVisible, setIsTextVisible] = useState(false);

    return (
        <div className="min-h-screen bg-custom-gray flex items-center justify-center shadow-2xl">
            <div
                className="terminal max-w-[800px] max-h-[550px] max-[640px]:w-full max-[640px]:h-full bg-white text-black font-mono rounded-lg shadow-lg flex flex-col fixed inset-0 mx-auto mt-10 animate-genie">
                <div
                    className="bg-custom-gray font-jetbrains text-white flex flex-row items-center justify-between px-4 py-2 rounded-t-lg">
                    <div className="w-full flex items-center justify-between ml-8">
                        <span className="text-white mx-auto ">aliaks@my_pc:~/About$</span>
                    </div>
                    <div className="flex flex-row items-center justify-end space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer" onClick={onClick}></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full cursor-pointer" onClick={onClick}></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full cursor-pointer" onClick={onClick}></div>
                    </div>
                </div>

                <div className="w-full h-fit flex flex-col items-start space-y-2 px-4 mx-1 text-black font-jetbrains">
                    <div className="text-sm md:text-base lg:text-lg">
                        <span className="text-green-500">aliaks@my_pc</span>
                        <span className="text-black">:</span>
                        <span className="text-blue-500">~/About</span>
                        <span className="text-green-500">$ </span>
                        <TypeAnimation
                            sequence={[
                                'cat About.txt',
                                1000,
                                () => setIsTextVisible(true)
                            ]}
                            wrapper="span"
                            speed={1}
                            repeat={Infinity}
                        />

                        <div className="w-fit h-fit">
                            {isTextVisible && (
                                <div className="w-fit h-fit text-xs sm:text-base lg:text-lg text-left">
                                <span className="text-black">
                                    Hello! My name is Aliaksei, but you can call me Aliaks. I’m a Software Engineer based in Krakow, Poland. I recently completed my Bachelor of Engineering in Electronics and Telecommunications at AGH University of Science and Technology.<br/><br/>

                                    I’m passionate about building reliable and scalable software. I enjoy exploring complex systems and continuously improving my technical skills while working on meaningful projects.<br/><br/>

                                    In my free time, I like to dive deeper into blockchain technologies, cryptography, and distributed systems, while also expanding my broader engineering knowledge.<br/><br/>

                                    I consider myself a creative, reliable, and fast learner who enjoys collaboration and teamwork. I’m always looking for new challenges and opportunities that help me grow as a developer and contribute to innovative solutions.<br/>
                                </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ShowTerminal;