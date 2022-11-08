import style from "../../../Header.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MenuDesign(props) {




    {props.CategoriName.map((item) => {
    })}







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
                                    <p className={`text-center fw-bold`}>{child.subName}</p>


                                {}
                                    
                                    <a className={`dropdown-item text ${style.dropdownitem}`} href="#">
                                    a
                                    </a>  
                                </>
                                
                            );
                        })}
                        </ul>
                    </>
                );
            })}

            <ul className={`dropdown-menu ${style.dropdownmenu}`}>

            {props.CategoriName.map((item) => {
                return (
                    <>
                        <p className={`text-center fw-bold`}>s</p>

                        
                        <a className={`dropdown-item text ${style.dropdownitem}`} href="#">
                           a
                        </a>  
                    </>
                    
                );
            })}









                <p className={`text-center fw-bold`}>Арт и иллюстрации</p>

                <a className={`dropdown-item ${style.dropdownitem}`} href="#">
                    Дизайн игр
                </a>
                <a className={`dropdown-item ${style.dropdownitem}`} href="#">
                    Тату, принты
                </a>
                <a className={`dropdown-item ${style.dropdownitem}`} href="#">
                    Стикеры
                </a>
                <a className={`dropdown-item ${style.dropdownitem}`} href="#">
                    Готовые шаблоны и рисунки
                </a>
                <p className={`text-center fw-bold`}>Веб и мобильный дизайн</p>
                <a className={`dropdown-item ${style.dropdownitem}`} href="#">
                    Веб-дизайн
                </a>
                <a className={`dropdown-item ${style.dropdownitem}`} href="#">
                    Мобильный дизайн
                </a>
                <a className={`dropdown-item ${style.dropdownitem}`} href="#">
                    Дизайн в соцсетях
                </a>
                <p className={`text-center fw-bold`}>
                    Обработка и редактирование
                </p>

                <a className={`dropdown-item ${style.dropdownitem}`} href="#">
                    Отрисовка в векторе
                </a>
                <a className={`dropdown-item ${style.dropdownitem}`} href="#">
                    Фотомонтаж и обработка
                </a>
                <a className={`dropdown-item ${style.dropdownitem}`} href="#">
                    3D-графика
                </a>

                <p className={`text-center fw-bold`}>Интерьер и экстерьер</p>

                <a className={`dropdown-item ${style.dropdownitem}`} href="#">
                    Интерьер
                </a>
                <a className={`dropdown-item ${style.dropdownitem}`} href="#">
                    Дизайн домов и сооружений
                </a>
                <a className={`dropdown-item ${style.dropdownitem}`} href="#">
                    Дизайн мебели
                </a>
            </ul>
        </li>
    );
}