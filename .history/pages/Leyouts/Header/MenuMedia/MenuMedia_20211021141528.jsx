import style from "../Header.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/dist/client/link";
import { Menu } from "../Menu/MainMenu";


export default function MenuMedia(props) {
    return (
        <>
            <div className="container-fluid">
               

                        <Menu />

            </div>
        </>
    );
}
