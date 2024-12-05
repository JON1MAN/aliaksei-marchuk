import './App.css'
import background from "../src/assets/videos/jake_background.mp4"
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
                <video className='videoTag fixed top-0 left-0 w-full h-full object-cover z-1' autoPlay loop muted>
                    <source src={background} type='video/mp4'/>
                </video>
                <div className="fixed top-0 left-0 w-full h-full">
                    <div className="flex items-end justify-center relative">
                        <div className="fixed top-12">
                            <h1 className="text-8xl text-white font-apple font-bold bg-opacity-90">{formattedTime}</h1>
                            <h2 className="text-3xl text-white font-apple font-bold text-center opacity-90">{formattedDate}</h2>
                        </div>
                    </div>
                    <div className="flex items-end justify-center relative">
                        <div className="fixed bottom-10">
                            <Navbar
                                className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 rounded-3xl backdrop-blur-md bg-white/60">
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
                                <div>
                                    <div onClick={(e) => e.stopPropagation()}>
                                        <ShowTerminal onClick={closeShowTerminal}/>
                                    </div>
                                </div>
                            </div>
                        )}
                        {showContact && (
                            <div className="fixed inset-0 flex items-center justify-center z-50 animate-genie"
                                 onClick={closeShowContact}>
                                <div>
                                    <div onClick={(e) => e.stopPropagation()}>
                                        <ShowContact onClick={closeShowContact}/>
                                    </div>
                                </div>
                            </div>
                        )}
                        {showProjects && (
                            <div className="fixed inset-0 flex items-center justify-center z-50 animate-genie"
                                 onClick={closeShowProjects}>
                                <div>
                                    <div onClick={(e) => e.stopPropagation()}>
                                        <ShowProjects onClick={closeShowProjects}/>
                                    </div>
                                </div>
                            </div>
                        )}
                        {showExperience && (
                            <div className="fixed inset-0 flex items-center justify-center z-50 animate-genie"
                                 onClick={closeShowExperience}>
                                <div>
                                    <div onClick={(e) => e.stopPropagation()}>
                                        <ShowExperience onClick={closeShowExperience}/>
                                    </div>
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
