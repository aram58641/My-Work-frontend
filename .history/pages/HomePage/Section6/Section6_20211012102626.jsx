import style from "./Section6.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/dist/client/image";
import Avtoravatar1 from "../../../public/Image/Avtor1.png";
import Avtoravatar2 from "../../../public/Image/Avtor2.png";
import Avtoravatar3 from "../../../public/Image/Avtor3.png";
import Avtoravatar4 from "../../../public/Image/Avtor4.png";

export default function Section6() {
    return (
        <>
            <div className={` ${style.big_section_6_box}`}>
                <div className="container-xl">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-6 mt-5 text-center ">
                            <h2 className={`fs-3 fw-bold text-dark`}>
                                Quick & Easy Process
                            </h2>
                        </div>
                    </div>
                    <div className="row  justify-content-center">
                        <div className="col-lg-6 text-center ">
                            <h4 className={`fs-6 fw-normal text-dark`}>
                                Do you require some help for your project:
                                Conception workshop, prototyping, marketing
                                strategy, landing page, Ux/UI?
                            </h4>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-around">
                        <div className={`col-md-3 d-flex align-items-center `>
                            <Image
                                src={Avtoravatar1}
                                className={`mr-3 img-fluid`}
                            />
                            <span className={` text-dark   ${style.avatar_setting} `}>
                                I can take care of your pitch
                            </span>
                        </div>

                        <div className="col-md-4 d-flex align-items-center">
                            <span className={` text-dark   ${style.avatar_setting} `}>
                                I can prototype your app
                            </span>
                            <Image
                                src={Avtoravatar2}
                                className={` img-fluid`}
                            />
                        </div>
                    </div>



                    <div className="row d-flex justify-content-around mt-5">
                        <div className="col-md-3 d-flex align-items-center ">
                        <span className={` text-dark   ${style.avatar_setting} `}>
                                I can take care of your pitch
                            </span>
                            <Image
                                src={Avtoravatar3}
                                className={` img-fluid`}
                            />
                           
                        </div>

                        <div className="col-md-4 d-flex align-items-center ">
                           
                            <Image
                                src={Avtoravatar4}
                                className={`img-fluid`}
                            />
                             <span className={` text-dark   ${style.avatar_setting} `}>
                                I can prototype your app
                            </span>
                        </div>
                    </div>

                    <form action="">
                            <div className={`d-flex justify-content-center mt-5`}>
                                <button
                                    className={`btn fs-7  ${style.btn_section2} mt-2 `}
                                >
                                    Contact our expert
                                </button>
                            </div>
                        </form>





                </div>
            </div>
        </>
    );
}
