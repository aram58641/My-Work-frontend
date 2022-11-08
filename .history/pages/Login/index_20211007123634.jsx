import Head from "next/head";
import Main from "../Leyouts/Main";
import style from "./Login.module.scss";
import Link from "next/link";
import Image from "next/dist/client/image";
import Icon1 from "../../public/Image/FooterContact_1.png";
import Icon2 from "../../public/Image/FooterContact_2.png";
import Icon3 from "../../public/Image/FooterContact_3.png";

export default function Login() {
    return (
        <>
            <Head>
                <title>Sigin In</title>
            </Head>
            <Main>
          

                <section className={`vh-100 d-flex align-items-center ${style.reg_big_box}`}>
                    <div className="container-fluid h-custom">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-md-9 col-lg-6 col-xl-5">
                                <img
                                    src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png"
                                    className="img-fluid"
                                    alt="Sample image"
                                />
                            </div>
                            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                                <form>
                                    <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                        <p className="lead fw-normal mb-0 me-3">
                                            Sign in with
                                        </p>
                                        <a href="">
                                            <Image src={Icon1} />
                                        </a>
                                        <a href="">
                                            <Image src={Icon2} />
                                        </a>
                                        <a href="">
                                            <Image src={Icon3} />
                                        </a>
                                    </div>

                                    <div className="divider d-flex align-items-center my-4">
                                        <p className="text-center fw-bold mx-3 mb-0">
                                            Or
                                        </p>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input
                                            type="email"
                                            id="form3Example3"
                                            className="form-control form-control-lg"
                                            placeholder="Enter a valid email address"
                                        />
                                        <label
                                            className="form-label"
                                            for="form3Example3"
                                        >
                                            Email address
                                        </label>
                                    </div>

                                    <div className="form-outline mb-3">
                                        <input
                                            type="password"
                                            id="form3Example4"
                                            className="form-control form-control-lg"
                                            placeholder="Enter password"
                                        />
                                        <label
                                            className="form-label"
                                            for="form3Example4"
                                        >
                                            Password
                                        </label>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="form-check mb-0">
                                            <input
                                                className="form-check-input me-2"
                                                type="checkbox"
                                                value=""
                                                id="form2Example3"
                                            />
                                            <label
                                                className="form-check-label"
                                                for="form2Example3"
                                            >
                                                Remember me
                                            </label>
                                        </div>
                                        <a href="#!" className="text-body">
                                            Forgot password?
                                        </a>
                                    </div>

                                    <div className="text-center text-lg-start mt-4 pt-2">
                                        <button
                                            classNameName={`btn text-white text-uppercase  ${style.Sign_Up_btn}`}
                                            type="button"
                                        >
                                            Login
                                        </button>
                                        <p className="small fw-bold mt-2 pt-1 mb-0">
                                            Don't have an account?{" "}
                                            <Link href={"/Registration"}>
                                                <a classNameName={`"link-danger"`}>
                                                    Login
                                                </a>
                                            </Link>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </Main>
        </>
    );
}
