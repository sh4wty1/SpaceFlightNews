import React from "react";
import logoImg from "../../assets/images/logo.svg";
import "./navbar.css"

class Navbar extends React.Component {
    render() {
        return (
        <header>
            <nav id='navbar'>
              <div className='nav-brand'>
                <img src={logoImg} alt="LogoImage" id='brand-img' />
                <h1>Space Flight News</h1>
              </div>
            
              <ul className="nav-list">
                <li className="nav-item"><a href="/">Home</a></li>
                <li className="nav-item"><a href="/">Trending</a></li>
                <li className="nav-item"><a href="/">Categories</a></li>
                <li className="nav-item"><a href="/">About Us</a></li>
              </ul>
            </nav>
        </header>
        )
    }
}

export default Navbar;