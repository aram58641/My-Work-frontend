import style from "./Filter.module.scss";

import { FaBeer, FaAccessibleIcon } from "react-icons/fa";
import CategoriesFilter from "./CategoriesFilter/CategoriesFilter";
import PriceFilter from "./PriceFilter/PriceFilter";
import SellerLavelFilter from "./SellerLevel/SellerLevel";

export default function Filter(params) {
    return (
        <>
            <div className="container-xl mt-5 mb-5">
                <div className="row g-2">
                    <div className={`col-md-3 ${style.backgrount_filter}`}>



                                    {/*Filter */}

                                <CategoriesFilter />
                                <PriceFilter      />
                                <SellerLavelFilter /



                       
                        <div className={`${style.brand} p-2`}>
                            <div className="heading d-flex justify-content-between align-items-center">
                                <h6 className="text-uppercase">Brand</h6>{" "}
                                <span>--</span>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <div className="form-check">
                                    {" "}
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                    />{" "}
                                    <label
                                        className="form-check-label"
                                        for="flexCheckDefault"
                                    >
                                        {" "}
                                        Apple{" "}
                                    </label>{" "}
                                </div>{" "}
                                <span>13</span>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <div className="form-check">
                                    {" "}
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckChecked"
                                        checked
                                    />{" "}
                                    <label
                                        className="form-check-label"
                                        for="flexCheckChecked"
                                    >
                                        {" "}
                                        Asus{" "}
                                    </label>{" "}
                                </div>{" "}
                                <span>4</span>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <div className="form-check">
                                    {" "}
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckChecked"
                                        checked
                                    />{" "}
                                    <label
                                        className="form-check-label"
                                        for="flexCheckChecked"
                                    >
                                        {" "}
                                        Dell{" "}
                                    </label>{" "}
                                </div>{" "}
                                <span>24</span>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <div className="form-check">
                                    {" "}
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckChecked"
                                        checked
                                    />{" "}
                                    <label
                                        className="form-check-label"
                                        for="flexCheckChecked"
                                    >
                                        {" "}
                                        Lenovo{" "}
                                    </label>{" "}
                                </div>{" "}
                                <span>18</span>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <div className="form-check">
                                    {" "}
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckChecked"
                                        checked
                                    />{" "}
                                    <label
                                        className="form-check-label"
                                        for="flexCheckChecked"
                                    >
                                        {" "}
                                        Acer{" "}
                                    </label>{" "}
                                </div>{" "}
                                <span>44</span>
                            </div>
                        </div>
                        <div className={`${style.type} mb-2`}>
                            <div className="heading d-flex justify-content-between align-items-center">
                                <h6 className="text-uppercase">Type</h6>{" "}
                                <span>--</span>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <div className="form-check">
                                    {" "}
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                    />{" "}
                                    <label
                                        className="form-check-label"
                                        for="flexCheckDefault"
                                    >
                                        {" "}
                                        Hybrid{" "}
                                    </label>{" "}
                                </div>{" "}
                                <span>23</span>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <div className="form-check">
                                    {" "}
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckChecked"
                                        checked
                                    />{" "}
                                    <label
                                        className="form-check-label"
                                        for="flexCheckChecked"
                                    >
                                        {" "}
                                        Laptop{" "}
                                    </label>{" "}
                                </div>{" "}
                                <span>24</span>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <div className="form-check">
                                    {" "}
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckChecked"
                                        checked
                                    />{" "}
                                    <label
                                        className="form-check-label"
                                        for="flexCheckChecked"
                                    >
                                        {" "}
                                        Desktop{" "}
                                    </label>{" "}
                                </div>{" "}
                                <span>14</span>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <div className="form-check">
                                    {" "}
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckChecked"
                                        checked
                                    />{" "}
                                    <label
                                        className="form-check-label"
                                        for="flexCheckChecked"
                                    >
                                        {" "}
                                        Touch{" "}
                                    </label>{" "}
                                </div>{" "}
                                <span>28</span>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <div className="form-check">
                                    {" "}
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckChecked"
                                        checked
                                    />{" "}
                                    <label
                                        className="form-check-label"
                                        for="flexCheckChecked"
                                    >
                                        {" "}
                                        Tablets{" "}
                                    </label>{" "}
                                </div>{" "}
                                <span>44</span>
                            </div>
                        </div>
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
