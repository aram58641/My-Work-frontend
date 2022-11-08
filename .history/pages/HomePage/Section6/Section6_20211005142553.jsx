import style from "./Section6.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/dist/client/image";
import Avtoravatar1 from "../../../public/Image/Avtor1.png";
import Avtoravatar2 from "../../../public/Image/Avtor2.png";

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
                        <div className="col-sm-3 d-flex align-items-center ">
                            <Image
                                src={Avtoravatar1}
                                className={`mr-3 img-fluid`}
                            />
                            <span className={style.avatar_setting}>
                                I can take care of your pitch
                            </span>
                        </div>

                        <div className="col-sm-4 d-flex align-items-center">
                            <span className={style.avatar_setting}>
                                I can prototype your app
                            </span>
                            <Image
                                src={Avtoravatar2}
                                className={`mr-4 img-fluid`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
