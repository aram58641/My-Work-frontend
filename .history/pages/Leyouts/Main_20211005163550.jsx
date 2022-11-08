import Footer from "./Header/Footer/Footer";

export default function Main({children}) {
    return <>
        <Heade />
            {children}
        <Footer/>
    </>;
}