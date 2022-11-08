import Head from "next/head";
import Main from "../Leyouts/Main";
import style from "./Regitration.module.scss";
export default function Registration(params) {
    return (
        <>
            <Head>
                <title>Registration Page</title>
            </Head>

            <Main>
                <section classs={`pt-5 mb-5 ${style.reg_big_box}`}>
                    <div classs="container-fluid  pt-5">
                        <div classs="row d-flex  justify-content-center align-items-center h-100">
                            <div classs="col-lg-12 col-xl-11">
                                <div classsName={` `}>
                                    <div classs="card-body   p-md-5">
                                        <div classs="row justify-content-center">
                                            <div classs="col-md-10 col-lg-6 col-xl-4 order-2 order-lg-1 ">
                                                <p classs="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                                    Sign up
                                                </p>

                                                <form classs="mx-1 mx-md-4">
                                                    <div classs="d-flex flex-row align-items-center mb-4">
                                                        <i classs="fas fa-user fa-lg me-3 fa-fw"></i>
                                                        <div classs="form-outline flex-fill mb-0">
                                                            <input
                                                                type="text"
                                                                id="form3Example1c"
                                                                classs="form-control"
                                                            />
                                                            <label
                                                                classs="form-label"
                                                                for="form3Example1c"
                                                            >
                                                                Your Name
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div classs="d-flex flex-row align-items-center mb-4">
                                                        <i classs="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                        <div classs="form-outline flex-fill mb-0">
                                                            <input
                                                                type="email"
                                                                id="form3Example3c"
                                                                classs="form-control"
                                                            />
                                                            <label
                                                                classs="form-label"
                                                                for="form3Example3c"
                                                            >
                                                                Your Email
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div classs="d-flex flex-row align-items-center mb-4">
                                                        <i classs="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                        <div classs="form-outline flex-fill mb-0">
                                                            <input
                                                                type="password"
                                                                id="form3Example4c"
                                                                classs="form-control"
                                                            />
                                                            <label
                                                                classs="form-label"
                                                                for="form3Example4c"
                                                            >
                                                                Password
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div classs="d-flex flex-row align-items-center mb-4">
                                                        <i classs="fas fa-key fa-lg me-3 fa-fw"></i>
                                                        <div classs="form-outline flex-fill mb-0">
                                                            <input
                                                                type="password"
                                                                id="form3Example4cd"
                                                                classs="form-control"
                                                            />
                                                            <label
                                                                classs="form-label"
                                                                for="form3Example4cd"
                                                            >
                                                                Repeat your
                                                                password
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div classs="form-check d-flex justify-content-center mb-5">
                                                        <input
                                                            classs="form-check-input me-2"
                                                            type="checkbox"
                                                            value=""
                                                            id="form2Example3c"
                                                        />
                                                        <label
                                                            classs="form-check-label"
                                                            for="form2Example3"
                                                        >
                                                            I agree all
                                                            statements in{" "}
                                                            <a href="#!">
                                                                Terms of service
                                                            </a>
                                                        </label>
                                                    </div>

                                                    <div classs="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                        <button
                                                            classsName={`btn text-white text-uppercase  ${style.Sign_Up_btn}`}
                                                            type="button"
                                                        >
                                                            Register
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                            <div classs="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                                <img
                                                    src="https://i.pinimg.com/736x/a2/3f/82/a23f8291aa1bbf0c1039ec1c3c852645.jpg"
                                                    classs={`img-fluid ${style.image_position}`}
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
