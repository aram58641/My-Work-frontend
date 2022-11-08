import style from "../Filter.module.scss";
import { useRouter } from "next/router";
import { FaBeer, FaAccessibleIcon } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function CategoriesFilter(props) {
    const router = useRouter();
    const { t } = useTranslation();

    return (
        <>
            <div className={`${style.tProducts} p-2 mt-5`}>
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
                            <div key={item.id}>
                                <div className="p-lists">
                                    <div
                                        className={` d-flex justify-content-between  ${style.text_catCenter_title}`}
                                    >
                                        {" "}
                                        <span
                                            className={`mt-2 ${style.text_categor}`}
                                        >
                                            {t(item.subName)}
                                        </span>{" "}
                                    </div>
                                    {item.subChilds.map((subchild) => {
                                        return (
                                            <div
                                                key={item.id}
                                                className={` d-flex justify-content-between mt-2 ${style.text_catCenter}`}
                                            >
                                                <span
                                                    className={`mt-2 ${style.text_categor2}`}
                                                >
                                                    {t(subchild.subChildName)}
                                                </span>{" "}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
            </div>
        </>
    );
}
