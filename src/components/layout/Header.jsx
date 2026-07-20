export const Header = () => {
    return (
        <header className="section-navbar">
            {/* First Nav */}
            <section className="first-nav">
                <div className="first-container">
                <div className="head-txt">
                <p>Get 30 day MemberShip and get 100% refund</p>
                </div>
                <div className="f-navlink">
                <a href="#" >SIGN IN</a>
                <a href="#">SIGN UP</a>
               </div>
              </div>
             </section>
          
           {/* Second Nav */}
               <div className="container">
                    <div className="nav-brand">
                       <a href="#">
                        <p>YFlix</p>
                       </a> 
                    </div>
                    
                    <nav className="navbar">
                        <ul>
                            <li> <a href="#">HOME</a></li>
                            <li> <a href="#">ABOUT</a></li>
                            <li> <a href="#">MOVIES</a></li>
                            <li> <a href="#">CONTACT</a> </li>
                        </ul>
                    </nav>
                </div>
        </header>
    );
}
        