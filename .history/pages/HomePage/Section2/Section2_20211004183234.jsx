import style from "./Section2.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Image from "next/dist/client/image";

export default function Section2() {
    return (
        <>
            <div className={style.big_section_2_box}>
                <div className="container-xl">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <h1 className={`text-center fw-bold`}>
                                Product  was Built Specifically 
                                for You
                            </h1>
                        </div>
                    </div>
                   
                   <div className="row">
                       <div className={`col-sm-4 bg-dark ${style.Section2_boxes}`}>
                    



                       </div>
                   </div>
                </div>
            </div>
        </>
    );
}
