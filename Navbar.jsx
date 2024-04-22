import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom";
import "./Navbar.scss"

const Navbar = () => {
    const[active,setActive] = useState(false);
    const[open,setOpen] = useState(false);

    const isActive = ()=>{
        window.scrollY ? setActive(true) : setActive(false)
    }
    useEffect(()=>{
        window.addEventListener("scroll", isActive);
        return ()=>{
            window.removeEventListener("scroll", isActive);
        }
    },[])
    const currentUser={
        id:1,
        username: "John",
        isSeller: true
    }
    return(
        <div className={active ? "navbar active" : "navbar"}>
            <div className="container">
                <div className="logo">
                    <Link to="/" className="link">
                        <span className='text'>FormFlex</span>
                    </Link>
                    
                    <span className='dot'>.</span>
                </div>
                <div className="links">
                    <span>ABOUT US</span>
                    <span>ACTIVITIES</span>
                    <span>SIGN IN</span>
                    <span>AVATAR</span>
                    
                    <div className='user'>
                        <img src="wie.png"/> 
                    </div>

                </div>
            </div>
            {
                <>
                <hr />
                
                </>
                
            }
        </div>
    )
}

export default Navbar