import Head from "next/head";
import Main from "../../Leyouts/Main";
import { useRouter } from "next/router";
import MainCategories from "../../Leyouts/Header/Menu/CategoriesMenu/MainCategories/MainCategories";

export default function Categories(params) {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>{'Categories' + ' ' + router.query.cat}</title>
            </Head>

            <Main>
                {/* Filter Page */}

                <MainCategories cat={router.query.cat} />
            </Main>
        </>
    );
}
