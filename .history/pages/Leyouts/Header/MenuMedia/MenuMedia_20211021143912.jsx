import style from "../Header.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/dist/client/link";
import { Menu } from "../Menu/MainMenu";
import CategoriesFilter from "../../../FilterPage/CategoriesFilter/CategoriesFilter";
import CategoriesJson from "../../../Json/Menu.json";
import MenuDesign from "../Menu/CategoriesMenu/MenuDesign/MenuDesign";
import MenuIt from "../Menu/CategoriesMenu/MenuIt/MenuIt";
import MenuTextTranslation from "../Menu/CategoriesMenu/MenuTextsAndTranslations/MenuTextsTranslations";
import MenuSeo from "../Menu/CategoriesMenu/MenuSeo/MenuSeo";
import MenuSocialMediaAndAdvertising from "../Menu/CategoriesMenu/MenuSocialMediaAndAdvertising/MenuSocialMediaAndAdvertising";
import MenuAudioVideoShooting from "../Menu/CategoriesMenu/MenuAudioVideoShooting/MenuAudioVideoShooting";


export default function MenuMedia(props) {
    return (
        <>
            <div className="container-fluid">
                <Link  href='/'>
                <a className="navbar-brand">
                        MyWork.com
                </a>
                </Link>
               
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="offcanvas offcanvas-start"
                    tabindex="-1"
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                >
                    <div className="offcanvas-header">
                        <h5
                            className="offcanvas-title"
                            id="offcanvasNavbarLabel"
                        >
                            Offcanvas
                        </h5>
                        <button
                            type="button"
                            className="btn-close text-reset"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>

                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        
                        <Menu />
                        
                    <MenuDesign
                        CategoriName={CategoriesJson.filter(
                            (item) => item.key === "design"
                        )}
                    />
                    
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
                
            </div>
        </>
    );
}
