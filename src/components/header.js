import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import HeaderItems from "../constant/header-items";
import {Swipeable} from "react-swipeable";

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeMobileNav: false
        }
    }

    activeNav = (e) => {
        let ulNode = e.target.parentNode.parentNode.parentNode;
        let liNode = e.target.parentNode.parentNode;
        let listItems = ulNode.childNodes;
        listItems.forEach((listItem, index) => {
            listItem.classList.remove('active');
        });
        liNode.classList.add('active');
        this.toggleMobileNav();
    };

    toggleMobileNav = () => {
        this.setState({
            activeMobileNav: !this.state.activeMobileNav
        })
    };

    render() {
        return (
            <Swipeable onSwipedLeft={() => this.toggleMobileNav()}>
                <header className={this.state.activeMobileNav ? "mobile-nav-active" : ""}>
                    <div className="d-flex flex-column">
                        <div className="profile">
                            <img src="/img/profile-img.jpg" alt="" className="img-fluid rounded-circle"/>
                            <h1 className="text-light">Alex Smith</h1>
                            <div className="social-links mt-3 text-center">
                                <a href="#" className="twitter"><i className="fab fa-facebook"/></a>
                                <a href="#" className="facebook"><i className="fab fa-twitter"/></a>
                                <a href="#" className="instagram"><i className="fab fa-instagram"/></a>
                                <a href="#" className="google-plus"><i className="fab fa-google-plus"/></a>
                                <a href="#" className="linkedin"><i className="fab fa-linkedin"/></a>
                            </div>
                        </div>
                        <nav className="nav-menu">
                            <ul>
                                {
                                    HeaderItems.map((item, index) => {
                                        return (
                                            <li className={""} key={`item-${index}`}>
                                                <Link to={item.link} onClick={(e) => this.activeNav(e)}>
                                                    <i className={item.icon}/><span>{item.label}</span>
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </nav>
                        <button type="button" className="mobile-nav-toggle d-xl-none"
                                onClick={() => this.toggleMobileNav()}>
                            <i className={this.state.activeMobileNav ? "fas fa-times" : "fa fa-bars"}/>
                        </button>
                    </div>
                </header>
            </Swipeable>
        );
    }
}

export default Header;