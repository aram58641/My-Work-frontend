import style from "./Section7.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/dist/client/image";
import Avtoravatar1 from "../../../public/Image/Avtor1.png";
import Avtoravatar2 from "../../../public/Image/Avtor2.png";
import Avtoravatar3 from "../../../public/Image/Avtor3.png";
import Avtoravatar4 from "../../../public/Image/Avtor4.png";

export default function Section7() {
    return (
        <>
            <div className={` ${style.big_section_7_box}`}>
                <div className="container-xl">
                   
                    <div className="row mt-5">
                        <div className="col-md-12 text-left mt-5">
                            <h2>Contents Strategies</h2>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12 text-left fs-7">
                            <h4>We focus on ergonomics and meeting you where you work. It's only a keystroke away. </h4>
                        </div>
                    </div>



                </div>
            </div>
        </>
    );
}
