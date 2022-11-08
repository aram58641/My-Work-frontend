import { useCallback, useState, useEffect } from "react";
import style from "./Header.module.scss";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.css";
import Image from "next/dist/client/image";
import logo1 from "../../../public/Image/logo1.png";
import logo2 from "../../../public/Image/logo2.png";
import light_dark_icon from "../../../public/Image/light_dark.png";
import { Menu } from "./Menu/MainMenu";
import { CategoriesMenu } from "./Menu/CategoriesMenu/CategoriesMenu";

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
                styles = `  background-color:white;
                            transition: 1s;
                            `;

                setIsDarkMode(false);
            } else {
                styles = `background-color:#1F2E35;
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
            <div className={style.headers}>
                <nav className={`navbar navbar-expand-lg navbar-light `}>
                    <div className={`container-xxl`}>
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


            <nav class="navbar navbar-light bg-light fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Offcanvas navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider"/>
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
        </>
    );
}
