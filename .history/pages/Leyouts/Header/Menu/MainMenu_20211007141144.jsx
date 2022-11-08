import style from "../Header.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuDesign from "./MenuDesign";

export function Menu() {
    return (
        <div className={`d-flex justify-content-end ${style.Menu_item_margin}`}>
            <div
                className={`collapse navbar-collapse  `}
                id="navbarSupportedContent"
            >
                <ul
                    className={`navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center ${style.ulLi}`}
                >

                    {/* Menu Items */}

                    <MenuDesign json />

                    

                    <li className={`dropdown-submenu ${style.dropdownsubmenu}`}>
                        <a
                            class="dropdown-item dropdown-toggle"
                            data-toggle="dropdown"
                            href="#"
                        >
                            Customers
                        </a>
                        <ul className={`dropdown-menu ${style.dropdownmenu}`}>
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

                    <li className={`dropdown-submenu ${style.dropdownsubmenu}`}>
                        <a
                            class="dropdown-item dropdown-toggle"
                            data-toggle="dropdown"
                            href="#"
                        >
                            Pricing
                        </a>
                        <ul className={`dropdown-menu ${style.dropdownmenu}`}>
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

                    <li className={`dropdown-submenu ${style.dropdownsubmenu}`}>
                        <a
                            class="dropdown-item dropdown-toggle"
                            data-toggle="dropdown"
                            href="#"
                        >
                            About Us
                        </a>
                        <ul className={`dropdown-menu ${style.dropdownmenu}`}>
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
                </ul>
            </div>
        </div>
    );
}
