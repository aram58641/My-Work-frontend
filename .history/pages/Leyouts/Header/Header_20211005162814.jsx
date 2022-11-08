import { useCallback, useState, useEffect } from "react";
import style from "./Header.module.scss";
import Link from 'next/link';
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/dist/client/image";
import logo1 from "../../../public/Image/logo1.png";
import logo2 from "../../../public/Image/logo2.png";
import light_dark_icon from "../../../public/Image/light_dark.png";
import Registration from "../../index";

export default function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const onClick = useCallback(
        (evt) => {
            evt.preventDefault();
            if ("undefined" === typeof document) {
                return;
            }

            let styles;

            if (isDarkMode) {
                styles = `background-color:white;
                           
                            `;

                setIsDarkMode(false);
            } else {
                styles = `background-color:#1F2E35;
                          color:white !important;`;

                setIsDarkMode(true);
            }
            document.body.style = styles;
        },
        [isDarkMode]
    );

    return (
        <>
            <div className={style.headers}>
                <nav
                    className={`navbar navbar-expand-lg navbar-light  ${style.header}`}
                >
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

                        <div className={`d-flex justify-content-end `}>
                            <div
                                className={`collapse navbar-collapse `}
                                id="navbarSupportedContent"
                            >
                                <ul
                                    className={`navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center ${style.ulLi}`}
                                >
                                    <li className={`nav-item `}>
                                        <a
                                            className={`nav-link fw-normal text-dark`}
                                            aria-current="page"
                                            href="#"
                                        >
                                            Product
                                        </a>
                                    </li>
                                    <li className={`nav-item`}>
                                        <a
                                            className={`nav-link fw-normal text-dark`}
                                            href="#"
                                        >
                                            Customers
                                        </a>
                                    </li>
                                    <li className={`nav-item`}>
                                        <a
                                            className={`nav-link fw-normal text-dark`}
                                            href="#"
                                        >
                                            Pricing
                                        </a>
                                    </li>

                                    <li className={`nav-item `}>
                                        <a
                                            className={`nav-link fw-normal text-dark`}
                                            href="#"
                                        >
                                            Resources
                                        </a>
                                    </li>



                                        <Link href={'/Registration'}
                                            className={`btn text-dark  ${style.Sign_In_btn}`}
                                        >
                                             <a > Sign In</a>
                                        </Link>
                                        <Link  href={'/Registration'}
                                            className={`btn text-white  ${style.Sign_Up_btn}`}
                                        >
                                           <a > Sign Up</a>
                                        </Link>




                                    <div className="image">
                                        <div className="img-fluid">
                                            <a href="">
                                                <Image
                                                    src={light_dark_icon}
                                                    alt="Picture of the author"
                                                    onClick={onClick}
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}
