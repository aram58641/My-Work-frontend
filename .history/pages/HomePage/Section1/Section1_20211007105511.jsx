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
                        <div className="col-lg-4">
                            <h2
                                className={`text-left fs-2 fw-bold ${style.section1_title}`}
                            >
                                Work at the speed of thought
                            </h2>
                            <ul class="nav navbar-nav">
        <li class="active"><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span class="nav-label">Services</span> <span class="caret"></span></a>
            <ul class="dropdown-menu">
                <li><a href="#">Service A</a></li>
                <li><a href="#">Service B</a></li>
                <li class="dropdown-submenu">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <span class="nav-label">Service C</span><span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="#">Service C1</a></li>
                        <li><a href="#">Service C2</a></li>
                        <li><a href="#">Service C3</a></li>
                        <li><a href="#">Service C4</a></li>
                        <li><a href="#">Service C5</a></li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-4">
                            <p className={`text-left  `}>
                                Tools, tutorials, design and innovation experts,
                                all in one place! The most intuitive way to
                                imagine your next user experience.
                            </p>
                        </div>
                    </div>
                    <form action="">
                        <div className={`row mt-5 `} >
                            
                            <div className={`col-lg-2  align-items-center ${style.Section1_btn_get_started_media}`}>
                                <button
                                    className={`btn text-white  ${style.Section1_btn_get_started}`}
                                >
                                    Get started
                                </button>
                            </div>
                            <div
                                className={`col-lg-2 d-flex align-items-center ${style.Section1_btn}`}
                            >
                                <a
                                    className={`btn fw-bold  d-flex align-items-center  ${style.Section1_btn_WatchTheVideo}`}
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
