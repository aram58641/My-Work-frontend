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
                <i class="fas fa-search-location    "></i>
            </Main>
        </>
    );
}
