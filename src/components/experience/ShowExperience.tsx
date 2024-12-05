import React from 'react';
import Graph from "./Graph.tsx";

const ShowExperience: React.FC<{ onClick: () => void }> = ({onClick}) => {
    return (
        <div>
            <div
                className="w-full max-w-4xl flex flex-col items-center justify-center shadow-xl bg-white rounded-2xl overflow-hidden gap-1">
                <div
                    className="w-full bg-gray-100 text-white flex flex-row items-center justify-between px-4 py-2 rounded-t-lg">
                    <div className="w-full flex items-center justify-center ml-8">
                        <span className="text-black font-bold text-center">Experience</span>
                    </div>
                    <div className="flex flex-row items-center justify-end space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer" onClick={onClick}></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full cursor-pointer" onClick={onClick}></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full cursor-pointer" onClick={onClick}></div>
                    </div>
                </div>
                <div>
                    <Graph/>
                </div>
            </div>
        </div>
    );

};

export default ShowExperience;
