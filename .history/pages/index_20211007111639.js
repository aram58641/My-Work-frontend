import Head from "next/head";
import HomePage from "./HomePage/HomePage";
import Footer from "./Leyouts/Footer/Footer";
import Header from "./Leyouts/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
    return (
        <>
            <Header />
            <HomePage />

            <Footer />

            
        </>
    );
}
