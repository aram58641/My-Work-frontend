import style from "./Section3.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Image from "next/dist/client/image";

export default function Section3() {
    return (
        <>
            <div className="container-xl">
                <div className={`d-flex align-items-center ${style.big_section_3_box}`}>
                    <div className="row">
                        <div className="col-lg-7">
                            <p className={`text-left fs-6 fw-bold`}>Effortless Validation for</p>
                            <h2 className={`text-left fs-3 fw-bold`}>Management</h2>
                            <p className={`text-left  fw-normal mt-2 ${style.section_3_text}`}>
                                The Myspace page defines the individual, his or
                                her characteristics, traits, personal choices
                                and the overall personality of the person.
                            </p>
                            <h4>Accessory makers</h4>
                            <p>
                                While most people enjoy casino gambling, sports
                                betting, lottery and bingo playing for the fun
                            </p>
                            <h4>Alterationists</h4>
                            <p>
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
