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
                            <h2 className={`text-left text-dark fs-2 fw-bold ${style.section1_text}`}>
                                Work at the speed of thought
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <h2 className={`text-left text-dark fs-2 fw-bold ${style.section1_text}`}>
                            Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
