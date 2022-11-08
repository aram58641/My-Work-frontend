import style from "../Header.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/dist/client/link";
import { Menu } from "../Menu/MainMenu";
import CategoriesFilter from "../../../FilterPage/CategoriesFilter/CategoriesFilter";
import JsonMenu from "../../../ ../../Json/Menu.json";


export default function MenuMedia(props) {
    return (
        <>
            <div className="container-fluid">
                <Link  href='/'>
                <a className="navbar-brand">
                        MyWork.com
                </a>
                </Link>
               
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

fv
                    </div>

                </div>
                <CategoriesFilter productmenu={JsonMenu}/>
                
            </div>
        </>
    );
}
