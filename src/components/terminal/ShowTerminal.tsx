import React, {useState} from 'react';
import {TypeAnimation} from "react-type-animation";

const ShowTerminal: React.FC<{ onClick: () => void }> = ({onClick}) => {

    const [isTextVisible, setIsTextVisible] = useState(false);

    return (
        <div className="min-h-screen bg-custom-gray flex items-center justify-center shadow-2xl">
            <div
                className="terminal max-w-[800px] max-h-[550px] max-[640px]:w-full max-[640px]:h-full bg-custom-purple text-white font-mono rounded-lg shadow-lg flex flex-col fixed inset-0 mx-auto mt-10 animate-genie">
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

                <div className="w-full h-fit flex flex-col items-start space-y-2 px-4 mx-1 text-white font-jetbrains">
                    <div className="text-sm md:text-base lg:text-lg">
                        <span className="text-green-300">aliaks@my_pc</span>
                        <span className="text-white">:</span>
                        <span className="text-blue-500">~/About</span>
                        <span className="text-white">$ </span>
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
                                <span className="text-white">
                                    Hello! My name is Aliaksei, but you can call me Aliaks. I am a dedicated and aspiring Software Engineer currently pursuing my studies in Electronics and Telecommunications at AGH University of Science and Technology in Krakow, Poland.<br/><br/>

                                    With a strong foundation in Java programming, I am deeply passionate about software development and continually strive to enhance my skills and broaden my expertise. My ambition is to evolve into a proficient and impactful developer, contributing innovative solutions to the ever-changing tech landscape.<br/><br/>

                                    I consider myself as a creative, reliable, and quick learner, with a strong inclination toward collaboration and teamwork. I thrive in environments that challenge me to grow and am eager to embrace new opportunities and experiences that will shape my journey as a developer.<br/>
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