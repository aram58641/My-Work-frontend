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
                    <div className={`row d-flex justify-content-end ${style.}`}>
                        <div className="col-lg-6">
                            <p className={`text-end fs-6 fw-bold mt-2`}>
                                Effortless Validation for
                            </p>
                            <h2 className={`text-end fs-3 fw-bold mt-1`}>
                                Management
                            </h2>
                            <p
                                className={`text-end  fw-normal mt-4 ${style.section_3_text}`}
                            >
                                The Myspace page defines the individual, his or
                                her characteristics, traits, personal choices
                                and the overall personality of the person.
                            </p>
                            <h4 className={`text-end fs-6 fw-bold mt-2`}>
                                Accessory makers
                            </h4>
                            <p
                                className={`text-end  fw-normal mt-4 ${style.section_3_text}`}
                            >
                                While most people enjoy casino gambling, sports
                                betting, lottery and bingo playing for the fun
                            </p>
                            <h4 className={`text-end fs-6 fw-bold mt-2`}>
                                Alterationists
                            </h4>
                            <p
                                className={`text-end  fw-normal mt-4 ${style.section_3_text}`}
                            >
                                If you are looking for a new way to promote your
                                business that won’t cost you more money,{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
