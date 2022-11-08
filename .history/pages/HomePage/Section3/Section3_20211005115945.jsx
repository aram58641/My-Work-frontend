import style from "./Section3.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Image from "next/dist/client/image";

export default function Section3() {
    return (
        <>
            <div className="container-xl">
                <div className={style.big_section_3_box}>
                    <p>Effortless Validation for</p>
                    <h2>Management</h2>
                    <p>
                        The Myspace page defines the individual, his or her
                        characteristics, traits, personal choices and the
                        overall personality of the person.
                    </p>
                    <h4>Accessory makers</h4>
                    <p></p>
                    <h4></h4>
                    <p></p>
                </div>
            </div>
        </>
    );
}
