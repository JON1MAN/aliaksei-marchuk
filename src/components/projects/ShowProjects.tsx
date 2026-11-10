import React from 'react';
import gym from '../../assets/icons/projects/gym.svg'
import bot from '../../assets/icons/projects/bot.svg'
import weather from '../../assets/icons/projects/ai.svg'
import exchanger from '../../assets/icons/projects/exchanger.svg'

const ShowProjects: React.FC = () => {
    return (
        <div
            className="relative flex flex-col justify-center items-center bg-white shadow-lg">
            <div
                className="w-full flex flex-col justify-center items-center gap-4 p-4 lg:p-6 shadow-lg">
                {/* Web Gym Application */}
                <div
                    className="w-full flex flex-col sm:flex-row items-center justify-center bg-white rounded-3xl shadow-lg space-x-4 sm:space-x-6 p-4 lg:p-6">
                    <img src={gym} className="w-20 h-20 rounded-2xl mb-4 sm:mb-0" alt="Profile"/>
                    <div className="flex flex-col flex-1 space-y-2">
                        <span className="text-black text-xl font-bold">Web gym application</span>
                        <span className="text-black text-sm">
                            Application for gym with webchat,
                            payment via PayPal integration, JWT auth
                        </span>
                    </div>
                    <a href="https://github.com/JON1MAN/WebGymApplication"
                       className="w-20 h-8 flex items-center justify-center rounded-full bg-gray-100 text-blue-500 font-bold text-center">
                        Get
                    </a>
                </div>

                <div
                    className="w-full flex flex-col sm:flex-row items-center bg-white rounded-3xl shadow-lg space-x-0 sm:space-x-6 p-4 lg:p-6">
                    <img src={bot} className="w-20 h-20 rounded-2xl mb-4 sm:mb-0" alt="Profile"/>
                    <div className="flex flex-col flex-1 space-y-2">
                        <span className="text-black text-xl font-bold">
                            Allexgro
                        </span>
                        <span className="text-black text-sm">
                            My light implementation of Allegro for OOP classes
                            </span>
                    </div>
                    <a href="https://github.com/JON1MAN/Allexgro"
                       className="w-20 h-8 flex items-center justify-center rounded-full bg-gray-100 text-blue-500 font-bold text-center">
                        Get
                    </a>
                </div>

                <div
                    className="w-full flex flex-col sm:flex-row items-center bg-white rounded-3xl shadow-lg space-x-0 sm:space-x-6 p-4 lg:p-6">
                    <img src={weather} className="w-20 h-20 rounded-2xl mb-4 sm:mb-0" alt="Profile"/>
                    <div className="flex flex-col flex-1 space-y-2">
                        <span className="text-black text-xl font-bold">Photo to Excel</span>
                        <span className="text-black text-sm">
                            You have table on your photo with a lot of data and you don't want to write it manually?
                                Use this script to do it for you!
                        </span>
                    </div>
                    <a href="https://github.com/JON1MAN/Photo-Excel"
                       className="w-20 h-8 flex items-center justify-center rounded-full bg-gray-100 text-blue-500 font-bold text-center">
                        Get
                    </a>
                </div>
            </div>
        </div>
    );

};

export default ShowProjects;
