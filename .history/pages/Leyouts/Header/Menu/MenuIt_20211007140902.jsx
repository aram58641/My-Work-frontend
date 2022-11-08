import style from "../Header.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Json from '../../../Json/s.json';



export default function MenuIt() {
    console.log("Jsaasdsdasdon");
    return (
        <li className={`dropdown-submenu ${style.dropdownsubmenu}`}>
          
            <a
                class="dropdown-item dropdown-toggle"
                data-toggle="dropdown"
                href="#"
            >
                Разработка и IT
            </a>
            <ul className={`dropdown-menu ${style.dropdownmenu}`}>
                <a className={`dropdown-item ${style.dropdownitem}`} href="#">
                    Логотипы
                </a>
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
                <a className={`dropdown-item ${style.dropdownitem}`} href="#">
                    Веб-дизайн
                </a>
                <a className={`dropdown-item ${style.dropdownitem}`} href="#">
                    Мобильный дизайн
                </a>
                <a className={`dropdown-item ${style.dropdownitem}`} href="#">
                    Дизайн в соцсетях
                </a>
                <a className={`dropdown-item ${style.dropdownitem}`} href="#">
                    Отрисовка в векторе
                </a>
                <a className={`dropdown-item ${style.dropdownitem}`} href="#">
                    Фотомонтаж и обработка
                </a>
                <a className={`dropdown-item ${style.dropdownitem}`} href="#">
                    3D-графика
                </a>
                <a className={`dropdown-item ${style.dropdownitem}`} href="#">
                    Интерьер
                </a>
                <a className={`dropdown-item ${style.dropdownitem}`} href="#">
                    Дизайн домов и сооружений
                </a>
                <a className={`dropdown-item ${style.dropdownitem}`} href="#">
                    Готовые шаблоны и рисунки
                </a>
            </ul>
        </li>
    );
}
