import Head from "next/head";
import Main from "../Leyouts/Main";
import { useRouter } from "next/router";

export default function Categories(params) {
    const router = useRouter();

    return (
        if(router.query.key )
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
