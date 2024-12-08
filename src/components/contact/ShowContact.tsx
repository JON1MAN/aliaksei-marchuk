import React from 'react';
import me from "../../assets/me.png";

const ShowContact: React.FC<{ onClick: () => void }> = ({onClick}) => {
    return (
        <div className="relative max-[640px]:h-full flex flex-col items-center justify-center animate-genie bg-white md:rounded-2xl max-[640px]:gap-4">
            <div
                className="w-full bg-gray-100 text-white flex flex-row items-center justify-between px-4 py-2 md:rounded-t-2xl">
                <div className="w-full flex items-center justify-between">
                    <span className="text-black font-bold mx-auto">Contact</span>
                </div>
                <div className="flex flex-row items-center justify-end space-x-2">
                    <div className="w-3 h-3 bg-red-600 rounded-full cursor-pointer"
                         onClick={onClick}></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full cursor-pointer"
                         onClick={onClick}></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full cursor-pointer"
                         onClick={onClick}></div>
                </div>
            </div>
            <div className="flex-1 p-6 md:p-8 flex flex-col items-center lg:items-start max-[640px]:space-y-10">
                <div className="flex flex-col md:flex-row items-center md:space-x-4">
                    <div className="w-24 h-24 rounded-full overflow-hidden">
                        <img src={me} className="w-full h-full object-cover" alt="Profile"/>
                    </div>
                    <div className="mt-4 md:mt-0 text-center lg:text-left">
                        <h2 className="text-2xl font-bold">Aliaksei Marchuk</h2>
                    </div>
                </div>
                <div className="mt-6 space-y-4 text-gray-700 w-full">
                    <div>
                        <span className="font-bold">Note:</span> <span className="ml-2">Krakow, Poland</span>
                    </div>
                    <div>
                        <span className="font-bold">Gmail:</span>
                        <br/>
                        <span>aliaksmarchuk@gmail.com</span>
                    </div>
                    <div>
                        <span className="font-bold">LinkedIn:</span>
                        <br/>
                        <a
                            href="https://www.linkedin.com/in/aliaksei-marchuk/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                        >
                            click to get to my profile!
                        </a>
                    </div>
                    <div>
                        <span className="font-bold">Telegram:</span>
                        <br/>
                        <a
                            href="https://t.me/leshkamarchuk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                        >
                            @leshkamarchuk
                        </a>
                    </div>
                    <div>
                        <span className="font-bold">Facebook:</span>
                        <br/>
                        <a
                            href="https://www.facebook.com/people/Aliaksei-Marchuk/pfbid0LmQaABUbV8fJTJkZrurKPMtER9CiUwyUGadcW3wSK2KbkR1UUmvkARs4yYx4PS22l/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                        >
                            Aliaksei Marchuk
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowContact;
