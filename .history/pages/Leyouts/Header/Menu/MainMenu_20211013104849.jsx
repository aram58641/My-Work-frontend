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
                    <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button classNameName="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">
                            About Me
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
            
        </div>
        
    );
}
