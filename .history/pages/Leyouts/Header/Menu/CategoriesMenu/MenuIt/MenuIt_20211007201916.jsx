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

                            <ul className={`dropdown-menu ${style.dropdownmenu}`}>
                            {item.childs.map((childs)=>
                               
                                    <>
                                        <p className={`text-center fw-bold`}>{childs.subName}</p>

                                        <a className={`dropdown-item ${style.dropdownitem}`} href="#">
                                            Логотипы
                                        </a>
                                    </>
                                
                    })}
                            </ul>

                    </>
                );
            })}
           
            
        </li>
    );
}
