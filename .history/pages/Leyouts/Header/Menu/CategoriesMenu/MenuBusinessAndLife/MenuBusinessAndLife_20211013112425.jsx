import style from "../../../Header.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MenuBusinessAndLife(props) {
    return (
        <li className={`dropdown-submenu ${style.dropdownsubmenu}`}>
            {props.CategoriName.map((item) => {
                return (
                    <>
                        <a
                            class="dropdown-item dropdown-toggle"
                            data-toggle="dropdown"
                            href="#"
                        >
                            {item.name}
                        </a>

                        <ul
                            className={`dropdown-menu ${style.dropdownmenubusiness}`}
                        >
                            {item.childs.map((child) => {
                                return (
                                    <>
                                        <div
                                            key={child.id}
                                            className={`${style.parrentbusiness}`}
                                        >
                                            <p
                                                className={`text-left  fw-bold ${style.padding_menu_title}`}
                                            >
                                                {child.subName}
                                            </p>

                                            {child.subChilds.map((subChild) => (
                                                <Link
                                                href={`/categories/${subChild.key}`}
                                            >
                                                <a
                                                    className={`dropdown-item text ${style.dropdownitem_left}`}
                                                    href="#"
                                                >
                                                    {subChild.subChildName}
                                                </a>
                                                </
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
