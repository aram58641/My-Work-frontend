import style from "./Section3.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Image from "next/dist/client/image";

export default function Section2() {
    const [product, SetProduct] = useState([
        {
            id: 1,
            image: icon1,
            title: "First click tests",
            text: "While most people enjoy casino gambling,",
        },
        {
            id: 2,
            image: icon2,
            title: "Design surveys",
            text: "Sports betting, lottery and bingo playing for the fun",
        },
        {
            id: 3,
            image: icon3,
            title: "Preference tests",
            text: "The Myspace page defines the individual.",
        },
        {
            id: 4,
            image: icon4,
            title: "Five second tests",
            text: "Personal choices and the overall personality of the person. ",
        },
    ]);
    return (
        <>
            <div className={style.big_section_2_box}>
                <div className="container-xl">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <h2 className={`text-center fw-bold fs-2 mt-5`}>
                                Product was Built Specifically for You
                            </h2>
                        </div>
                    </div>

                    <div className="row">
                        {product.map((prodItem) => {
                            return (
                                <div
                                    key={prodItem.id + "-section2"}
                                    className={`col-sm-3 mt-5 bg-white text-left ${style.Section2_boxes}`}
                                >
                                    <Image
                                        className={`mt-2`}
                                        src={prodItem.image}
                                        alt="Picture of the author"
                                    />
                                    <h2 className={`mt-2`}>{prodItem.title}</h2>
                                    <p className={`mt-2`}>{prodItem.text}</p>
                                </div>
                            );
                        })}

                        <form action="">
                            <div className={`d-flex justify-content-center`}>
                                <button
                                    className={`btn  ${style.btn_section2} mt-2 `}
                                >
                                    SignUpNew
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
