import style from "../Filter.module.scss";

import { FaBeer, FaAccessibleIcon } from "react-icons/fa";

export default function CategoriesFilter(props) {
    
    return (
        <>



            {
                props.categoriesfilter.map((item)=>{
                   return <h1></h1>  alert(item.name);  
                })
            }

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
                        <span>Laptops</span> <span>23</span>{" "}
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                        {" "}
                        <span>Desktops</span> <span>46</span>{" "}
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                        {" "}
                        <span>Monitors</span> <span>13</span>{" "}
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                        {" "}
                        <span>Mouse</span> <span>33</span>{" "}
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                        {" "}
                        <span>Keyboard</span> <span>12</span>{" "}
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
