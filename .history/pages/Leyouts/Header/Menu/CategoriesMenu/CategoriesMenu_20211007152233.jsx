import style from "../../Header.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuDesign from "./MenuDesign/MenuDesign";
import MenuIt from "./MenuIt/MenuIt";
import MenuTextTranslation from "./MenuTextsAndTranslations/MenuTextsTranslations";
import MenuSeo from "./MenuSeo/MenuSeo";

export function CategoriesMenu() {
    return (
        <div className={`d-flex justify-content-end ${style.Menu_item_margin}`}>
            <div className={`collapse navbar-collapse `} id="navbarSupportedContent">
                <ul className={`navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center ${style.ulLi}`}>
                    {/* Menu Items */}

                    <MenuDesign />
                    <MenuIt />
                    <MenuTextTranslation />
                    <MenuSeo />
                </ul>
            </div>
        </div>
    );
}
