import style from "./Section2.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Image from "next/dist/client/image";

export default function Section2() {
    return (
        <>
            <div className={style.big_section_2_box}>
                <div className="container-xl">
                    <div className="row">
                        <div className="col-lg-3">
                            <h1>Product  was Built Specifically 
                                for You</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
