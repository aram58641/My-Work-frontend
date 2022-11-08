import Footer from "./Footer/Footer";
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
