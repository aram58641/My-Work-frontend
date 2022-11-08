import Head from "next/head";
import HomePage from "./HomePage/HomePage";
import Footer from "./Leyouts/Header/Footer/Footer";
import Header from "./Leyouts/Header/Header";
import Registration from "./Registration";

export default function App() {
    return (
        <>
            <Header />
                <HomePage />
                <Registration />
            <Footer />
        </>
    );
}
