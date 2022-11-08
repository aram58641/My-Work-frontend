import Head from "next/head";
import Main from "../../Leyouts/Main";
import { useRouter } from "next/router";
import Filter from "../../FilterPage/Filter";

export default function Categories(params) {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>{router.query.key}</title>
            </Head>

            <Main>
                {/* Filter Page */}

                <Filter />
            </Main>
        </>
    );
}
