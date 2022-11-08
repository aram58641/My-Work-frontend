
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import style from "./Header/Header.module.scss";
import { CategoriesMenu } from "./Header/Menu/CategoriesMenu/CategoriesMenu";


export default function Main({ children }) {
    return (
        <>
                <Header />
                    <nav
                        className={` navbar navbar-expand-lg navbar-light ${style.Nav} `}
                    >
                        <div className="container-fluid d-flex justify-content-center">
                            <div className={`${style.border_menu_bottom}`}>
                                <CategoriesMenu />
                            </div>
                        </div>
                    </nav>

                    {children}
                <Footer />
        </>
    );
}
