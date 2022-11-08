import Head from "next/head";
import Main from "../Leyouts/Main";
import { useRouter } from "next/router";

export default function Categories(params) {
    const router = useRouter();
    console.log(router, "routes");

    return (
        <>
            <Head>
                <title>{router.query}</title>
            </Head>

            <Main>
                <section>hello</section>
            </Main>
        </>
    );
}
