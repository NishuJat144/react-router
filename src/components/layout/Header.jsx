import { NavLink } from "react-router-dom";

export const Header = () => {

    // * Style NavLink Function
    const getNavLinkStyle = ({isActive}) => {
         return {
            color : isActive ? "green" : "black",
         }
    }

    return (
        <header className="section-navbar">
            {/* First Nav */}
            <section className="first-nav">
                <div className="first-container">
                <div className="head-txt">
                <p>Get Gym MemberShip and get 20% refund</p>
                </div>
                <div className="f-navlink">
                <NavLink href="#" >SIGN IN</NavLink>
                <NavLink href="#">SIGN UP</NavLink>
               </div>
              </div>
             </section>
          
           {/* Second Nav */}
               <div className="container">
                    <div className="nav-brand">
                       <NavLink to="/">
                        <p>YFlix</p>
                       </NavLink> 
                    </div>
                    
                    <nav className="navbar">
                        <ul>
                            <li> <NavLink to="/" className={({isActive}) => isActive?"active" : "nav-link" }>
                            HOME</NavLink></li>
                            <li> <NavLink to="/about" className="nav-link" 
                             style={({isActive}) => {
                                return {
                                    color : isActive ? "red" : "black" ,
                                }
                             }}>
                                ABOUT</NavLink></li>
                            <li> <NavLink to="/movie" className="nav-link"
                             style={getNavLinkStyle}>MOVIES</NavLink></li>
                            <li> <NavLink to="/contact" className="nav-link">CONTACT</NavLink> </li>
                        </ul>
                    </nav>
                </div>
        </header>
    );
}
        