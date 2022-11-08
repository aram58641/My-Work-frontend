import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Image from "next/dist/client/image";
import style from "./Section4.module.scss";

export default function Section4() {
    return (
        <>
            <div className="container-xl">
                <div
                    className={`d-flex align-items-center ${style.big_section_4_box}`}
                >
                    <div className={`row d-flex justify-content-end ${style.mediaInText_section4}`}>
                        <div className={`col-lg-5 ${style.mediaInText_section4_min}`}>
                            <div>

                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
