import Head from "next/head";
import Main from "../Leyouts/Main";
import { useRouter } from "next/router";
import CategoriesJson from "../Json/Menu.json";

export default function Categories(params) {
    const router = useRouter();
    if (subChild.key != router.query.key) {
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
}
