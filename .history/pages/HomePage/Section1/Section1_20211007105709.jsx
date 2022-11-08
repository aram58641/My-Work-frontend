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
                            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
<div class="container-fluid">
<a class="navbar-brand" href="#">Brand</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="main_nav">
  <ul class="navbar-nav">
    <li class="nav-item active"> <a class="nav-link" href="#">Home </a> </li>
    <li class="nav-item"><a class="nav-link" href="#"> About </a></li>
    <li class="nav-item dropdown" id="myDropdown">
      <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">  Treeview menu  </a>
      <ul class="dropdown-menu">
        <li> <a class="dropdown-item" href="#"> Dropdown item 1 </a></li>
        <li> <a class="dropdown-item" href="#"> Dropdown item 2 &raquo; </a>
          <ul class="submenu dropdown-menu">
            <li><a class="dropdown-item" href="#">Submenu item 1</a></li>
            <li><a class="dropdown-item" href="#">Submenu item 2</a></li>
            <li><a class="dropdown-item" href="#">Submenu item 3 &raquo; </a>
              <ul class="submenu dropdown-menu">
                <li><a class="dropdown-item" href="#">Multi level 1</a></li>
                <li><a class="dropdown-item" href="#">Multi level 2</a></li>
              </ul>
            </li>
            <li><a class="dropdown-item" href="#">Submenu item 4</a></li>
            <li><a class="dropdown-item" href="#">Submenu item 5</a></li>
          </ul>
        </li>
        <li><a class="dropdown-item" href="#"> Dropdown item 3 </a></li>
        <li><a class="dropdown-item" href="#"> Dropdown item 4 </a></li>
      </ul>
    </li>
  </ul>
</div>
</div>
</nav>
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
