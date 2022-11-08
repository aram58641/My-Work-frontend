import style from "./MainCategories.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import CategoriesFilter from "../../../../../FilterPage/CategoriesFilter/CategoriesFilter";
import PriceFilter from "../../../../../FilterPage/PriceFilter/PriceFilter";
import SellerLavelFilter from "../../../../../FilterPage/SellerLevel/SellerLevel";
import SellerActivityFilter from "../../../../../FilterPage/SellersActivity/SellersActivity";
import { FaBeer, FaAccessibleIcon } from "react-icons/fa";

import JsonProduct from "../Json/Filter.json";




export default function MainCategories(props) {
    return (
        <>
 <div className="container-xl mt-5 mb-5">
                <div className="row g-2">
                    {/*Filter */}

                    <div className={`col-md-3 ${style.backgrount_filter}`}>
                        <CategoriesFilter />
                        <PriceFilter   />
                        <SellerLavelFilter />
                        <SellerActivityFilter />
                    </div>

                    {/* Products */}

                    <Products productfilter = {JsonProduct}  />
                </div>
            </div>
         
        </>
    );
}
