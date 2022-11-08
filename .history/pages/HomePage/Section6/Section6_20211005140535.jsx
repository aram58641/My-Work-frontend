import style from "./Section6.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Section6() {
    return (
        <>
            <div className={` ${style.big_section_6_box}`}>
                <div className="container-xl">
                    <div className="row f-">
                        <div className="col-lg-6 mt-5">
                            <h2>
                                Quick & Easy Process
                            </h2>
                            
                        </div>
                       
                    </div>
                    <div className="row " >
                    <div className="col-lg-6 ">
                        <h4 className={``}>
                                Do you require some help for your project:
                                Conception workshop, prototyping, marketing
                                strategy, landing page, Ux/UI?
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
