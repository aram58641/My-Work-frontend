import Head from "next/head";
import Section1 from "./HomePage/Section1/Section1";
import Footer from "./Leyouts/Header/Footer/Footer";
import Header from "./Leyouts/Header/Header";
import Bod
export default function Home() {
    return (
        <>

            <Head>
                <title>HomePage</title>
            </Head>



            <Header />
            <Section1 />


            <Footer/>

        </>
    );
}