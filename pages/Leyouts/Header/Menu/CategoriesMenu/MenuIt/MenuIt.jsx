import style from "../../../Header.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function MenuIt(props) {
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
                                {t (item.name)}
                            </a>
                        </Link>

                        <ul className={`dropdown-menu ${style.dropdownmenu}`}>
                            {item.childs.map((child) => {
                                return (
                                    <>
                                        <div
                                            key={child.id}
                                            className={`${style.parrent}`}
                                        >
                                            <p
                                                className={`text-left  fw-bold ${style.padding_menu_title}`}
                                            >
                                                {child.subName}
                                            </p>

                                            {child.subChilds.map((subChild) => (
                                                <Link href={`/route/product/${subChild.key}`}>
                                                    <a
                                                        className={`dropdown-item text ${style.dropdownitem_left}`}
                                                        
                                                    >
                                                        {subChild.subChildName}
                                                    </a>
                                                </Link>
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
