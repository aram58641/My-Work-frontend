import style from "../../../Header.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MenuIt(props) {
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

                    </>
                );
            })}
           
            
        </li>
    );
}
