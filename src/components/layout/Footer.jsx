import { NavLink } from "react-router-dom"

export const Footer = () => {
    return (
        <footer>
            <section className="footer">
                <div className="foot-container">
                    <div className="one">
                    <img src="/images/logo.png" alt="logo"/>
                    <p>Welcome to YFlix. your ultimate destination for gadgets!</p>
                    </div>

                    <div className="two">
                        <p>SHOPPING</p>
                        <div className="shop">
                        <NavLink to="#">Computer Store</NavLink>
                        <NavLink to="#">Laptop Store</NavLink>
                        <NavLink to="#">Accessories</NavLink>
                        <NavLink to="#">Sales & Discount</NavLink>
                        </div>
                     </div>

                     
                    <div className="three">
                        <p>EXPERIENCE</p>
                        <div className="exp">
                        <NavLink to="/contact">Contact Us</NavLink>
                        <NavLink to="#">Payment Method</NavLink>
                        <NavLink to="#">Delivery</NavLink>
                        <NavLink to="#">Return and Exchange</NavLink>
                        </div>
                     </div>

                     
                    <div className="news">
                        <p>NEWSLETTER</p>
                        <p>Be the first to know about new arrivals sales & promos!</p>
                        <div className="input">
                            <input type="email" placeholder="Your Email" />
                        </div>
                     </div>
               </div>
            </section>
        </footer>
    )
}