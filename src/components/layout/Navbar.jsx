import React from "react";

const Navbar = () => {
    return (
        <header>
             <div className="logo">
                    <a href="/">
                    <p>Chez Alonzo</p>
                    </a>
             </div>
        <nav className="navbar">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact</a></li>
            </ul>

            <button className="btn" type="button">
                
                Book Now
                </button>
    
        </nav>
        </header>
           
    );
};

export default Navbar;