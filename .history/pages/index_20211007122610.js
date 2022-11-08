import Head from "next/head";
import HomePage from "./HomePage/HomePage";
import Footer from "./Leyouts/Footer/Footer";
import Header from "./Leyouts/Header/Header";

export default function App() {
    return (
        <>            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-kQtW33rZJAHjgefvhyyzcGF3C5TFyBQBA13V1RKPf4uH+bwyzQxZ6CmMZHmNBEfJ" crossorigin="anonymous"></script>
            <Header />
            <HomePage />

            <Footer />
    </>
    );
}
