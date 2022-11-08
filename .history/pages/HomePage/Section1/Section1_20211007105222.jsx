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
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-4">
                            <p className={`text-left  `}>
                                Tools, tutorials, design and innovation experts,
                                all in one place! The most intuitive way to
                                imagine your next user experience.
                            </p>
                            <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
  
  <li class="dropdown-submenu">
    <a tabindex="-1" href="#">More options</a>
    <ul class="dropdown-menu">
      <li>
          fghfghfgh
      </li>
    </ul>
  </li>
</ul>
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
