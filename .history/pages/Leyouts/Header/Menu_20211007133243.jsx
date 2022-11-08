

import { useCallback, useState, useEffect } from "react";
import style from "./Header.module.scss";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/dist/client/image";
import logo1 from "../../../public/Image/logo1.png";
import logo2 from "../../../public/Image/logo2.png";
import light_dark_icon from "../../../public/Image/light_dark.png";

<div
className={`d-flex justify-content-end ${style.Menu_item_margin}`}
>
<div
    className={`collapse navbar-collapse  `}
    id="navbarSupportedContent"
>
    <ul
        className={`navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center ${style.ulLi}`}
    >
        <li
            className={`dropdown-submenu ${style.dropdownsubmenu}`}
        >
            <a
                class="dropdown-item dropdown-toggle"
                data-toggle="dropdown"
                href="#"
            >
                Дизайн
            </a>
            <ul
                className={`dropdown-menu ${style.dropdownmenu}`}
            >
                <a
                    className={`dropdown-item ${style.dropdownitem}`}
                    href="#"
                >
                    Логотипы
                </a>
                <a
                    className={`dropdown-item ${style.dropdownitem}`}
                    href="#"
                >
                    Дизайн игр

                </a>
                <a
                    className={`dropdown-item ${style.dropdownitem}`}
                    href="#"
                >
                    Тату, принты

                </a>
                <a
                    className={`dropdown-item ${style.dropdownitem}`}
                    href="#"
                >
                    Стикеры 
                </a>
                <a
                    className={`dropdown-item ${style.dropdownitem}`}
                    href="#"
                >
                    Готовые шаблоны и рисунки

                </a>
                <a
                    className={`dropdown-item ${style.dropdownitem}`}
                    href="#"
                >
                    Веб-дизайн

                </a>
                <a
                    className={`dropdown-item ${style.dropdownitem}`}
                    href="#"
                >
                    Готовые шаблоны и рисунки

                </a>
                <a
                    className={`dropdown-item ${style.dropdownitem}`}
                    href="#"
                >
                    Готовые шаблоны и рисунки

                </a>
                <a
                    className={`dropdown-item ${style.dropdownitem}`}
                    href="#"
                >
                    Готовые шаблоны и рисунки

                </a>
                <a
                    className={`dropdown-item ${style.dropdownitem}`}
                    href="#"
                >
                    Готовые шаблоны и рисунки

                </a>
            </ul>
        </li>

        <li
            className={`dropdown-submenu ${style.dropdownsubmenu}`}
        >
            <a
                class="dropdown-item dropdown-toggle"
                data-toggle="dropdown"
                href="#"
            >
                Customers
            </a>
            <ul
                className={`dropdown-menu ${style.dropdownmenu}`}
            >
                <a
                    className={`dropdown-item ${style.dropdownitem}`}
                    href="#"
                >
                    A
                </a>
                <a
                    className={`dropdown-item ${style.dropdownitem}`}
                    href="#"
                >
                    b
                </a>
            </ul>
        </li>

        <li
            className={`dropdown-submenu ${style.dropdownsubmenu}`}
        >
            <a
                class="dropdown-item dropdown-toggle"
                data-toggle="dropdown"
                href="#"
            >
                Pricing
            </a>
            <ul
                className={`dropdown-menu ${style.dropdownmenu}`}
            >
                <a
                    className={`dropdown-item ${style.dropdownitem}`}
                    href="#"
                >
                    A
                </a>
                <a
                    className={`dropdown-item ${style.dropdownitem}`}
                    href="#"
                >
                    b
                </a>
            </ul>
        </li>

        <li
            className={`dropdown-submenu ${style.dropdownsubmenu}`}
        >
            <a
                class="dropdown-item dropdown-toggle"
                data-toggle="dropdown"
                href="#"
            >
                About Us
            </a>
            <ul
                className={`dropdown-menu ${style.dropdownmenu}`}
            >
                <a
                    className={`dropdown-item ${style.dropdownitem}`}
                    href="#"
                >
                    A
                </a>
                <a
                    className={`dropdown-item ${style.dropdownitem}`}
                    href="#"
                >
                    b
                </a>
            </ul>
        </li>

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
    </ul>
</div>
</div>