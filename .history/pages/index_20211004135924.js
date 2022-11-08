import Head from "next/head";
import Darkmode from "./DarkMode/Darkmode";
import Section1 from "./HomePage/Section1/Section1";
import Footer from "./Leyouts/Header/Footer/Footer";
import Header from "./Leyouts/Header/Header";

export default function Home() {
    return (
        <>

            <Head>
                <title>HomePage</title>
            </Head>

            <Darkmode


            <Header />
            <Section1 />


            <Footer/>

        </>
    );
}