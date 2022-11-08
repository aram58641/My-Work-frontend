import style from "../../../Header.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function MenuAudioVideoShooting(props) {
    const { t } = useTranslation();

    return (
        <li className={`dropdown-submenu ${style.dropdownsubmenu}`}>
            {props.CategoriName.map((item) => {
                return (
                    <>
                        <Link href={`/route/categoriesPage/${item.key}`}>
                            <a
                                className="dropdown-item dropdown-toggle"
                                data-toggle="dropdown"
                            >
                                {item.name}
                            </a>
                        </Link>
                        <ul
                            className={`dropdown-menu ${style.dropdownmenusocial}`}
                        >
                            {item.childs.map((child) => {
                                return (
                                    <>
                                        <div
                                            key={child.id}
                                            className={`${style.parrentsocial}`}
                                        >
                                            <p
                                                className={`text-left  fw-bold ${style.padding_menu_title}`}
                                            >
                                                {t(child.subName)}
                                            </p>

                                            {child.subChilds.map((subChild) => (
                                                <a
                                                    className={`dropdown-item text ${style.dropdownitem_left}`}
                                                    href="#"
                                                >
                                                    {t(subChild.subChildName)}
                                                </a>
                                            ))}
                                        </div>
                                    </>
                                );
                            })}
                        </ul>
                    </>
                );
            })}
        </li>
    );
}
