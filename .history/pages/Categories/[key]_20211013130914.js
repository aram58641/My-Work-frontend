import Head from "next/head";
import Main from "../Leyouts/Main";
import { useRouter } from "next/router";

export default function Categories(params) {
    const router = useRouter();
    if (subChild.key != router.query.key ){
        return error
    }e

    return (
        <>
            <Head>
                <title>{router.query.key}</title>
            </Head>

            <Main>
                <section>hello</section>
            </Main>
        </>
    );
}
