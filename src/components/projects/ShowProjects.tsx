import React from 'react';
import gym from '../../assets/icons/projects/gym.svg'
import bot from '../../assets/icons/projects/bot.svg'
import weather from '../../assets/icons/projects/ai.svg'
import exchanger from '../../assets/icons/projects/exchanger.svg'

const ShowProjects: React.FC<{ onClick: () => void }> = ({onClick}) => {
    return (
        <div className="min-h-[200px] h-auto lg:min-h-[300px] min-w-[300px] flex justify-center items-center p-4">
            <div
                className="w-full max-w-4xl flex flex-col items-center justify-center shadow-2xl bg-white rounded-2xl overflow-hidden">
                <div
                    className="w-full bg-gray-100 text-white flex flex-row items-center justify-between px-4 py-2 rounded-t-lg">
                    <div className="w-full flex items-center justify-between">
                        <span className="text-black font-bold mx-auto">Projects</span>
                    </div>
                    <div className="flex flex-row items-center justify-end space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer" onClick={onClick}></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full cursor-pointer" onClick={onClick}></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full cursor-pointer" onClick={onClick}></div>
                    </div>
                </div>

                <div className="lg:w-4/5 flex flex-col justify-center items-center gap-4 p-4 lg:p-6">
                    {/* Web Gym Application */}
                    <div
                        className="flex flex-col sm:flex-row items-center justify-center bg-white rounded-3xl shadow-lg space-x-4 sm:space-x-6 p-4 lg:p-6">
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

                    {/* Telegram Shopaholic Bot */}
                    <div
                        className="flex flex-col sm:flex-row items-center bg-white rounded-3xl shadow-lg space-x-0 sm:space-x-6 p-4 lg:p-6">
                        <img src={bot} className="w-20 h-20 rounded-2xl mb-4 sm:mb-0" alt="Profile"/>
                        <div className="flex flex-col flex-1 space-y-2">
                        <span className="text-black text-xl font-bold">
                            Telegram Shopaholic Bot
                            <span className="text-lg"> <br/>(in development 🧑‍💻)</span>
                        </span>
                            <span className="text-black text-sm">
                            Are you tired of constantly checking for discounts
                            on saved products in different apps? <br/>
                            Send him a link to the product, and he will do it for you daily.
                            </span>
                        </div>
                        <a href="https://github.com/JON1MAN/shopaholic-telegram-bot"
                           className="w-20 h-8 flex items-center justify-center rounded-full bg-gray-100 text-blue-500 font-bold text-center">
                            Get
                        </a>
                    </div>

                    {/* Weather Application */}
                    <div
                        className="flex flex-col sm:flex-row items-center bg-white rounded-3xl shadow-lg space-x-0 sm:space-x-6 p-4 lg:p-6">
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

                    {/* Currency Exchange Application */}
                    <div
                        className="flex flex-col sm:flex-row items-center bg-white rounded-3xl shadow-lg space-x-0 sm:space-x-6 p-4 lg:p-6">
                        <img src={exchanger} className="w-20 h-20 rounded-2xl mb-4 sm:mb-0" alt="Profile"/>
                        <div className="flex flex-col flex-1 space-y-2">
                            <span className="text-black text-xl font-bold">Currency exchange application</span>
                            <span className="text-black text-sm">
                            Application to check exchange rates
                            in real-time for 15 different currencies.
                        </span>
                        </div>
                        <a href="https://github.com/JON1MAN/CurrencyExchanger"
                           className="w-20 h-8 flex items-center justify-center rounded-full bg-gray-100 text-blue-500 font-bold text-center">
                            Get
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default ShowProjects;
