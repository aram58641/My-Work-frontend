import Head from "next/head";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import Section4 from "./Section4/Section4";
import Section5 from "./Section5/Section5";
import Section6 from "./Section6/Section6";
import Section7 from "./Section7/Section7";
import Section8 from "./Setion8/Section8";
// import fetch from "node-fetch";

export default function HomePage() {
    
    return (
        <>
            <Head>
                <title>HomePage</title>
            </Head>

            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
        </>
    );
}