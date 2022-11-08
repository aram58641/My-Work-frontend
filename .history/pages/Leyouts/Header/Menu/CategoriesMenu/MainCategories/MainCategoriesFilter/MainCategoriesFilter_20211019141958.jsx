import style from "../MainCategories.module.scss";

import { FaBeer, FaAccessibleIcon } from "react-icons/fa";

export default function MainCategoriesFilter(props) {
    
    return (
        <>

            <div className={`${style.tProducts} p-2`}>
                <form className="d-flex mb-3 mt-1">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button
                        className={`btn btn-outline-success ${style.search_button_header}`}
                        type="submit"
                    >
                        Search
                    </button>
                </form>

                <h6 className="text-uppercase">Computer Periferals</h6>
                <div className="p-lists">
                    <div className="d-flex justify-content-between mt-2">
                        {" "}
                        <span>Laptops</span> 
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                        {" "}
                        <span>Desktops</span> 
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                        {" "}
                        <span>Monitors</span> 
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                        {" "}
                        <span>Mouse</span> 
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                        {" "}
                        <span>Keyboard</span> 
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                        {" "}
                        <span>Printer</span> 
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                        {" "}
                        <span>Printer</span> <span>53</span>{" "}
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                        {" "}
                        <span>Printer</span> <span>53</span>{" "}
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                        {" "}
                        <span>Mobiles</span> <span>203</span>{" "}
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                        {" "}
                        <span>CPU</span> <span>23</span>{" "}
                    </div>
                </div>
            </div>
        </>
    );
}
