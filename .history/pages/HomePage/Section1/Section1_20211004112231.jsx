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
                            <h2
                                className={`text-left text-dark fs-2 fw-bold ${style.section1_title}`}
                            >
                                Work at the speed of thought
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <p className={`text-left text-dark`}>
                                Tools, tutorials, design and innovation experts,
                                all in one place! The most intuitive way to
                                imagine your next user experience.
                            </p>
                        </div>
                    </div>
                    <form action="">
                        <div className="row">
                            <div className="col-sm-2">
                                <button
                                    className={`btn text-white  ${style.Section1_btn_get_started}`}
                                >
                                    Get started
                                </button>
                            </div>
                            <div className="col-sm-2">
                                <a
                                    className={`btn text-white  ${style.Section1_btn_WatchTheVideo}`}
                                >
                                    Watch the Video
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
