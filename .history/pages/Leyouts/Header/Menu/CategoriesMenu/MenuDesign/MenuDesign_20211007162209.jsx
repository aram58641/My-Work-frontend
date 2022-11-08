import style from "../../../Header.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MenuDesign(props) {

    let catName = props.CategoriName;

    catName.map((item)=>{
        console.log();(item)
    })
    console.log(CategoriName);
    return (
        <li className={`dropdown-submenu ${style.dropdownsubmenu}`}>
            <a
                class="dropdown-item dropdown-toggle"
                data-toggle="dropdown"
                href="#"
            >
               {catName} 
            </a>
            <ul className={`dropdown-menu ${style.dropdownmenu}`}>
                <p className={`text-center fw-bold`}>Логотип и брендинг</p>

                <a className={`dropdown-item ${style.dropdownitem}`} href="#">
                    Логотипы
                </a>

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
                <p className={`text-center fw-bold`}>Обработка и редактирование</p>

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
