import { useCallback, useState, useEffect } from "react";
import style from "./Header.module.scss";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/dist/client/image";
import logo1 from "../../../public/Image/logo1.png";
import logo2 from "../../../public/Image/logo2.png";
import light_dark_icon from "../../../public/Image/light_dark.png";
import Head from "next/head";

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
                        <Link href={"/"}>
                            <a
                                className={`navbar-brand d-flex align-items-center`}
                            >
                                <Image
                                    src={logo1}
                                    alt="Picture of the author"
                                />
                                <Image
                                    src={logo2}
                                    alt="Picture of the author"
                                />
                            </a>
                        </Link>

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


                    //



                        <Link href={"/Login"}>
            <a
                className={`btn   ${style.Sign_In_btn}`}
            >
                Sign In
            </a>
        </Link>
        <Link href={"/Registration"}>
            <a
                className={`btn text-white   ${style.Sign_Up_btn}`}
            >
                Sign Up
            </a>
        </Link>

        <div className="image">
            <div className="img-fluid">
                <a href="#">
                    <Image
                        src={light_dark_icon}
                        alt="Picture of the author"
                        onClick={onClick}
                    />
                </a>
            </div>
        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}
