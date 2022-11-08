import style from "./Section2.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Image from "next/dist/client/image";
import { useState } from "react";

export default function Section2() {

    const [product,SetProduct]  = useState([
        {   
            id:1,
            image:'',
            title:'First click tests',
            text:'While most people enjoy casino gambling,',
        },
        {
            id:2,
            image:'',
            title:'Design surveys',
            text:'Sports betting, lottery and bingo playing for the fun',
        },
        {
            id:3,
            image:'',
            title:'Preference tests',
            text:'The Myspace page defines the individual.',
        },
        {
            id:4,
            image:'',
            title:'Five second tests',
            text:'Personal choices and the overall personality of the person. ',
        },


    ]);

    return (
        <>
            <div className={style.big_section_2_box}>
                <div className="container-xl">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <h1 className={`text-center fw-bold mt-5`}>
                                Product  was Built Specifically 
                                for You
                            </h1>
                        </div>
                    </div>
                   
                   <div className="row">

                  {product.map((prodItem)=>{
                       return (
                       <div key={prodItem.id + "-section2"} className={`col-sm-3 mt-5 bg-white text-center ${style.Section2_boxes}`}>

                            <h1>{prodItem.title}</h1>
                            <p>{prodItem.text}</p>
                            <Image src={prodItem.image} alt="Picture of the author" />

                       </div>
                       )
                  })}
                       
                   </div>
                </div>
            </div>
        </>
    );
}
