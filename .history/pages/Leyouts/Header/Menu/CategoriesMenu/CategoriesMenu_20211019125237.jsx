import style from "../../Header.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuDesign from "./MenuDesign/MenuDesign";
import MenuIt from "./MenuIt/MenuIt";
import MenuTextTranslation from "./MenuTextsAndTranslations/MenuTextsTranslations";
import MenuSeo from "./MenuSeo/MenuSeo";
import MenuSocialMediaAndAdvertising from "./MenuSocialMediaAndAdvertising/MenuSocialMediaAndAdvertising";
import MenuAudioVideoShooting from "./MenuAudioVideoShooting/MenuAudioVideoShooting";
import CategoriesJson from "../../../../Json/Menu.json";
import MenuBusinessAndLife from "./MenuBusinessAndLife/MenuBusinessAndLife";
import Link from "next/dist/client/link";
export function CategoriesMenu() {
    return (
        <div className={` ${style.Menu_item_margin}`}>
            <div
                className={`collapse navbar-collapse  `}
                id="navbarSupportedContent"
            >
                <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${style.ulLi}`}>
                    {/* Menu Items */}

                    <Link
                     href={`/categories/${CategoriesJson[0]key}`}>
                        <MenuDesign
                            CategoriName={CategoriesJson.filter(
                                (item) => item.key === "design"
                            )}
                        />
                    </Link>

                    <MenuIt
                        CategoriName={CategoriesJson.filter(
                            (item) => item.key === "it"
                        )}
                    />
                    <MenuTextTranslation
                        CategoriName={CategoriesJson.filter(
                            (item) => item.key === "textTranslation"
                        )}
                    />
                    <MenuSeo
                        CategoriName={CategoriesJson.filter(
                            (item) => item.key === "seo"
                        )}
                    />
                    <MenuSocialMediaAndAdvertising
                        CategoriName={CategoriesJson.filter(
                            (item) => item.key === "socialmedia"
                        )}
                    />
                    <MenuAudioVideoShooting
                        CategoriName={CategoriesJson.filter(
                            (item) => item.key === "audiovideo"
                        )}
                    />
                    <MenuBusinessAndLife
                        CategoriName={CategoriesJson.filter(
                            (item) => item.key === "business"
                        )}
                    />
                </ul>
            </div>
        </div>
    );
}
