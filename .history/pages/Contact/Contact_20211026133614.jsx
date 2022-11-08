import Main from "../Leyouts/Main";
import Head from "next/head";
import style from "./Contact.module.scss";
import img from "../../public/Image/Contact.png";
import Image from "next/dist/client/image";
import { FaBeer, FcAssistant } from "react-icons/fa";

export default function Contact(params) {
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
                                        <div className="col-md-5 col-12 order-md-2  order-1">
                                            <Image
                                                className={`${style.img} `}
                                                src={img}
                                                className="mx-auto"
                                                alt="slide"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={` ${style.ca}carousel-item`}></div>
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


















                <div className="container">
                    <div
                        className={`${style.jumbo} jumbotron jumbotron-sm`}
                    
                    >
                        <div className="row">
                            <div className="col-sm-12 col-lg-12">
                                <h1 className={`${style.h2}`} >
                                    İletişim
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="well">
                                <h3  className={style.h33}>
                                    <i
                                        className={`${style.i} fa fa-home fa-1x`}
                                       
                                    ></i>{" "}
                                    Adres:
                                </h3>
                                <p className={style.p1}>
                                    İzmit/KOCAELİ
                                </p>
                                <br />
                                <br />
                                <h3 className={style.h33}>
                                    <i
                                        className={`${style.i}fa fa-envelope fa-1x`}
                                    ></i>{" "}
                                    E-Mail Adresimiz:
                                </h3>
                                <p className={style.p1}>
                                    info@birisi.com
                                </p>
                                <br />
                                <br />
                                <h3 className={style.h33}>
                                    <i
                                        className={`${style.i} fa fa-user fa-1x`}
                                        
                                    ></i>{" "}
                                    Sorumlu Kişi:
                                </h3>
                                <p className={style.p1}>
                                    Sorumlu Kişi
                                </p>
                                <br />
                                <br />
                                <h3 className={style.h33}>
                                    
                                <FcAssistant>
                                    
                                </FcAssistant>

                                        {/*  */}
                                    
                                         
                                    Destek Merkezi:
                                </h3>
                                <p className={style.p1}>
                                    <a href="siteadresi.com/destek">
                                        siteadresi.com/destek
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96690.80542089987!2d29.864461132544537!3d40.77109282810726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb4f66644bfb9d%3A0x82690ee7586b7eb9!2zxLB6bWl0LCBLb2NhZWxp!5e0!3m2!1str!2str!4v1480782606579"
                                width="565"
                                height="430"
                                className ={style.map}
                                frameborder="0"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </Main>
        </>
    );
}
