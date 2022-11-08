import style from "./Products.module.scss";

import { FaBeer, FaAccessibleIcon } from "react-icons/fa";

export default function Products(props) {
    return (
        <>

       
            <div className="col-md-9">
                <div className="row g-2 ">
                    {props.productfilter.map((item) => {
                        return (
                            <div  key={item.id + "products"} className="col-md-4">
                                <div
                                   
                                    className={` py-4 ${style.product} `}
                                >
                                    <span
                                        className={`${style.off}  bg-success text-dark`}
                                    >
                                        {item.rating + "%"}  
                                    </span>
                                    <div className="text-center">
                                        <img
                                            src={item.image}
                                            width="200"
                                        />{" "}
                                    </div>
                                    <div
                                        className={`${style.about} text-center`}
                                    >
                                        <h5>{item.nameproduct}</h5>{" "}
                                        <span>{item.price}$</span>
                                    </div>
                                    <div
                                        className={`${style.cartButton} mt-3 px-2 d-flex justify-content-between align-items-center`}
                                    >
                                        <button className="btn btn-primary text-uppercase">
                                            Add to cart
                                        </button>
                                        <div className="add">
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
                        );
                    })}
                </div>
            </div>
        </>
    );
}
