import { useNavigate } from "react-router-dom"
import React from "react"

const ProfileButton = () =>{
    const navigate = useNavigate();

  const handleProfileRedirect = () => {
    navigate("/profile");
  }
    
    return(
        <>
            <button onClick={handleProfileRedirect} className="bg-white border-2 rounded-full p-2 font-bold hover:scale-110 hover:bg-slate-300">
                <img className="w-8 h-8" src="/public/images/user.png" alt="user" />
            </button>
        </>
    )
}

export default ProfileButton