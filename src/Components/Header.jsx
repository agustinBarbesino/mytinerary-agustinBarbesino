import { useState } from "react";
import LoginButton from "./LoginButton"
import Button from "./Button"
import NavBar from "./NavBar";

const Header = () => {
    return(
        <>
            <div className="flex flex-col sm:flex-row justify-between items-center bg-white rounded-full shadow-lg p-2">
                <div className="flex items-center p-2 gap-2">
                    <img className="object-cover w-10 h-10 sm:w-12 sm:h-12 m-2" src="/public/images/MyTineraryLogo.png" alt="logo" />
                    <h1 className="transition ease-in-out delay-100 font-extrabold text-lg sm:text-xl rounded-full p-1 hover:scale-110 hover:bg-blue-700 hover:text-white">
                        MyTinerary
                    </h1>
                </div>
                <div className="flex items-center gap-2 p-2">
                    <NavBar />
                    <LoginButton />
                </div>
            </div>
        </>
    )
}

export default Header