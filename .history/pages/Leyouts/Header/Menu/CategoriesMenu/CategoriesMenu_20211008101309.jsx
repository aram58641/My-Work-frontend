import style from "../../Header.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuDesign from "./MenuDesign/MenuDesign";
import MenuIt from "./MenuIt/MenuIt";
import MenuTextTranslation from "./MenuTextsAndTranslations/MenuTextsTranslations";
import MenuSeo from "./MenuSeo/MenuSeo";
import MenuSocialMediaAndAdvertising from "./MenuSocialMediaAndAdvertising/MenuSocialMediaAndAdvertising";
import MenuAudioVideoShooting from "./MenuAudioVideoShooting/MenuAudioVideoShooting";
import MenuBusinessAndLife from "./MenuBusinessAndLife/MenuAudioVideoShooting";
import CategoriesJson from "../../../../Json/Menu.json";

export function CategoriesMenu() {
    return (
             
                <ul
                    className={`n me-auto mb-2 mb-lg-0 ${style.ulLi}`}
                >
                    {/* Menu Items */}

                    <MenuDesign CategoriName={CategoriesJson.filter((item) => item.key === "design")} />
                    <MenuIt     CategoriName={CategoriesJson.filter((item) => item.key === "it")} />
                    <MenuTextTranslation CategoriName={CategoriesJson.filter((item) => item.key === "it")} />
                    <MenuSeo />
                    <MenuSocialMediaAndAdvertising />
                    <MenuAudioVideoShooting />
                    <MenuBusinessAndLife />
                </ul>
           
    );
}