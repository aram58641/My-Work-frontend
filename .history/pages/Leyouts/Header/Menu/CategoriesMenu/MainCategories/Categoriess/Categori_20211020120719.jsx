import style from "../MainCategories.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { FaAccessibleIcon, FaBeer } from "react-icons/fa";

export default function Categori(props) {
    return (
        <>
            <div className="col-md-9">
                <div className={`row g-2 ${style.container_Filter_product} `}>
                    {props.productmenu.map((item) => {
                        return (
                            <div
                                key={item.id + "products"}
                                className="col-md-4"
                            >
                                {/*  */}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
