import style from "./Filter.module.scss";

import { FaBeer, FaAccessibleIcon } from "react-icons/fa";
import CategoriesFilter from "./CategoriesFilter/CategoriesFilter";
import PriceFilter from "./PriceFilter/PriceFilter";
import SellerLavelFilter from "./SellerLevel/SellerLevel";
import SellerActivityFilter from "./SellersActivity/SellersActivity";
import Products from "../Products/Products";
import JsonProduct from "../Json/Categories.json";


export default function Filter(params) {



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
