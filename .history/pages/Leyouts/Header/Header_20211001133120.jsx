import style from "./Header.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Head from "next/head";
import Image from "next/dist/client/image";
import logo1 from "../../../public/Image/logo1.png";
import logo2 from "../../../public/Image/logo2.png";
import light_dark_icon from "../../../public/Image/light_dark.png";

export default function Header() {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-light bg-white`}>
                <div className={`container-xl`}>
                    <a
                        className={`navbar-brand d-flex align-items-center`}
                        href="#"
                    >
                        <Image src={logo1} alt="Picture of the author" />
                        <Image src={logo2} alt="Picture of the author" />
                    </a>
                    <button
                        className={`navbar-toggler`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className={`navbar-toggler-icon`}></span>
                    </button>

                    <div className={`d-flex justify-content-end align-items-center`}>
                        <div
                            className={`collapse navbar-collapse `}
                            id="navbarSupportedContent"
                        >
                            <ul className={`navbar-nav me-auto mb-2 mb-lg-0`}>
                                <li className={`nav-item`}>
                                    <a
                                        className={`nav-link fw-bolder`}
                                        aria-current="page"
                                        href="#"
                                    >
                                        Product
                                    </a>
                                </li>
                                <li className={`nav-item`}>
                                    <a
                                        className={`nav-link fw-bolder`}
                                        href="#"
                                    >
                                        Customers
                                    </a>
                                </li>
                                <li className={`nav-item`}>
                                    <a
                                        className={`nav-link fw-bolder`}
                                        href="#"
                                    >
                                        Pricing
                                    </a>
                                </li>

                                <li className={`nav-item`}>
                                    <a
                                        className={`nav-link fw-bolder`}
                                        href="#"
                                    >
                                        Resources
                                    </a>
                                </li>

                                <li className={`nav-item dropdown`}>
                                    <a
                                        className={`nav-link dropdown-toggle`}
                                        href="#"
                                        id="navbarDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Dropdown
                                    </a>
                                    <ul
                                        className={`dropdown-menu`}
                                        aria-labelledby="navbarDropdown"
                                    >
                                        <li>
                                            <a
                                                className={`dropdown-item`}
                                                href="#"
                                            >
                                                Action
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className={`dropdown-item`}
                                                href="#"
                                            >
                                                Another action
                                            </a>
                                        </li>
                                        <li>
                                            <hr
                                                className={`dropdown-divider`}
                                            />
                                        </li>
                                        <li>
                                            <a
                                                className={`dropdown-item`}
                                                href="#"
                                            >
                                                Something else here
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <div className="image">
                                    <div className="img-fluid">
                                        <Image
                                            src={light_dark_icon}
                                            alt="Picture of the author"
                                        />
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
