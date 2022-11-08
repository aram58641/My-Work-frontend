import style from "./Section8.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/dist/client/image";
import { useState } from "react";
import 
export default function Section8() {

    const [clients, SetClients] = useState([
        {
            id: 1,
            image: icon1,
            title: `Product helps you see how many 
                    more days you need to work to 
                    reach your financial goal.`,
            name: "Wahid Ari",
            prmission: "Designer",

        },
        {
            id: 2,
            image:icon2,
            title: `Product helps you see how many 
                    more days you need to work to 
                    reach your financial goal.`,
            name: "Wahid Ari",
            prmission: "Programmer",

        },
        {
            id: 3,
            image:icon3,
            title: `Product helps you see how many 
                    more days you need to work to 
                    reach your financial goal.`,
            name: "Wahid Ari",
            prmission: "Vochmiban",

        },
      
    ]);




    return (
        <>
            <div className={` ${style.big_section_8_box}`}>
                <div className="container-xl">
                   
                    <div className="row mt-5">
                        <div className="col-md-12 text-center  mt-5">
                            <h2 className="fs-3 fw-bold ">Contents Strategies</h2>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12  text-center ">
                            <h4 className="fs-6 ">
                                We focus on ergonomics and meeting you where you work. It's only
                                a keystroke away. 
                            </h4>
                        </div>
                    </div>

                <div className="row d-flex justify-content-between mt-5">
                {clients.map((clientsItem) => {
                            return (
                                <div
                                    key={clientsItem.id + "-section7"}
                                    className={` col-lg-3 mt-5  text-center ${style.Section8_boxes}`}
                                >
                                   
                                    <p className={`mt-2`}>{clientsItem.title}</p>
                                    <p className={`mt-2 fs-5 fw-bold text-center`}>{clientsItem.name}</p>
                                        <Image
                                            className={`mt-2  ${style.styleimg}`}
                                            src={clientsItem.image}
                                            alt="Picture of the author"
                                        />
                                        <h3 className={`text-center fs-5 fw-bolder `}>{clientsItem.prmission}</h3>
                                 
                                </div>
                            );
                        })}
                </div>

                </div>
            </div>
        </>
    );
}
