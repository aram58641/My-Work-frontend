import style from "./MainCategories.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import CategoriesFilter from "../../../../../FilterPage/CategoriesFilter/CategoriesFilter";
import PriceFilter from "../../../../../FilterPage/PriceFilter/PriceFilter";
import SellerLavelFilter from "../../../../../FilterPage/SellerLevel/SellerLevel";
import SellerActivityFilter from "../../../../../FilterPage/SellersActivity/SellersActivity";
import { FaBeer, FaAccessibleIcon } from "react-icons/fa";
import Products from "../../../../../Products/Products";
import JsonProduct from "../../../../../Json/Products.json";
import JsonMenu from "../../../../../Json/Menu.json";
import { useRouter } from "next/router";

import Categori from "./Categoriess/Categori";

export default function MainCategories(props) {
    const router = useRouter();
    return (
        <>
            <div className="container-xl mt-5 mb-5">
                <div className="row g-2">
                    {/*Filter */}
                    {Jsonmenu.filter(
                        (item) => item.key === router.query.cat
                    )[0]?.map((item) => {
                        console.log(item);
                        return (
                            <h1 className={`text-center text-secondary`}>
                                {item.name}
                            </h1>
                        );
                    })}

                    <div className={`col-md-3 ${style.backgrount_filter}`}>
                        <CategoriesFilter productmenu={JsonMenu} />
                    </div>

                    {/* Products */}

                    <Categori
                        JsonProduct={JsonProduct}
                        productmenu={JsonMenu}
                    />
                </div>
            </div>
        </>
    );
}
