import Head from "next/head";
import Section1 from "./HomePage/Section1/Section1";
import Section2 from "./HomePage/Section2/Section2";
import Footer from "./Leyouts/Header/Footer/Footer";
import Header from "./Leyouts/Header/Header";

export default function Home() {
    return (
        <>

            <Head>
                <title>HomePage</title>
            </Head>

            


            <Header />
            <Section1 />
            <Section2 />
            <>Section3

            <Footer/>

        </>
    );
}
