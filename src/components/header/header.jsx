import { useState } from "react";
import "./header.css";
import Logo from "../assets/menu.svg";
import xLogo from "../assets/x-img.png"

const Header = () => {
    const [click, unclick] = useState(false);
    const menuClick = ()=> {
        unclick(!click);
        console.log(click);
    }
    return(
        <>
        <header>
            <nav className="navbar">
                <div className="container">
                    <div className="header_content">
                        <h1>Salom</h1>
                       <div className="menu_text">
                       <ul className="text">
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Abaut</a></li>
                            <li><a href="/">busniess</a></li>
                            <button className="btn"><a href="#">Login</a></button>
                        <img className="unmenu" src={xLogo} alt="x" />
                        </ul>
                        <img className="menu" onClick={menuClick} src={Logo} alt="menu"/>{click ? 'true' : ''}
                       </div>
                    </div>
                </div> 
            </nav>
        </header>
        </>
    )
}

export default Header;