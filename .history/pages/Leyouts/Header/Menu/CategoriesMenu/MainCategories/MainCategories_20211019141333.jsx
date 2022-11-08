import style from "./MainCategories.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import MainCategoriesFilter from "./MainCategoriesFilter/MainCategoriesFilter";
export default function MainCategories(props) {
    return (
        <>
            <div className="container-xl mt-5 mb-5">
                <div className="row g-2">
                    {/*Filter */}

                    <div className={`col-md-3 ${style.backgrount_filter}`}>
                        <MainCategoriesFilter />
                        
                    </div>

                    {/* Products */}
                        sdadasd
                    
                </div>
            </div>
        </>
    );
}
