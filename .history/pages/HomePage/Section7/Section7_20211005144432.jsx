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
                   
                    <div className="row">
                        <div className="col-md-12 text-left">
                            <h2></h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-left">
                            <h4></h4>
                        </div>
                    </div>



                </div>
            </div>
        </>
    );
}
