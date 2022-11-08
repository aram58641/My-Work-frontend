import Main from "../Leyouts/Main";
import Head from "next/head";
import style from "./Contact.module.scss";
import img from "../../public/Image/Contact.png";
import Image from "next/dist/client/image";
import { FaBeer } from "react-icons/fa";
import { FcCallback, FcKey, FcLandscape, FcOrganization } from "react-icons/fc";
import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import imgcont1 from "../../public/Image/FooterContact_1.png";
import imgcont2 from "../../public/Image/FooterContact_2.png";
import imgcont3 from "../../public/Image/FooterContact_3.png";
import Contactmap from "../../public/Image/contact_map.png";
import Link from "next/link";
import Swal from "sweetalert2";
import {
    ValidateName,
    ValidateEmail,
    ValidateMessage,
} from "../Validate/Validate";



//a


export default function Contact({ data }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");




    const changeName = (e) => {
        const { value } = e.target;
        setName(value);
    };

    const changeEmail = (e) => {
        const { value } = e.target;
        setEmail(value);
    };

    const changeMessage = (e) => {
        const { value } = e.target;
        setMessage(value);
    };

    const createContact = async () => {
        const isValidName = ValidateName(name);
        const isValidEmail = ValidateEmail(email);
        const isValidMessage = ValidateMessage(message);

        // Validation


        if (!isValidName) {
            return Swal.fire({
                icon: "error",
                text: "Пожалуйста, заполните все поля",
                confirmButtonColor: "#67B8AF",
                confirmButtonText: "Ok",

                // footer: '<a href="">Why do I have this issue?</a>',
            });
        } else if (!isValidMessage) {
            return Swal.fire({
                icon: "error",
                text: "Поле сообщения должно содержать не менее 5 символов!",
                confirmButtonColor: "#67B8AF",
                confirmButtonText: "Ok",

                // footer: '<a href="">Why do I have this issue?</a>',
            });
        } else if (!isValidEmail) {
            return Swal.fire({
                icon: "error",
                text: "Пожалуйста, введите действующий Email адрес",
                confirmButtonColor: "#67B8AF",
                confirmButtonText: "Ok",

                // footer: '<a href="">Why do I have this issue?</a>',
            });
        } else {
            Swal.fire({
                title: "Сообщение было успешно отправлено",
                icon: "success",
                confirmButtonText: "Ok",
                confirmButtonColor: "#67B8AF",

            });
        }

        // Sxios backend

        const res = await axios.post("http://mywork.loc/api/contact/submit", {
            name: name,
            email: email,
            message: message,
           
        });
        
        const data = res.data;

        console.log(res.data);
       

        setName("");
        setEmail("");
        setMessage("");
        // console.log(message);
    };
    return (
        <>
            <Main>
                <div className="container-xl"></div>
                <div
                    id="myCarousel"
                    className={`${style.myCarousel} carousel slide carousel-fade pt-5`}
                    data-ride="carousel"
                >
                    <div className={`${style.car_pt} carousel-inner pt-5`}>
                        <div className={`${style.ca} carousel-item active`}>
                            <div className={`${style.mas} mask flex-center`}>
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div
                                            className={`${style.text_big_box_anime_contact} col-md-7 col-12 order-md-1 order-2`}
                                        >
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
                                            <Link href="/AboutUs/AboutUs">
                                                <a
                                                    className={`${style.a} `}
                                                    aria-current="page"
                                                >
                                                    About Us
                                                </a>
                                            </Link>
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* forma */}

                <section
                    className={` bg-image pt-5 ${style.big_box_contact_form}`}
                >
                    <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                        <div className="container h-100">
                            <div
                                className={`${style.card_big_box_anime_contact} row d-flex justify-content-center align-items-center h-100`}
                            >
                                <div className="col-12 col-md-9 col-lg-7 col-xl-8">
                                    <div className={`card  ${style.cards}`}>
                                        <div className="card-body p-5">
                                            <div
                                                className={`h1 text-center  ${style.h1_form}`}
                                            >
                                                Contact Me
                                            </div>

                                            <div className="row">
                                                <div className="col-12 d-flex justify-content-center">
                                                    <div
                                                        className={`${style.img_div} img-fluid`}
                                                    >
                                                        <a
                                                            href="https://twitter.com/?lang=en"
                                                            target="_blank"
                                                        >
                                                            <Image
                                                                className={`${style.img} `}
                                                                src={imgcont1}
                                                                className={`${style.cont_form_icon_soc}mx-auto`}
                                                                alt="slide"
                                                            />
                                                        </a>
                                                    </div>

                                                    <div
                                                        className={`${style.img_div} img-fluid`}
                                                    >
                                                        <a
                                                            href="https://www.facebook.com/"
                                                            target="_blank"
                                                        >
                                                            <Image
                                                                className={`${style.img} `}
                                                                src={imgcont2}
                                                                className={`${style.cont_form_icon_soc}mx-auto`}
                                                                alt="slide"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div
                                                        className={`${style.img_div} img-fluid`}
                                                    >
                                                        <a
                                                            href="https://www.instagram.com/"
                                                            target="_blank"
                                                        >
                                                            <Image
                                                                className={`${style.img} `}
                                                                src={imgcont3}
                                                                className={`${style.cont_form_icon_soc}mx-auto`}
                                                                alt="slide"
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="text"
                                                        id="form3Example1cg"
                                                        className={`${style.contact_input} form-control form-control-lg`}
                                                        name="name"
                                                        onChange={(e) =>
                                                            changeName(e)
                                                        }
                                                        value={name}
                                                    />
                                                    <label
                                                        className="form-label"
                                                        for="form3Example1cg"
                                                    >
                                                        Your Name
                                                    </label>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="email"
                                                        id="form3Example3cg"
                                                        className={`${style.contact_input} form-control form-control-lg`}
                                                        name="email1"
                                                        onChange={(e) =>
                                                            changeEmail(e)
                                                        }
                                                        value={email}
                                                    />
                                                    <label
                                                        className="form-label"
                                                        for="form3Example3cg"
                                                    >
                                                        Your Email
                                                    </label>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <textarea
                                                        id="form3Example4cg"
                                                        className={`${style.contact_input} form-control form-control-lg`}
                                                        name="message"
                                                        onChange={(e) =>
                                                            changeMessage(e)
                                                        }
                                                        value={message}
                                                    />

                                                    <label
                                                        className="form-label"
                                                        for="form3Example4cg"
                                                    >
                                                        Send Message
                                                    </label>
                                                </div>

                                                <div className="d-flex justify-content-center">
                                                    <button
                                                        onClick={() =>
                                                            createContact()
                                                        }
                                                        
                                                        type="submit"
                                                        className={`${style.button_contact} btn btn-block btn-lg gradient-custom-4`}
                                                    >
                                                        Send Message
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* endform */}

                {/* Map page  */}

                <div className="container">
                    <div className="row pt-5">
                        <div className="col-sm-6 pt-5 mt-5">
                            <div className="well">
                                <h3 className={style.h33}>
                                    <FcOrganization
                                        className={`${style.i} fa fa-home fa-1x`}
                                    ></FcOrganization>{" "}
                                    Адрес:
                                </h3>
                                <p className={style.p1}>Armenia Erevan</p>
                                <br />
                                <br />
                                <h3 className={style.h33}>
                                    <FcKey
                                        className={`${style.i}fa fa-envelope fa-1x`}
                                    ></FcKey>{" "}
                                    E-Mail почта:
                                </h3>
                                <p className={style.p1}>Hayastan.com</p>
                                <br />
                                <br />
                                <h3 className={style.h33}>
                                    <FcLandscape
                                        className={`${style.i} fa fa-user fa-1x`}
                                    ></FcLandscape>{" "}
                                    MyWork.com:
                                </h3>
                                <p className={style.p1}>MyWork.com</p>
                                <br />
                                <br />
                                <h3 className={style.h33}>
                                    <FcCallback
                                        className={`${style.i} fa fa-yelp fa-1x`}
                                    ></FcCallback>
                                    Центр поддержки:
                                </h3>
                                <p className={style.p1}>+374999999999</p>
                            </div>
                        </div>
                        <div className="col-sm-6 pt-5">
                            <Image src={Contactmap} alt=""></Image>
                            <div className={style.res_map_icon}>
                                <img
                                    className={style.img_map_loc}
                                    src="https://icon-library.com/images/location-pin-icon/location-pin-icon-1.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* endmap page  */}
            </Main>
        </>
    );
}
