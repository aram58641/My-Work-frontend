import Head from "next/head";
import Section1 from "./HomePage/Section1/Section1";
import Footer from "./Leyouts/Header/Footer/Footer";
import Header from "./Leyouts/Header/Header";

export default function Home() {
    return (

        const [isDarkMode, setIsDarkMode] = useState(false);

    const onClick = useCallback(
        (evt) => {
            evt.preventDefault();
            if ("undefined" === typeof document) {
                return;
            }

            if (isDarkMode) {
                document.body.style =    `background-color:blue `;
                document.body.style =   `background-color:red `;
                setIsDarkMode(false);
            } else {
                document.body.style =   `background-color:red `;
                document.body.style =   `background-color:blue `;
                setIsDarkMode(true);
            }
        },
        [isDarkMode]
    );
        <>

            <Head>
                <title>HomePage</title>
            </Head>



            <Header />
            <Section1 />


            <Footer/>

        </>
    );
}
