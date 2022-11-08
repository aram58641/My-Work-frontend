import Head from "next/head";
import Main from "../Leyouts/Main";
import { useRouter } from "next/router";

export default function Categories(params) {
    const router = useRouter();
    if(router.query.key === router.query.key){
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
    }else{
        return error
    }
   
}
