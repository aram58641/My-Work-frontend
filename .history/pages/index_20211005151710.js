import Head from "next/head";
import Section1 from "./HomePage/Section1/Section1";
import Section2 from "./HomePage/Section2/Section2";
import Section3 from "./HomePage/Section3/Section3";
import Section4 from "./HomePage/Section4/Section4";
import Section5 from "./HomePage/Section5/Section5";
import Section6 from "./HomePage/Section6/Section6";
import Section7 from "./HomePage/Section7/Section7";
import Section8 from "./HomePage/Setion8/Section8";
import Footer from "./Leyouts/Header/Footer/Footer";
import Header from "./Leyouts/Header/Header";

export default function Home() {
    return (
        <>
            <Head>
                <title>HomePage</title>
            </Head>

            <Header   />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
            <Footer   />
        </>
    );
}
