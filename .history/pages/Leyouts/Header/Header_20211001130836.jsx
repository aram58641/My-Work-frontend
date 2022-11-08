import style from "./Header.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Image from "next/dist/client/image";
import logo1 from "../../../public/Image/logo1.png"
import logo2 from "../../../public/Image/logo2.png"

export default function Header() {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-light bg-white`}>
                <div className={`container-xl`}>
                    <a className={`navbar-brand d-flex align-items-center`} href="#">

                        <Image  src={logo1} alt="Picture of the author" />
                        <Image  src={logo2} alt="Picture of the author" />

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
                    <div
                        className={`collapse navbar-collapse`}
                        id="navbarSupportedContent"
                    >
               
                        <form className={`d-flex`}>
                            <input
                                className={`form-control me-2`}
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button
                                className={`btn btn-outline-success`}
                                type="submit"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}
