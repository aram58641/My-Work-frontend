import style from "./Section6.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/dist/client/image";

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

                    <div className="row">
                        <div className="col-sm-2">
                            <Image />
                        </div>
                        <div className="col-sm-2"></div>
                    </div>
                </div>
            </div>
        </>
    );
}
