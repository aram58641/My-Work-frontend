import style from "../Header.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

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
                    <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button
                            className={`btn btn-outline-success ${style.search_button_header}`}
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link active" aria-current="page">
                                Home
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/AboutUs/AboutUs">
                            <a className="nav-link active" aria-current="page">
                                About Us
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/AboutUs/AboutUs">
                            <a className="nav-link active" aria-current="page">
                                About Us
                            </a>
                        </Link>
                        <a
                            className="nav-link active"
                            aria-current="page"
                            href="#"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
