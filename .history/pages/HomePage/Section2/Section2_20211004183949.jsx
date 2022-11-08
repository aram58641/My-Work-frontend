import style from "./Section2.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Image from "next/dist/client/image";
import { useState } from "react";

export default function Section2() {

    const [product,SetProduct]  = useState([
        {   
            image:'',
            title:'First click tests',
            text:'While most people enjoy casino gambling,',
        },
        {
            image:'',
            title:'Design surveys',
            text:'Sports betting, lottery and bingo playing for the fun',
        },
        {
            image:'',
            title:'Preference tests',
            text:'The Myspace page defines the individual.',
        },
        {
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
                            <h1 className={`text-center fw-bold`}>
                                Product  was Built Specifically 
                                for You
                            </h1>
                        </div>
                    </div>
                   
                   <div className="row">

                  {product.map((prodItem)=>{
                       return (
                       <div key={prodItem.} className={`col-sm-4 bg-dark ${style.Section2_boxes}`}>
                            <h1>{prodItem}</h1>
                       </div>
                       )
                  })}
                       
                   </div>
                </div>
            </div>
        </>
    );
}
