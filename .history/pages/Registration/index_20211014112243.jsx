import Head from "next/head";
import Main from "../Leyouts/Main";
import style from "./Regitration.module.scss";
import logo1 from "../../public/Image/regitration_page_image.png";
import Image from "next/dist/client/image";

export default function Registration(params) {
    return (
        <>
            <Head>
                <title>Registration Page</title>
            </Head>

            <Main>
                <section className={`pt-2 mb-5 ${style.reg_big_box}`}>
                    <div className="container-fluid ">
                        <div className="row d-flex  justify-content-center align-items-center h-100">
                            <div className="col-lg-12 col-xl-11">
                                <div classNameName={` `}>
                                    <div className="card-body   p-md-1">
                                        <div className="row justify-content-center">
                                            <div className="col-md-10 col-lg-6 col-xl-4 order-2 order-lg-1 ">
                                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                                    Sign up
                                                </p>

                                                <form className="mx-1 mx-md-1">
                                                    <div className="d-flex flex-row align-items-center mb-1">
                                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input
                                                                type="text"
                                                                id="form3Example1c"
                                                                className="form-control"
                                                            />
                                                            <label
                                                                className="form-label"
                                                                for="form3Example1c"
                                                            >
                                                                Your Name
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div className="d-flex flex-row align-items-center mb-1">
                                                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input
                                                                type="email"
                                                                id="form3Example3c"
                                                                className="form-control"
                                                            />
                                                            <label
                                                                className="form-label"
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
                                                                type="password"
                                                                id="form3Example4c"
                                                                className="form-control"
                                                            />
                                                            <label
                                                                className="form-label"
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
                                                                type="password"
                                                                id="form3Example4cd"
                                                                className="form-control"
                                                            />
                                                            <label
                                                                className="form-label"
                                                                for="form3Example4cd"
                                                            >
                                                                Repeat your
                                                                password
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div className="form-check d-flex justify-content-center mb-3">
                                                        <input
                                                            className="form-check-input me-2"
                                                            type="checkbox"
                                                            value=""
                                                            id="form2Example3c"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            for="form2Example3"
                                                        >
                                                            I agree all
                                                            statements in{" "}
                                                            <a href="#!">
                                                                Terms of service
                                                            </a>
                                                        </label>
                                                    </div>

                                                    <div className="d-flex justify-content-center mx-4 mb-2 mb-lg-4">
                                                        <button
                                                            className={`btn text-white text-uppercase  ${style.Sign_Up_btn}`}
                                                            type="button"
                                                        >
                                                            Register
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                                <Image
                                                    src="https://i.pinimg.com/736x/a2/3f/82/a23f8291aa1bbf0c1039ec1c3c852645.jpg"
                                                    className={`img-fluid ${style.image_position}`}
                                                    alt="Sample image"
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
