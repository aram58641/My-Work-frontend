import style from "../Header.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export function Menu() {
    return (
        <div className={`d-flex justify-content-end ${style.Menu_item_margin}`}>
            <div
                className={`collapse navbar-collapse  `}
                id="navbarSupportedContent"
            >
                <ul
                    className={`navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center ${style.ulLi}`}
                >

<li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
                      
                     
                </ul>
            </div>
        </div>
    );
}
