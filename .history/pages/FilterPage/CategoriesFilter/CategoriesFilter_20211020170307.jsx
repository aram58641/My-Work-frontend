import style from "../Filter.module.scss";
import { useRouter } from "next/router";
import { FaBeer, FaAccessibleIcon } from "react-icons/fa";

export default function CategoriesFilter(props) {
    const router = useRouter();

    return (
        <>
            <div className={`${style.tProducts} p-2`}>
                <form className="d-flex mb-3 mt-1">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button
                        className={`btn btn-outline-success ${style.search_button_header}`}
                        type="submit"
                    >
                        Search
                    </button>
                </form>

                {props.productmenu
                    .filter((item) => item.key === router.query.cat)[0]
                    ?.childs.map((item) => {
                        return (
                            <div key= {item.id}>
                               
                                <div className="p-lists">
                                    <div className="d-flex justify-content-between mt-2">
                                        {" "}
                                        <span>{item.subName}</span>{" "}
                                       
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </>
    );
}
