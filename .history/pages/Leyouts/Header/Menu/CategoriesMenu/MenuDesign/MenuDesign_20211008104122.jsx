import style from "../../../Header.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MenuDesign(props) {

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

                        <ul className={`dropdown-menu ${style.dropdownmenu}`}>
                            {item.childs.map((child) => {
                                return (
                                    <>
                                        <p className={`text-left  fw-bold ${}`}>
                                            {child.subName}
                                        </p>

                                        {child.subChilds.map((subChild) => (
                                            <a
                                                className={`dropdown-item text ${style.dropdownitem}`}
                                                href="#"
                                            >
                                                {subChild.subChildName}
                                            </a>
                                        ))}
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