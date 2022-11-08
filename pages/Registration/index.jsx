import Head from "next/head";
import Main from "../Leyouts/Main";
import style from "./Regitration.module.scss";
import Image2 from "../../public/Image/regitration_page_image.png";
import Image from "next/dist/client/image";
import { useState } from "react";
import Swal from "sweetalert2";
import {
    ValidateEmail,
    ValidateIagree,
    ValidateSellerBuyer,
    ValidateName,
    ValidatePassword,
    ValidateLastname,
} from "../Validate/Validate";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Registration(params) {

    const router = useRouter();


    const [name, setChangeName] = useState("");
    const [lastname, setChangeLastname] = useState("");
    const [email, setChangeEmail] = useState("");
    const [password, setChangePassword] = useState("");
    const [passwordrep, setChangeRepPassword] = useState("");
    const [seller, setSeller] = useState(true);
    const [buyer, setBuyer] = useState(false);
    const [iagree, setIagree] = useState(true);

    const ChangeName = (e) => {
        const { value } = e.target;
        setChangeName(value);
    };
    const ChangeLastname = (e) => {
        const { value } = e.target;
        setChangeLastname(value);
    };
    const ChangeEmail = (e) => {
        const { value } = e.target;
        setChangeEmail(value);
    };
    const ChangePassword = (e) => {
        const { value } = e.target;
        setChangePassword(value);
    };
    const ChangeRepPassword = (e) => {
        const { value } = e.target;
        setChangeRepPassword(value);
    };
    const Seller = () => {
        setSeller(true);
        setBuyer(false);
    };
    const Buyer = () => {
        setSeller(false);
        setBuyer(true);
    };
    const Iagree = (e) => {
        const { value } = e.target;
        setIagree(!true);

    };

    // Validation

    const Register = async () => {
        const isValidName = ValidateName(name);
        // const isValidSellerBuyer = ValidateSellerBuyer(seller,buyer);
        const isValidEmail = ValidateEmail(email);
        const isValidPassword = ValidatePassword(password, passwordrep);
        const isValidLastname = ValidateLastname(lastname);
        // const isValidIagree = ValidateIagree(iagree);

        if (!isValidName || !isValidLastname) {
            return Swal.fire({
                icon: "error",
                text: "Пожалуйста, заполните все поля",
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
        } else if (!isValidPassword) {
            return Swal.fire({
                icon: "error",
                text: "Пароли должны совпадать",
                confirmButtonColor: "#67B8AF",
                confirmButtonText: "Ok",

                // footer: '<a href="">Why do I have this issue?</a>',
            });
        }


                // loading

        let timerInterval;
        Swal.fire({
            title: "Registration",
            html: "i will Reg <b></b> milliseconds.",
            timer: 1000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const b = Swal.getHtmlContainer().querySelector("b");
                timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft();
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            },
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
        });





        //    Registration  Data

        const res = await axios.post(
            "http://mywork.loc/api/registration/submit",
            {
                name: name,
                lastname: lastname,
                email: email,
                password: password,
                seller: seller,
                buyer: buyer,
            }
        );
        const data = res.data;

        if (data) {
            Swal.fire({
                title: "Уже зарегистрированы",
                icon: "success",
                confirmButtonText: "Ok",
                confirmButtonColor: "#67B8AF",
            });

            router.push(`/Login`);

        }

        setChangeName("");
        setChangeLastname("");
        setChangeEmail("");
        setChangePassword("");
        setChangeRepPassword("");
        setSeller("");
        setBuyer("");
        setIagree("");
    };

    return (
        <>
            <Head>
                <title>Registration Page</title>
            </Head>

            <Main>
                <section className={`pt-2 mb-5 ${style.reg_big_box} `}>
                    <div className="container-fluid ">
                        <div className="row d-flex  justify-content-center align-items-center h-100">
                            <div className="col-lg-12 col-xl-11">
                                <div classNameName={` `}>
                                    <div className="card-body   p-md-1">
                                        <div className="row justify-content-evenly">
                                            <div className="col-md-10 col-lg-6 col-xl-3 order-2 order-lg-1 ">
                                                <p className=" text-center h2 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                                    Регистрация
                                                </p>

                                                <form className="mx-1 mx-md-1">
                                                    <div className="d-flex flex-row align-items-center mb-1">
                                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    ChangeName(
                                                                        e
                                                                    );
                                                                }}
                                                                value={name}
                                                                type="text"
                                                                id="form3Example1c"
                                                                className="form-control"
                                                            />
                                                            <label
                                                                className="form-label form-text"
                                                                for="form3Example1c"
                                                            >
                                                                Your Name
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-row align-items-center mb-1">
                                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    ChangeLastname(
                                                                        e
                                                                    );
                                                                }}
                                                                value={lastname}
                                                                type="text"
                                                                id="form3Example1ln"
                                                                className="form-control"
                                                            />
                                                            <label
                                                                className="form-label form-text"
                                                                for="form3Example1ln"
                                                            >
                                                                Your Last Name
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div className="d-flex flex-row align-items-center mb-1">
                                                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    ChangeEmail(
                                                                        e
                                                                    );
                                                                }}
                                                                type="email"
                                                                id="form3Example3c"
                                                                className="form-control"
                                                                value={email}
                                                            />
                                                            <label
                                                                className="form-label form-text"
                                                                for="form3Example3c"
                                                            >
                                                                Your Email
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div className="d-flex flex-row align-items-center mb-2">
                                                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    ChangePassword(
                                                                        e
                                                                    );
                                                                }}
                                                                type="password"
                                                                id="form3Example4c"
                                                                className="form-control"
                                                                value={password}
                                                            />
                                                            <label
                                                                className="form-label form-text"
                                                                for="form3Example4c"
                                                            >
                                                                Password
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div className="d-flex flex-row align-items-center mb-1">
                                                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    ChangeRepPassword(
                                                                        e
                                                                    );
                                                                }}
                                                                type="password"
                                                                id="form3Example4cd"
                                                                className="form-control"
                                                                value={
                                                                    passwordrep
                                                                }
                                                            />
                                                            <label
                                                                className="form-label form-text"
                                                                for="form3Example4cd"
                                                            >
                                                                Repeat your
                                                                password
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div className="mb-4 d-flex justify-content-evenly">
                                                       
                                                        <input
                                                            type="radio"
                                                            class="btn-check"
                                                            checked={seller}
                                                            name="options-outlined"
                                                            id="danger-outlined"
                                                            autocomplete="off"
                                                            value={seller}
                                                            onChange={() =>
                                                                Seller()
                                                            }
                                                        />
                                                        <label
                                                            class="btn btn-outline-success"
                                                            for="danger-outlined"
                                                        >
                                                            Продавец
                                                        </label>
                                                        <input
                                                            type="radio"
                                                            class="btn-check"
                                                            checked={buyer}
                                                            name="options-outlined"
                                                            id="success-outlined"
                                                            autocomplete="off"
                                                            value={buyer}
                                                            onChange={() =>
                                                                Buyer()
                                                            }
                                                        />
                                                        <label
                                                            class="btn btn-outline-success"
                                                            for="success-outlined"
                                                        >
                                                            Покупатель
                                                        </label>

                                                    </div>

                                                    <div className="form-check d-flex justify-content-center mb-3">
                                                        <input
                                                            className="form-check-input  ms-2"
                                                            type="checkbox"
                                                            value={iagree}
                                                            id="form2Example3c"
                                                            onChange={(e) => {
                                                                Iagree(e);
                                                            }}
                                                        />
                                                        <label
                                                           className="form-check-label form-text ms-1"
                                                            for="form2Example3c"
                                                        >
                                                            Регистрируясь, вы принимаете {" "}
                                                            <Link href="/TermsOfUse/TermsOfUse" className="form-text">
                                                                Пользовательское соглашение
                                                            </Link>
                                                        </label>
                                                    </div>

                                                    <div className="d-flex justify-content-center mx-4 mb-2 mb-lg-4">
                                                        <button
                                                            className={`btn text-white text-uppercase  ${style.Sign_Up_btn}`}
                                                            type="button"
                                                            onClick={() => {
                                                                Register();
                                                            }}
                                                        >
                                                            Register
                                                        </button>
                                                    </div>
                                                    <p className="small fw-bold text-center mt-2 pt-1 mb-0 form-text">
                                                        Уже зарегистрированы?{" "}
                                                        <Link href={"/Login"}>
                                                            <a
                                                                classNameName={`"link-danger"`}
                                                            >
                                                                Войти
                                                            </a>
                                                        </Link>
                                                    </p>
                                                </form>
                                            </div>
                                            <div className="col-md-10 pb-5 col-lg-6 col-xl-4 d-flex align-items-center order-1 order-lg-2">
                                                <Image
                                                    src={Image2}
                                                  
                                                    className={`img-fluid ${style.image_position}`}
                                                    alt="Picture of the author"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Main>
        </>
    );
}
