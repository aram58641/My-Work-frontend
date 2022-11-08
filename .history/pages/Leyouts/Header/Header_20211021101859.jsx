import { useCallback, useState, useEffect } from "react";
import style from "./Header.module.scss";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/dist/client/image";
import logo1 from "../../../public/Image/logo1.png";
import logo2 from "../../../public/Image/logo2.png";
import light_dark_icon from "../../../public/Image/light_dark.png";
import { Menu } from "./Menu/MainMenu";
import { CategoriesMenu } from "./Menu/CategoriesMenu/CategoriesMenu";
import Head from "next/head";
import MenuMedia from "./MenuMedia/MenuMedia";

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
                styles = `  background-color:white !important;
                            transition: 1s;
                            `;

                setIsDarkMode(false);
            } else {
                styles = `background-color:#1F2E35 !important;
                          color:white !important;
                          transition: 1s;
                          `;

                setIsDarkMode(true);
            }
            document.body.style = styles;
        },
        [isDarkMode]
    );

    return (
        <>  

            <Head>
                <link rel="shortcut icon" href="data:image/png;base64,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" type="image/x-icon" />
            </Head>

            <div className={style.headers}>
                <nav className={`navbar navbar-expand-lg navbar-light `}>
                    <div className={`container`}>
                        <Link href={"/"}>
                            <a
                                className={`navbar-brand text-center ${style.logo_image}`}
                            >
                                MyWork.com
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
                        <div
                            class="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            {/* MainMenu */}

                            <Menu />

                            <Link href={"/Login"}>
                                <a className={`btn   ${style.Sign_In_btn}`}>
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
                    </div>
                </nav>
            </div>
            {/* MenuBar */}

            <nav
                className={` navbar navbar-expand-lg navbar-light ${style.Nav} `}
            >
                <div className="container-fluid d-flex justify-content-center">
                    <div className={`${style.border_menu_bottom}`}>
                        <CategoriesMenu />
                    </div>
                </div>
            </nav>

            <nav
                className={`navbar navbar-light bg-light fixed-top ${style.hiddenMenuContent}`}
            >
                <MenuMedia />
            </nav>

            <Head>
                <script
                    src="../../../node_modules/bootstrap/"
                    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
                    crossorigin="anonymous"
                ></script>
            </Head>
        </>
    );
}
