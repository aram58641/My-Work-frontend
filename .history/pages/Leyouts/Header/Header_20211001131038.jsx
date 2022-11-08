import style from "./Header.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Image from "next/dist/client/image";
import logo1 from "../../../public/Image/logo1.png"
import logo2 from "../../../public/Image/logo2.png"

export default function Header() {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-light bg-white`}>
                <div className={`container-xl`}>
                    <a className={`navbar-brand d-flex align-items-center`} href="#">
                        <Image  src={logo1} alt="Picture of the author" />
                        <Image  src={logo2} alt="Picture of the author" />

                    </a>
                 
                    <div
                        className={`collapse navbar-collapse d-flex justi`}
                        id="navbarSupportedContent"
                    >
                        <ul className={`navbar-nav me-auto mb-2 mb-lg-0`}>
                            <li className={`nav-item`}>
                                <a
                                    className={`nav-link active`}
                                    aria-current="page"
                                    href="#"
                                >
                                    Home
                                </a>
                            </li>
                            <li className={`nav-item`}>
                                <a className={`nav-link`} href="#">
                                    Link
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
                                        <a className={`dropdown-item`} href="#">
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a className={`dropdown-item`} href="#">
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <hr className={`dropdown-divider`} />
                                    </li>
                                    <li>
                                        <a className={`dropdown-item`} href="#">
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className={`nav-item`}>
                                <a className={`nav-link disabled`}>Disabled</a>
                            </li>
                        </ul>
                        <form className={`d-flex`}>
                            <input
                                className={`form-control me-2`}
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button
                                className={`btn btn-outline-success`}
                                type="submit"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}