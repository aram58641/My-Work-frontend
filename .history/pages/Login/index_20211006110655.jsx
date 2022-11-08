import Head from "next/head";
import Main from "../Leyouts/Main";
import style from "./Login.module.scss";

export default function Login() {
    return (
        <>
            <Head>
                <title>Sigin In</title>
            </Head>
        <Main>

        </Main>
                           <div class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
                    <div class="text-white mb-3 mb-md-0">
                        Copyright © 2020. All rights reserved.
                    </div>

                    <div>
                        <a href="#!" class="text-white me-4"></a>
                        <a href="#!" class="text-white me-4">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#!" class="text-white me-4">
                            <i class="fab fa-google"></i>
                        </a>
                        <a href="#!" class="text-white">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
