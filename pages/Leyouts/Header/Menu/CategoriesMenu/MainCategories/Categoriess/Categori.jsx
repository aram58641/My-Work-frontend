import style from "../MainCategories.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { FaAccessibleIcon, FaBeer } from "react-icons/fa";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export default function Categori(props) {
    const router = useRouter();
    const { t } = useTranslation();

    return (
        <>
            <div className="col-md-9">
                <div className={`row g-2 ${style.container_Filter_product} `}>
                    {props.productmenu
                        .filter((item) => item.key === router.query.cat)[0]
                        ?.childs.map((item) => {
                            return (
                                <div key={item.id}>
                                    <h1 className={`${style.h1prod}`}>
                                        {t(item.subName)}
                                    </h1>

                                    <div
                                        key={item.id + "products"}
                                        className={`${style.df}`}
                                    >
                                        {item.subChilds.map((subchild) => {
                                            return (
                                                <div
                                                    className={` py-4 ${style.product} `}
                                                >
                                                    <div
                                                        className={` text-center ${style.image_cat}`}
                                                    >
                                                        <img
                                                            src={subchild.image}
                                                            width="100%"
                                                            height="150"
                                                        />{" "}
                                                        {/* <ProductsImageCarusel  image = {item.image} /> */}
                                                    </div>
                                                    <div
                                                        className={`${style.about} text-center`}
                                                    >
                                                        <h5>
                                                            {t(
                                                                subchild.subChildName
                                                            )}
                                                        </h5>{" "}
                                                        {/* <span>{item.subName}</span> */}
                                                    </div>
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
