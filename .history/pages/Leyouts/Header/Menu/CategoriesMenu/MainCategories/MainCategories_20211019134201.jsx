import style from "./MainCategories.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
export default function MainCategories(props) {
    return (
        <>
            <div className="container-fluid mt-3 mb-3">
                <div className={`row g-2 ${style.bigBoxCategories}`}>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="img-container">
                                <div className="d-flex justify-content-between align-items-center p-2 first">
                                    {" "}
                                    <span className="percent">-25%</span>{" "}
                                    <span className="wishlist">
                                        <i className="fa fa-heart"></i>
                                    </span>{" "}
                                </div>{" "}
                                <img
                                    src="https://i.imgur.com/zS03HnV.jpg"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="product-detail-container">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6 className="mb-0">Long sleev shirt</h6>{" "}
                                    <span className="text-danger font-weight-bold">
                                        $3.99
                                    </span>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mt-2">
                                    <div className="ratings">
                                        {" "}
                                        <i className="fa fa-star"></i>{" "}
                                        <span>4.5</span>{" "}
                                    </div>
                                    <div className="size">
                                        {" "}
                                        <label className="radio">
                                            {" "}
                                            <input
                                                type="radio"
                                                name="size1"
                                                value="small"
                                            />{" "}
                                            <span>S</span>{" "}
                                        </label>{" "}
                                        <label className="radio">
                                            {" "}
                                            <input
                                                type="radio"
                                                name="size1"
                                                value="Medium"
                                                checked
                                            />{" "}
                                            <span>M</span>{" "}
                                        </label>{" "}
                                        <label className="radio">
                                            {" "}
                                            <input
                                                type="radio"
                                                name="size1"
                                                value="Large"
                                            />{" "}
                                            <span>L</span>{" "}
                                        </label>{" "}
                                    </div>
                                </div>
                                <div className="mt-3">
                                    {" "}
                                    <button className="btn btn-danger btn-block">
                                        Buy Now
                                    </button>{" "}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="img-container">
                                <div className="d-flex justify-content-between align-items-center p-2 first">
                                    {" "}
                                    <span className="percent">-15%</span>{" "}
                                    <span className="wishlist">
                                        <i className="fa fa-heart"></i>
                                    </span>{" "}
                                </div>{" "}
                                <img
                                    src="https://i.imgur.com/gGyOciQ.jpg"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="product-detail-container">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6 className="mb-0">Black top caps</h6>{" "}
                                    <span className="text-danger font-weight-bold">
                                        $1.99
                                    </span>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mt-2">
                                    <div className="ratings">
                                        {" "}
                                        <i className="fa fa-star"></i>{" "}
                                        <span>4.5</span>{" "}
                                    </div>
                                    <div className="size">
                                        {" "}
                                        <label className="radio">
                                            {" "}
                                            <input
                                                type="radio"
                                                name="size2"
                                                value="small"
                                            />{" "}
                                            <span>S</span>{" "}
                                        </label>{" "}
                                        <label className="radio">
                                            {" "}
                                            <input
                                                type="radio"
                                                name="size2"
                                                value="Medium"
                                                checked
                                            />{" "}
                                            <span>M</span>{" "}
                                        </label>{" "}
                                        <label className="radio">
                                            {" "}
                                            <input
                                                type="radio"
                                                name="size2"
                                                value="Large"
                                            />{" "}
                                            <span>L</span>{" "}
                                        </label>{" "}
                                    </div>
                                </div>
                                <div className="mt-3">
                                    {" "}
                                    <button className="btn btn-danger btn-block">
                                        Buy Now
                                    </button>{" "}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="img-container">
                                <div className="d-flex justify-content-between align-items-center p-2 first">
                                    {" "}
                                    <span className="percent">-35%</span>{" "}
                                    <span className="wishlist">
                                        <i className="fa fa-heart"></i>
                                    </span>{" "}
                                </div>{" "}
                                <img
                                    src="https://i.imgur.com/3VuD1Ij.jpg"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="product-detail-container">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6 className="mb-0">Kiton sui suit</h6>{" "}
                                    <span className="text-danger font-weight-bold">
                                        $3.99
                                    </span>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mt-2">
                                    <div className="ratings">
                                        {" "}
                                        <i className="fa fa-star"></i>{" "}
                                        <span>4.5</span>{" "}
                                    </div>
                                    <div className="size">
                                        {" "}
                                        <label className="radio">
                                            {" "}
                                            <input
                                                type="radio"
                                                name="size3"
                                                value="small"
                                            />{" "}
                                            <span>S</span>{" "}
                                        </label>{" "}
                                        <label className="radio">
                                            {" "}
                                            <input
                                                type="radio"
                                                name="size3"
                                                value="Medium"
                                                checked
                                            />{" "}
                                            <span>M</span>{" "}
                                        </label>{" "}
                                        <label className="radio">
                                            {" "}
                                            <input
                                                type="radio"
                                                name="size3"
                                                value="Large"
                                            />{" "}
                                            <span>L</span>{" "}
                                        </label>{" "}
                                    </div>
                                </div>
                                <div className="mt-3">
                                    {" "}
                                    <button className="btn btn-danger btn-block">
                                        Buy Now
                                    </button>{" "}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="img-container">
                                <div className="d-flex justify-content-between align-items-center p-2 first">
                                    {" "}
                                    <span className="percent">-25%</span>{" "}
                                    <span className="wishlist">
                                        <i className="fa fa-heart"></i>
                                    </span>{" "}
                                </div>{" "}
                                <img
                                    src="https://i.imgur.com/psvQPza.jpg"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="product-detail-container">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6 className="mb-0">Long red shirt</h6>{" "}
                                    <span className="text-danger font-weight-bold">
                                        $4.99
                                    </span>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mt-2">
                                    <div className="ratings">
                                        {" "}
                                        <i className="fa fa-star"></i>{" "}
                                        <span>4.5</span>{" "}
                                    </div>
                                    <div className="size">
                                        {" "}
                                        <label className="radio">
                                            {" "}
                                            <input
                                                type="radio"
                                                name="size4"
                                                value="small"
                                            />{" "}
                                            <span>S</span>{" "}
                                        </label>{" "}
                                        <label className="radio">
                                            {" "}
                                            <input
                                                type="radio"
                                                name="size4"
                                                value="Medium"
                                                checked
                                            />{" "}
                                            <span>M</span>{" "}
                                        </label>{" "}
                                        <label className="radio">
                                            {" "}
                                            <input
                                                type="radio"
                                                name="size4"
                                                value="Large"
                                            />{" "}
                                            <span>L</span>{" "}
                                        </label>{" "}
                                    </div>
                                </div>
                                <div className="mt-3">
                                    {" "}
                                    <button className="btn btn-danger btn-block">
                                        Buy Now
                                    </button>{" "}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="img-container">
                                <div className="d-flex justify-content-between align-items-center p-2 first">
                                    {" "}
                                    <span className="percent">-25%</span>{" "}
                                    <span className="wishlist">
                                        <i className="fa fa-heart"></i>
                                    </span>{" "}
                                </div>{" "}
                                <img
                                    src="https://i.imgur.com/5l1bL3Y.jpg"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="product-detail-container">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6 className="mb-0">Long black t-shirt</h6>{" "}
                                    <span className="text-danger font-weight-bold">
                                        $3.99
                                    </span>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mt-2">
                                    <div className="ratings">
                                        {" "}
                                        <i className="fa fa-star"></i>{" "}
                                        <span>4.5</span>{" "}
                                    </div>
                                    <div className="size">
                                        {" "}
                                        <label className="radio">
                                            {" "}
                                            <input
                                                type="radio"
                                                name="size5"
                                                value="small"
                                            />{" "}
                                            <span>S</span>{" "}
                                        </label>{" "}
                                        <label className="radio">
                                            {" "}
                                            <input
                                                type="radio"
                                                name="size5"
                                                value="Medium"
                                                checked
                                            />{" "}
                                            <span>M</span>{" "}
                                        </label>{" "}
                                        <label className="radio">
                                            {" "}
                                            <input
                                                type="radio"
                                                name="size5"
                                                value="Large"
                                            />{" "}
                                            <span>L</span>{" "}
                                        </label>{" "}
                                    </div>
                                </div>
                                <div className="mt-3">
                                    {" "}
                                    <button className="btn btn-danger btn-block">
                                        Buy Now
                                    </button>{" "}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="img-container">
                                <div className="d-flex justify-content-between align-items-center p-2 first">
                                    {" "}
                                    <span className="percent">-25%</span>{" "}
                                    <span className="wishlist">
                                        <i className="fa fa-heart"></i>
                                    </span>{" "}
                                </div>{" "}
                                <img
                                    src="https://i.imgur.com/9StAn6x.jpg"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="product-detail-container">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6 className="mb-0">TINONG white specs</h6>{" "}
                                    <span className="text-danger font-weight-bold">
                                        $3.99
                                    </span>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mt-2">
                                    <div className="ratings">
                                        {" "}
                                        <i className="fa fa-star"></i>{" "}
                                        <span>4.5</span>{" "}
                                    </div>
                                    <div className="size">
                                        {" "}
                                        <label className="radio">
                                            {" "}
                                            <input
                                                type="radio"
                                                name="size6"
                                                value="small"
                                            />{" "}
                                            <span>S</span>{" "}
                                        </label>{" "}
                                        <label className="radio">
                                            {" "}
                                            <input
                                                type="radio"
                                                name="size6"
                                                value="Medium"
                                                checked
                                            />{" "}
                                            <span>M</span>{" "}
                                        </label>{" "}
                                        <label className="radio">
                                            {" "}
                                            <input
                                                type="radio"
                                                name="size6"
                                                value="Large"
                                            />{" "}
                                            <span>L</span>{" "}
                                        </label>{" "}
                                    </div>
                                </div>
                                <div className="mt-3">
                                    {" "}
                                    <button className="btn btn-danger btn-block">
                                        Buy Now
                                    </button>{" "}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
