import Main from "../Leyouts/Main";
import Head from "next/head";
import style from "./Contact.module.scss";
import img from "../../public/Image/Contact.png";
import Image from "next/dist/client/image";

export default function Contact(params) {
    return (
        <>
            <Main>
                <div
                    id="myCarousel"
                    class Name={`${style.myCarousel} carousel slide carousel-fade pt-5`}
                    data-ride="carousel"
                >
                    <div class Name="carousel-inner">
                        <div class Name={`${style.ca} carousel-item active`}>
                            <div class Name={`${style.mas} mask flex-center`}>
                                <div class Name="container">
                                    <div class Name="row align-items-center">
                                        <div class Name="col-md-7 col-12 order-md-1 order-2">
                                            <h4 class Name={style.h4}>
                                                Present your <br />
                                                awesome product
                                            </h4>
                                            <p class Name={style.p}>
                                                Lorem ipsum dolor sit amet.
                                                Reprehenderit, qui blanditiis
                                                quidem rerum <br />
                                                necessitatibus praesentium
                                                voluptatum deleniti atque
                                                corrupti.
                                            </p>
                                            <a class Name={style.a} href="#">
                                                BUY NOW
                                            </a>{" "}
                                        </div>
                                        <div class Name="col-md-5 col-12 order-md-2  order-1">
                                            <Image
                                                class Name={`${style.img} `}
                                                src={img}
                                                class Name="mx-auto"
                                                alt="slide"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class Name={` ${style.ca}carousel-item`}></div>
                        <div class Name={`${style.ca} carousel-item`}>
                            <div class Name={`${style.mas} mask flex-center`}>
                                <div class Name="container">
                                    <div class Name="row align-items-center">
                                        <div class Name="col-md-7 col-12 order-md-1 order-2">
                                            <h4 class Name={style.h4}>
                                                Present your <br />
                                                awesome product
                                            </h4>
                                            <p class Name={style.p}>
                                                Lorem ipsum dolor sit amet.
                                                Reprehenderit, qui blanditiis
                                                quidem rerum <br />
                                                necessitatibus praesentium
                                                voluptatum deleniti atque
                                                corrupti.
                                            </p>
                                            <a class Name={style.a} href="#">
                                                BUY NOW
                                            </a>{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


















                <div class ="container">
                    <div
                        class ="jumbotron jumbotron-sm"
                        style="background-color:#339966;margin-top:2%;color:white;"
                    >
                        <div class ="row">
                            <div class ="col-sm-12 col-lg-12">
                                <h1 class ="h2" style="margin-top:-2%">
                                    İletişim
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class ="container">
                    <div class ="row">
                        <div class ="col-sm-6">
                            <div class ="well">
                                <h3 style="line-height:20%;">
                                    <i
                                        class ="fa fa-home fa-1x"
                                        style="line-height:6%;color:#339966"
                                    ></i>{" "}
                                    Adres:
                                </h3>
                                <p style="margin-top:6%;line-height:35%">
                                    İzmit/KOCAELİ
                                </p>
                                <br />
                                <br />
                                <h3 style="line-height:20%;">
                                    <i
                                        class ="fa fa-envelope fa-1x"
                                        style="line-height:6%;color:#339966"
                                    ></i>{" "}
                                    E-Mail Adresimiz:
                                </h3>
                                <p style="margin-top:6%;line-height:35%">
                                    info@birisi.com
                                </p>
                                <br />
                                <br />
                                <h3 style="line-height:20%;">
                                    <i
                                        class ="fa fa-user fa-1x"
                                        style="line-height:6%;color:#339966"
                                    ></i>{" "}
                                    Sorumlu Kişi:
                                </h3>
                                <p style="margin-top:6%;line-height:35%">
                                    Sorumlu Kişi
                                </p>
                                <br />
                                <br />
                                <h3 style="line-height:20%;">
                                    <i
                                        class ="fa fa-yelp fa-1x"
                                        style="line-height:6%;color:#339966"
                                    ></i>{" "}
                                    Destek Merkezi:
                                </h3>
                                <p style="margin-top:6%;line-height:35%">
                                    <a href="siteadresi.com/destek">
                                        siteadresi.com/destek
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div class ="col-sm-6">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96690.80542089987!2d29.864461132544537!3d40.77109282810726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb4f66644bfb9d%3A0x82690ee7586b7eb9!2zxLB6bWl0LCBLb2NhZWxp!5e0!3m2!1str!2str!4v1480782606579"
                                width="565"
                                height="430"
                                frameborder="0"
                                style="border:0"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </Main>
        </>
    );
}
