import style from "../../../Header.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
export default function MenuIt(props) {
    return (
        <li className={`dropdown-submenu ${style.dropdownsubmenu}`}>
            {props.CategoriName.map((item) => {
                return (
                    <>
                        
                        <Link href={`/categoriesPage/${item.key}`} key={item}>
                            <a
                                className="dropdown-item dropdown-toggle"
                                data-toggle="dropdown"
                            >
                                {item.name}
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
                                                <a
                                                    className={`dropdown-item text ${style.dropdownitem_left}`}
                                                    href="#"
                                                >
                                                    {subChild.subChildName}
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
