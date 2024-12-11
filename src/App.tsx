import './App.css'
//import background from "../src/assets/videos/jake_background.mp4"
import background from "../src/assets/adventure-time.jpg"

import Terminal from "./components/terminal/Terminal.tsx";
import ShowTerminal from "./components/terminal/ShowTerminal.tsx";
import {useEffect, useState} from 'react';
import {Navbar} from "@material-tailwind/react";
import Contact from "./components/contact/Contact.tsx";
import Projects from "./components/projects/Projects.tsx";
import Experince from "./components/experience/Experince.tsx";
import ShowContact from "./components/contact/ShowContact.tsx";
import ShowProjects from "./components/projects/ShowProjects.tsx";
import ShowExperience from "./components/experience/ShowExperience.tsx";

function App() {

    const [showTerminal, setShowTerminal] = useState(false);
    const [showContact, setShowContact] = useState(false);
    const [showProjects, setShowProjects] = useState(false);
    const [showExperience, setShowExperience] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleShowTerminal = () => {
        setShowTerminal(true);
    };

    const closeShowTerminal = () => {
        setShowTerminal(false);
    };

    const handleShowContact = () => {
        setShowContact(true);
    };

    const closeShowContact = () => {
        setShowContact(false);
    };

    const handleShowProjects = () => {
        setShowProjects(true);
    };

    const closeShowProjects = () => {
        setShowProjects(false);
    }

    const handleShowExperience = () => {
        setShowExperience(true);
    }

    const closeShowExperience = () => {
        setShowExperience(false);
    }

    const formattedTime = currentTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: false});
    const formattedDate = currentTime.toLocaleDateString([], {day: '2-digit', month: 'long'});

    return (
        <>
            <div className="w-full h-full">
                {/*<video className='videoTag fixed top-0 left-0 w-full h-full object-cover z-1' autoPlay loop muted>
                    <source src={background} type='video/mp4'/>
                </video>*/}
                <img src={background} className="fixed top-0 left-0 w-full h-full object-cover z-1"/>
                <div className="starfall">
                    <div className="falling-star"></div>
                    <div className="falling-star"></div>
                    <div className="falling-star"></div>
                    <div className="falling-star"></div>
                    <div className="falling-star"></div>
                    <div className="falling-star"></div>
                    <div className="falling-star"></div>
                    <div className="falling-star"></div>
                    <div className="falling-star"></div>
                    <div className="falling-star"></div>
                    <div className="falling-star"></div>
                    <div className="falling-star"></div>
                    <div className="falling-star"></div>
                    <div className="falling-star"></div>
                    <div className="falling-star"></div>
                    <div className="falling-star"></div>
                    <div className="falling-star"></div>
                    <div className="falling-star"></div>
                    <div className="falling-star"></div>
                    <div className="falling-star"></div>
                    <div className="falling-star"></div>
                    <div className="falling-star"></div>
                    <div className="falling-star"></div>
                    <div className="falling-star"></div>
                    <div className="falling-star"></div>
                    <div className="falling-star"></div>
                    <div className="falling-star"></div>
                    <div className="falling-star"></div>
                    <div className="falling-star"></div>
                    <div className="falling-star"></div>
                    <div className="falling-star"></div>
                    <div className="falling-star"></div>
                    <div className="falling-star"></div>
                    <div className="falling-star"></div>
                    <div className="falling-star"></div>
                    <div className="falling-star"></div>
                    <div className="falling-star"></div>
                    <div className="falling-star"></div>
                    <div className="falling-star"></div>
                    <div className="falling-star"></div>
                </div>
                <div className="fixed w-full h-full ">
                    <div className="flex items-end justify-center">
                        <div className="fixed top-12">
                            <h1 className="text-8xl text-white font-apple font-bold bg-opacity-90">{formattedTime}</h1>
                            <h2 className="text-3xl text-white font-apple font-bold text-center opacity-90">{formattedDate}</h2>
                        </div>
                    </div>
                    <div className="flex items-center justify-center relative">
                        <div className="fixed bottom-10">
                            <Navbar
                                className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 rounded-3xl backdrop-blur-md bg-white/60"
                                placeholder={undefined}
                                onPointerEnterCapture={undefined}
                                onPointerLeaveCapture={undefined}
                            >
                                <div
                                    className="container mx-auto space-x-10 flex items-center justify-between text-blue-gray-900">
                                    <Terminal onClick={handleShowTerminal}/>
                                    <Contact onClick={handleShowContact}/>
                                    <Projects onClick={handleShowProjects}/>
                                    <Experince onClick={handleShowExperience}/>
                                </div>
                            </Navbar>
                        </div>
                        {showTerminal && (
                            <div className={`fixed inset-0 flex items-center justify-center z-50 ${
                                showTerminal ? 'animate-genie' : 'animate-genie-exit'
                            }`}
                                 onClick={closeShowTerminal}>
                                <div onClick={(e) => e.stopPropagation()}>
                                    <ShowTerminal onClick={closeShowTerminal}/>
                                </div>
                            </div>
                        )}

                        {showContact && (
                            <div className="fixed inset-0 flex flex-col items-center justify-center z-50 animate-genie"
                                 onClick={closeShowContact}>
                                <div className="relative max-[640px]:w-full max-[640px]:h-full "
                                     onClick={(e) => e.stopPropagation()}>
                                    <ShowContact onClick={closeShowContact}/>
                                </div>
                            </div>
                        )}
                        {showProjects && (
                            <div className="fixed inset-0 flex flex-col items-center justify-center z-50 animate-genie"
                                 onClick={closeShowProjects}>
                                <div
                                    className="w-1/2 max-[640px]:w-full max-[1024px]:w-1/2 bg-gray-100 text-white flex flex-row items-center justify-between px-4 py-2 md:rounded-t-2xl">
                                    <div className="w-full flex items-center justify-between">
                                        <span className="text-black font-bold mx-auto">Projects</span>
                                    </div>
                                    <div className="flex flex-row items-center justify-end space-x-2">
                                        <div className="w-3 h-3 bg-red-600 rounded-full cursor-pointer"
                                             onClick={closeShowProjects}></div>
                                        <div className="w-3 h-3 bg-yellow-400 rounded-full cursor-pointer"
                                             onClick={closeShowProjects}></div>
                                        <div className="w-3 h-3 bg-green-500 rounded-full cursor-pointer"
                                             onClick={closeShowProjects}></div>
                                    </div>
                                </div>

                                <div
                                    className="relative w-1/2 h-3/4 max-[640px]:w-full max-[1024px]:w-1/2 max-[640px]:h-full lg:h-fit bg-white md:rounded-b-2xl overflow-y-auto"
                                    onClick={(e) => e.stopPropagation()}>
                                    <ShowProjects/>
                                </div>
                            </div>
                        )}
                        {showExperience && (
                            <div className="fixed inset-0 flex flex-col items-center justify-center z-50 animate-genie"
                                 onClick={closeShowExperience}>
                                <div
                                    className="w-1/3 max-[640px]:w-full max-[1024px]:w-1/2 bg-gray-100 text-white flex flex-row items-center justify-between px-4 py-2 md:rounded-t-2xl">
                                    <div className="w-full flex items-center justify-center ml-8">
                                        <span className="text-black font-bold text-center">Experience</span>
                                    </div>
                                    <div className="flex flex-row items-center justify-end space-x-2">
                                        <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer"
                                             onClick={closeShowExperience}></div>
                                        <div className="w-3 h-3 bg-yellow-400 rounded-full cursor-pointer"
                                             onClick={closeShowExperience}></div>
                                        <div className="w-3 h-3 bg-green-500 rounded-full cursor-pointer"
                                             onClick={closeShowExperience}></div>
                                    </div>
                                </div>
                                <div className="relative w-1/3 max-[640px]:w-full max-[1024px]:w-1/2 max-[640px]:h-full overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                                    <ShowExperience/>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
