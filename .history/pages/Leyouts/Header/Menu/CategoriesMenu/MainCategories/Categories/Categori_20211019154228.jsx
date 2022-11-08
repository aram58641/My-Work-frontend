import style from "../MainCategories.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { FaAccessibleIcon, FaBeer } from "react-icons/fa";

export default function Categori(props) {
    return (
        <>
            <div className="col-md-9">
                <div className={`row g-2 ${style.container_Filter_product} `}>
                    {props.productfilter.map((item) => {
                        return (
                            <div
                                key={item.id + "products"}
                                className="col-md-4"
                            >
                                <div className={` py-4 ${style.product} `}>
                                    <div className="text-center">
                                        <img src={item.image} width="200" />{" "}
                                        {/* <ProductsImageCarusel  image = {item.image} /> */}
                                    </div>

                                    {props.productmenu.map((menu) => {
                                        return (
                                            <div
                                                className={`${style.about} text-center`}
                                            >
                                                <h5>{item.image}</h5>{" "}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
