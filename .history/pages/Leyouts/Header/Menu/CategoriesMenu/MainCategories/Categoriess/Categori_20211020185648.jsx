import style from "../MainCategories.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { FaAccessibleIcon, FaBeer } from "react-icons/fa";
import { useRouter } from "next/router";

export default function Categori(props) {
    const router = useRouter();

    return (
        <>
            <div className="col-md-9">
                <div className={`row g-2 ${style.container_Filter_product} `}>
                    <div  className="col-md-4">
                        {props.productmenu
                            .filter((item) => item.key === router.query.cat)[0]
                            ?.childs.map((item) => {
                                return (
                                    <div key={item.id + "products"} clas>
                                        {item.subChilds.map((subchild) => {
                                            return (
                                                <div
                                                    className={` py-4 ${style.product} `}
                                                >
                                                    <div
                                                        className={`text-center ${style.image_cat}`}
                                                    >
                                                        <img
                                                            src={subchild.image}
                                                            width="200"
                                                            height="140"
                                                        />{" "}
                                                        {/* <ProductsImageCarusel  image = {item.image} /> */}
                                                    </div>
                                                    <div
                                                        className={`${style.about} text-center`}
                                                    >
                                                        <h5>
                                                            {
                                                                subchild.subChildName
                                                            }
                                                        </h5>{" "}
                                                        {/* <span>{item.subName}</span> */}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </>
    );
}
