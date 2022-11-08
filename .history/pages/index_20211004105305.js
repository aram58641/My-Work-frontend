import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Section1 from "./HomePage/Section1/Section1";
import Footer from "./Leyouts/Header/Footer/Footer";
import Header from "./Leyouts/Header/Header";

export default function Home() {
    return (
        <>
            <Header />
            <Section1 />

        </>
    );
}
