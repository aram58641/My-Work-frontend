import style from "./MainCategories.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import CategoriesFilter from "../../../../../FilterPage/CategoriesFilter/CategoriesFilter";
import PriceFilter from "../../../../../FilterPage/PriceFilter/PriceFilter";
import SellerLavelFilter from "../../../../../FilterPage/SellerLevel/SellerLevel";
import SellerActivityFilter from "../../../../../FilterPage/SellersActivity/SellersActivity";
import { FaBeer, FaAccessibleIcon } from "react-icons/fa";
import Products from "../../../../../Products/Products";
import JsonFilter from "../../../../../Json/Filter.json";
import JsonMenu from "../../../../../Json/Menu.json";
import { useRouter } from "next/router";

import Categori from "./Categories/Categori";

export default function MainCategories(props) {
    const router = useRouter();
    return (
        <>
            <div className="container-xl mt-5 mb-5">
                <div className="row g-2">
                    {/*Filter */}
                    <h1 className={`text-center text-secondary`}>
                        {router.query.cat}
                    </h1>

                    <div className={`col-md-3 ${style.backgrount_filter}`}>
                        <CategoriesFilter />
                    </div>

                    {/* Products */}

                    <Categori
                        productfilter={JsonFilter}
                        productmenu={JsonMenu}
                    />
                </div>
            </div>
        </>
    );
}
