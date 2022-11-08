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
                    {props.productmenu
                        .filter((item) => item.key === router.query.cat)[0]
                        ?.childs.map((item) => {
                          
                            return (
                                <div  key={item.id + "products"} className={`${style.card_box_categori} col-md-4`}>
                                <div
                                   
                                    className={` py-4 ${style.product} `}
                                >
                                 
                                    <div className={`text-center ${style.image_cat}`}>
                                                <img
                                                    src={item.image}
                                                    width="200"
                                                    height="120"
                                                />{" "}

                                                {/* <ProductsImageCarusel  image = {item.image} /> */}
                                    </div>
                                    <div
                                        className={`${style.about} text-center`}
                                    >
                                        <h5>{item.nameproduct}</h5>{" "}
                                        <span>{item.subName}</span>
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
