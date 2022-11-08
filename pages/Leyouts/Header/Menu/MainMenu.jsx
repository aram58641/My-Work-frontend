import style from "../Header.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { flags, setLocale } from "../../../../translations";
import Image from "next/dist/client/image";

export function Menu() {
    const { t, i18n } = useTranslation();

    // console.log(i18n.language, flags, flags[i18n.language]);
    return (
        <div className={`d-flex justify-content-end ${style.Menu_item_margin}`}>
            <div
                className={`collapse navbar-collapse  `}
                id="navbarSupportedContent"
            >
                <ul
                    className={`navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center ${style.ulLi}`}
                >
                    <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder={t("search")}
                            aria-label="Search"
                        />
                        <button
                            className={`btn btn-outline-success ${style.search_button_header}`}
                            type="submit"
                        >
                            {t("search")}
                        </button>
                    </form>
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link active " aria-current="page">
                                {t("home")}
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/AboutUs/AboutUs">
                            <a className="nav-link active" aria-current="page">
                                {t("aboutUs")}
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/Contact/Contact">
                            <a className="nav-link active" aria-current="page">
                                {t("contact")}
                            </a>
                        </Link>
                    </li>
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            {t("leng")}
                            {flags[i18n.language] ? (
                                <Image
                                    className={style.flags}
                                    width={30}
                                    height={15}
                                    src={flags[i18n.language]}
                                    alt=""
                                />
                            ) : (
                                <span></span>
                            )}
                        </a>
                        <ul
                            className={`${style.flagdf} dropdown-menu`}
                            aria-labelledby="navbarDropdown"
                        >
                            <div className={style.flagsdf}>
                                {Object.keys(flags).map((locale) => (
                                    <Image
                                        key={`header-flag-${locale}`}
                                        width={30}
                                        height={15}
                                        src={flags[locale]}
                                        onClick={() => setLocale(locale)}
                                    />
                                ))}
                            </div>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}
