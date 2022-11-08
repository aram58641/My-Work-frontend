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
                                <div
                                    key={item.id + "products"}
                                    className="col-md-4"
                                >
{item.subChilds.map((subchild) => {
                                        return (
                                           
                                        );
                                    })}

                                   

                                </div>
                            );
                        })}
                </div>
            </div>
        </>
    );
}
