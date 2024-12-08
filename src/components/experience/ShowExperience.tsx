import React from 'react';
import Graph from "./Graph.tsx";

const ShowExperience: React.FC = () => {
    return (
            <div
                className="relative w-full h-fit flex flex-col items-center justify-center shadow-xl bg-white md:rounded-b-2xl gap-1">
                <Graph/>
            </div>
    );
};

export default ShowExperience;
