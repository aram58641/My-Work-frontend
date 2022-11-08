import { useCallback, useState, useEffect } from "react";
import style from "./Header.module.scss";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/dist/client/image";
import logo1 from "../../../public/Image/logo1.png";
import logo2 from "../../../public/Image/logo2.png";
import light_dark_icon from "../../../public/Image/light_dark.png";

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
                                            className={`nav-link fw-normal text-dark text-uppercase`}
                                            aria-current="page"
                                            href="#"
                                        >
                                            Product
                                        </a>
                                    </li>
                                    <li className={`nav-item`}>
                                        <a
                                            className={`nav-link fw-normal text-dark text-uppercase`}
                                            href="#"
                                        >
                                            Customers
                                        </a>
                                    </li>
                                    <li className={`nav-item`}>
                                        <a
                                            className={`nav-link fw-normal text-dark text-uppercase`}
                                            href="#"
                                        >
                                            Pricing
                                        </a>
                                    </li>
                                    

























                                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown link
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li>
            <a class="dropdown-item" href="#">Action</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Another action</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Submenu &raquo;
            </a>
            <ul class="dropdown-menu dropdown-submenu">
              <li>
                <a class="dropdown-item" href="#">Submenu item 1</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Submenu item 2</a>
              </li>
              <li>
                <a className={style.dropdown-item " href="#">Submenu item 3 &raquo; </a>
                <ul className={style.dropdown-menu "dropdown-submenu">
                  <li>
                    <a className={style.dropdown-item " href="#">Multi level 1</a>
                  </li>
                  <li>
                    <a className={style.dropdown-item " href="#">Multi level 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className={style.dropdown-item " href="#">Submenu item 4</a>
              </li>
              <li>
                <a className={style.dropdown-item " href="#">Submenu item 5</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</nav>


























































                                    <li className={`nav-item  text-uppercase`}>
                                        <a
                                            className={`nav-link fw-normal text-dark text-uppercase`}
                                            href="#"
                                        >
                                            ABOUT US
                                        </a>
                                    </li>

                                    <Link href={"/Login"}>
                                        <a
                                            className={`btn  text-uppercase  ${style.Sign_In_btn}`}
                                        >
                                            Sign In
                                        </a>
                                    </Link>
                                    <Link href={"/Registration"}>
                                        <a
                                            className={`btn text-white text-uppercase  ${style.Sign_Up_btn}`}
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
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}
