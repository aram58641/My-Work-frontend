import style from "./Filter.module.scss";

import { FaBeer, FaAccessibleIcon } from "react-icons/fa";
import CategoriesFilter from "./CategoriesFilter/CategoriesFilter";
import PriceFilter from "./PriceFilter/PriceFilter";
import SellerLavelFilter from "./SellerLevel/SellerLevel";
import SellerActivityFilter from "./SellersActivity/SellersActivity";

export default function Filter(params) {
    return (
        <>
            <div className="container-xl mt-5 mb-5">
                <div className="row g-2">
                    {/*Filter */}

                    <div className={`col-md-3 ${style.backgrount_filter}`}>
                        <CategoriesFilter />
                        <PriceFilter />
                        <SellerLavelFilter />
                        <SellerActivityFilter />
                    </div>


                    

                    <div className="col-md-9">
                        <div className="row g-2">
                            <div className="col-md-4">
                                <div className={`${style.product} py-4`}>
                                    {" "}
                                    <span
                                        className={`${style.off}  bg-success`}
                                    >
                                        -25% OFF
                                    </span>
                                    <div className="text-center">
                                        {" "}
                                        <img
                                            src="https://i.imgur.com/nOFet9u.jpg"
                                            width="200"
                                        />{" "}
                                    </div>
                                    <div
                                        className={`${style.about} text-center`}
                                    >
                                        <h5>XRD Active Shoes</h5>{" "}
                                        <span>$1,999.99</span>
                                    </div>
                                    <div
                                        className={`${style.cartButton} mt-3 px-2 d-flex justify-content-between align-items-center`}
                                    >
                                        {" "}
                                        <button className="btn btn-primary text-uppercase">
                                            Add to cart
                                        </button>
                                        <div className="add">
                                            {" "}
                                            <span
                                                className={`${style.product_fav}`}
                                            >
                                                <FaAccessibleIcon className="fa fa-heart-o"></FaAccessibleIcon>
                                            </span>{" "}
                                            <span
                                                className={`${style.product_fav}`}
                                            >
                                                <FaBeer className="fa fa-opencart"></FaBeer>
                                            </span>{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
