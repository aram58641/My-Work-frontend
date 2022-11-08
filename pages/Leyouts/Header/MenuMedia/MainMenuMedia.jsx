import style from "../Header.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/dist/client/link";
import CategoriesFilter from "../../../FilterPage/CategoriesFilter/CategoriesFilter";
import JsonMenu from "../../../Json/Menu.json";
import { Menu } from "../Menu/MainMenu";

export default function MainMenuMedia() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link active " aria-current="page">
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
                        <Link href="/Contact/Contact">
                            <a
                                className="nav-link active"
                                aria-current="page"
                            >
                                Contact
                            </a>
                        </Link>
                        
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
                    </li>
                    </div>
                </div>
            </div>
        </>
    );
}
