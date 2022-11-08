import Head from "next/head";
import HomePage from "./HomePage/HomePage";
import Footer from "./Leyouts/Footer/Footer";
import Header from "./Leyouts/Header/Header";

export default function App() {
    return (
        <>
            <Header />
            <HomePage />

            <Footer />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>        </>
    );
}
