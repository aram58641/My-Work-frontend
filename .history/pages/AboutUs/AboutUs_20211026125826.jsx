import Main from "../Leyouts/Main";
import Head from "next/head";
import style from "./AboutUs.module.scss";
import img from "../../public/Image/aboutus.png";
export default function AboutUs(params) {
    return (
        <>
           
            <Main>
                <div
                    id="myCarousel"
                    className={`${style.myCarousel} carousel slide carousel-fade pt-5`}
                    data-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className={`${style.ca} carousel-item active`}>
                            <div className={`${style.mas} mask flex-center`}>
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-md-7 col-12 order-md-1 order-2">
                                            <h4 className={style.h4}>
                                                Present your <br />
                                                awesome product
                                            </h4>
                                            <p className={style.p}>
                                                Lorem ipsum dolor sit amet.
                                                Reprehenderit, qui blanditiis
                                                quidem rerum <br />
                                                necessitatibus praesentium
                                                voluptatum deleniti atque
                                                corrupti.
                                            </p>
                                            <a className={style.a} href="#">
                                                BUY NOW
                                            </a>{" "}
                                        </div>
                                        <div className="col-md-5 col-12 order-md-2 order-1">
                                            <Image
                                                className={style.img}
                                                src={img}
                                                className="mx-auto"
                                                alt="slide"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={` ${style.ca}carousel-item`}>
                    
                        </div>
                        <div className={`${style.ca} carousel-item`}>
                            <div className={`${style.mas} mask flex-center`}>
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-md-7 col-12 order-md-1 order-2">
                                            <h4 className={style.h4}>
                                                Present your <br />
                                                awesome product
                                            </h4>
                                            <p className={style.p}>
                                                Lorem ipsum dolor sit amet.
                                                Reprehenderit, qui blanditiis
                                                quidem rerum <br />
                                                necessitatibus praesentium
                                                voluptatum deleniti atque
                                                corrupti.
                                            </p>
                                            <a className={style.a} href="#">
                                                BUY NOW
                                            </a>{" "}
                                        </div>
                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
         
                
                </div>
            </Main>
        </>
    );
}
