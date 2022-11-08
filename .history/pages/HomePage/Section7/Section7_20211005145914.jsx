import style from "./Section7.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/dist/client/image";
import { useState } from "react";
import icon1 from "../../../public/Image/AvatarSec7_1.png";
import icon2 from "../../../public/Image/AvatarSec7_2.png";
import icon3 from "../../../public/Image/AvatarSec7_3.png";

export default function Section7() {

    const [work, SetWork] = useState([
        {
            id: 1,
            image: icon1,
            title: "First click tests",
            text: "While most people enjoy casino gambling, most people enjoy",
        },
        {
            id: 2,
            image:icon2,
            title: "Design surveys",
            text: "Sports betting, lottery and bingo playing for the fun most people enjoy",
        },
        {
            id: 3,
            image:icon3,
            title: "Preference tests",
            text: "The Myspace page defines the individual.",
        },
      
    ]);




    return (
        <>
            <div className={` ${style.big_section_7_box}`}>
                <div className="container-xl">
                   
                    <div className="row mt-5">
                        <div className="col-md-12 text-left mt-5">
                            <h2 className="fs-3 fw-bold ">Contents Strategies</h2>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12 text-left ">
                            <h4 className="fs-6 ">We focus on ergonomics and meeting you where you work. It's only a keystroke away. </h4>
                        </div>
                    </div>











                <div className="row d-flex justify-content-between">
                {work.map((workItem) => {
                            return (
                                <div
                                    key={workItem.id + "-section7"}
                                    className={`col-lg-3 mt-5 bg-white text-center ${style.Section2_boxes}`}
                                >
                                    <Image
                                        className={`mt-2 img-fluid`}
                                        src={workItem.image}
                                        alt="Picture of the author"
                                    />
                                    <h2 className={`mt-2`}>{workItem.title}</h2>
                                    <p className={`mt-2`}>{workItem.text}</p>
                                </div>
                            );
                        })}
                </div>
                   






















                </div>
            </div>
        </>
    );
}
