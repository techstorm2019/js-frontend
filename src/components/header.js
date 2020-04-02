import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <header id="header">
                <div className="d-flex flex-column">
                    <div className="profile">
                        <img src="/public/img/profile-img.jpg" alt="" className="img-fluid rounded-circle"/>
                        <h1 className="text-light">Alex Smith</h1>
                        <div className="social-links mt-3 text-center">
                            <a href="#" className="twitter"><i className="fa fa-home"/></a>
                            <a href="#" className="facebook"><i className="fa fa-home"/></a>
                            <a href="#" className="instagram"><i className="fa fa-home"/></a>
                            <a href="#" className="google-plus"><i className="fa fa-home"/></a>
                            <a href="#" className="linkedin"><i className="fa fa-home"/></a>
                        </div>
                    </div>

                    <nav className="nav-menu">
                        <ul>
                            <li className="active">
                                <a href="index.html"><i className="fa fa-home"/><span>Home</span></a>
                            </li>
                            <li className="">
                                <a href="#about"><i className="fa fa-home"/> <span>About</span></a>
                            </li>
                            <li>
                                <a href="#resume"><i className="fa fa-home"/> <span>Resume</span></a>
                            </li>
                            <li>
                                <a href="#portfolio"><i className="fa fa-home"/> Portfolio</a>
                            </li>
                            <li>
                                <a href="#services"><i className="fa fa-home"/> Services</a>
                            </li>
                            <li>
                                <a href="#contact"><i className="fa fa-home"/> Contact</a>
                            </li>
                        </ul>
                    </nav>

                    <button type="button" className="mobile-nav-toggle d-xl-none">
                        <i className="fa fa-bars"/>
                    </button>
                </div>
            </header>
        );
    }
}

export default Header;