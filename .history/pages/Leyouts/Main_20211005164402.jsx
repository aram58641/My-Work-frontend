import Footer from "./Header/Footer/Footer";
import Header from "./Header/Header";

export default function Main({ children }) {
    return (
        <>
            <Header />
              {children}
            <Footer />
        </>
    );
}
