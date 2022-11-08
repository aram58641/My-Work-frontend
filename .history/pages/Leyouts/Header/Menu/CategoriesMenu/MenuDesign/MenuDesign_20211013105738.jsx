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
                                        <div key={child.id} className={`${style.parrent}`}>
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



<Link href={"/"}>
<a
    className={`navbar-brand d-flex align-items-center`}
>
    <Image
        src={logo1}
        alt="Picture of the author"
    />
    <Image
        src={logo2}
        alt="Picture of the author"
    />
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
