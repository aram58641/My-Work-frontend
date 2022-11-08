import style from "./Header.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

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
                    <li className={`dropdown-submenu ${style.dropdownsubmenu}`}>
                        <a
                            class="dropdown-item dropdown-toggle"
                            data-toggle="dropdown"
                            href="#"
                        >
                            Дизайн
                        </a>
                        <ul className={`dropdown-menu ${style.dropdownmenu}`}>
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
                                Мобильный дизайн
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
