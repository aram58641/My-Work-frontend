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
                    <form class="d-flex">
                        <input
                            class="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button classN="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">
                            Home
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">
                            About Me
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
            
        </div>
        
    );
}
