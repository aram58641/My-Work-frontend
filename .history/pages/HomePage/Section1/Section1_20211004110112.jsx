import style from "./Section1.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Image from "next/dist/client/image";

export default function Section1() {
    return (
        <>
            <div className="container-xl">
                <div className={style.big_section_1_box}>
                    <div className="row">
                        <div className="col-sm-3">
                            <h2 className={`text-left text-dark`}>
                                Work at the speed of thought
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
