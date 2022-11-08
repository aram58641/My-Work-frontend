import Footer from "./Footer/Footer";
import Header from "./Header";

export default function Main({ children }) {
    return (
        <>
            <Header />
              {children}
            <Footer />
        </>
    );
}
