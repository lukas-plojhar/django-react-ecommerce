import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./assets/css/nav.css";
import {ReactComponent as CartSVG} from "./assets/svg/cart.svg";
import {ReactComponent as MenuSVG} from "./assets/svg/menu.svg";

// Images
import logo from "../../../assets/images/teethylogo.png";

export default class nav extends Component {
    componentDidMount() {
        // window.onscroll = function () {
        //     let navbar = document.getElementById("navbar");
        //
        //     if (window.pageYOffset === 0) {
        //         document.getElementById("fixgap").style.height = "0px";
        //         navbar.classList.remove("sticky");
        //         navbar.classList.remove("sticky-design");
        //     } else {
        //         document.getElementById("fixgap").style.height = "100px";
        //         navbar.classList.add("sticky");
        //         navbar.classList.add("sticky-design");
        //     }
        // };
    }

    render() {
        return (
            <React.Fragment>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
                <nav id="navbar" className="top-navbar">
                    <div className="container">
                        <div className="nav d:none sm:d:grid ">
                            <Link to="/">
                                <div className="logo">
                                    <img src={logo} alt="" className="logo"/>
                                </div>
                            </Link>
                            <div className="menu-container text-center">
                                <Link to="/shop">Produkty</Link>
                                <Link to="/recenze">Výsledky</Link>
                                <Link to="/faq">Časté dotazy</Link>
                                <Link to="/kontakt">Kontakt</Link>
                            </div>
                            <div className="cart-svg">
                                <CartSVG/>
                            </div>
                        </div>
                        <div className="mobile-nav d:grid sm:d:none">
                            <Link to="/">
                            <div className="logo">
                                <img src={logo} className="mobile-logo"/>
                            </div>
                                </Link>
                            <div className="cart-svg">
                                <MenuSVG/>
                            </div>
                        </div>
                    </div>
                </nav>
                <div id="fixgap" className="hidden"></div>
            </React.Fragment>
        );
    }
}
