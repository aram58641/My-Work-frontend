import style from "../../../Header.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MenuAudioVideoShooting(props) {
    return (
        <>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Offcanvas navbar
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="offcanvas offcanvas-start"
                    tabindex="-1"
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                >
                    <div className="offcanvas-header">
                        <h5
                            className="offcanvas-title"
                            id="offcanvasNavbarLabel"
                        >
                            Offcanvas
                        </h5>
                        <button
                            type="button"
                            className="btn-close text-reset"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
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
                        </ul>
                        <form className="d-flex">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button
                                className="btn btn-outline-success"
                                type="submit"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
