import style from "../../Header.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuDesign from "./MenuDesign/MenuDesign";
import MenuIt from "./MenuIt/MenuIt";
import MenuTextTranslation from "./MenuTextsAndTranslations/MenuTextsTranslations";
import MenuSeo from "./MenuSeo/MenuSeo";
import MenuSocialMediaAndAdvertising from "./MenuSocialMediaAndAdvertising/MenuSocialMediaAndAdvertising";
import MenuAudioVideoShooting from "./MenuAudioVideoShooting/MenuAudioVideoShooting";
import MenuBusinessAndLife from "./MenuBusinessAndLife/MenuAudioVideoShooting";

export function CategoriesMenu() {
    return (
        <div className={` ${style.Menu_item_margin}`}>
            <div className={`collapse navbar-collapse `} id="navbarSupportedContent">
                <ul className={`navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center ${style.ulLi}`}>
                    {/* Menu Items */}

                    <MenuDesign />
                    <MenuIt />
                    <MenuTextTranslation />
                    <MenuSeo />
                    <MenuSocialMediaAndAdvertising />
                    <MenuAudioVideoShooting />
                    <MenuBusinessAndLife />
                    <MenuBusinessAndLife />
                    <MenuBusinessAndLife />
                    <MenuBusinessAndLife />
                </ul>
            </div>
        </div>
    );
}
