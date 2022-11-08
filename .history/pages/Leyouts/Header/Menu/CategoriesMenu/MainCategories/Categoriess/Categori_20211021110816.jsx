import style from "../MainCategories.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { FaAccessibleIcon, FaBeer } from "react-icons/fa";
import { useRouter } from "next/router";

export default function Categori(props) {
    const router = useRouter();

    return (
        <>
            <div className="wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div
                                className="card text-white card-has-bg click-col"
                            >
                                <img
                                    className="card-img d-none"
                                    src="https://source.unsplash.com/600x900/?tech,street"
                                    alt="Goverment Lorem Ipsum Sit Amet Consectetur dipisi?"
                                />
                                <div className="card-img-overlay d-flex flex-column">
                                    <div className="card-body">
                                        <small className="card-meta mb-2">
                                            Thought Leadership
                                        </small>
                                        <h4 className="card-title mt-0 ">
                                            <a className="text-white" herf="#">
                                                Goverment Lorem Ipsum Sit Amet
                                                Consectetur dipisi?
                                            </a>
                                        </h4>
                                        <small>
                                            <i className="far fa-clock"></i> October
                                            15, 2020
                                        </small>
                                    </div>
                                    <div className="card-footer">
                                        <div className="media">
                                            <img
                                                className="mr-3 rounded-circle"
                                                src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/male-512.png"
                                                alt="Generic placeholder image"
                                                                            />
                                            <div className="media-body">
                                                <h6 className="my-0 text-white d-block">
                                                    Oz COruhlu
                                                </h6>
                                                <small>Director of UI/UX</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div
                                className="card text-white card-has-bg click-col"
                            >
                                <img
                                    className="card-img d-none"
                                    src="https://source.unsplash.com/600x900/?tree,nature"
                                    alt="Goverment Lorem Ipsum Sit Amet Consectetur dipisi?"
                                />
                                <div className="card-img-overlay d-flex flex-column">
                                    <div className="card-body">
                                        <small className="card-meta mb-2">
                                            Thought Leadership
                                        </small>
                                        <h4 className="card-title mt-0 ">
                                            <a className="text-white" herf="#">
                                                Goverment Lorem Ipsum Sit Amet
                                                Consectetur dipisi?
                                            </a>
                                        </h4>
                                        <small>
                                            <i className="far fa-clock"></i> October
                                            15, 2020
                                        </small>
                                    </div>
                                    <div className="card-footer">
                                        <div className="media">
                                            <img
                                                className="mr-3 rounded-circle"
                                                src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/male-512.png"
                                                alt="Generic placeholder image"
                                                                            />
                                            <div className="media-body">
                                                <h6 className="my-0 text-white d-block">
                                                    Oz COruhlu
                                                </h6>
                                                <small>Director of UI/UX</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div
                                className="card text-white card-has-bg click-col"
                            />
                            <img
                                className="card-img d-none"
                                src="https://source.unsplash.com/600x900/?computer,design"
                                alt="Goverment Lorem Ipsum Sit Amet Consectetur dipisi?"
                            />
                            <div className="card-img-overlay d-flex flex-column">
                                <div className="card-body">
                                    <small className="card-meta mb-2">
                                        Thought Leadership
                                    </small>
                                    <h4 className="card-title mt-0 ">
                                        <a className="text-white" herf="#">
                                            Goverment Lorem Ipsum Sit Amet
                                            Consectetur dipisi?
                                        </a>
                                    </h4>
                                    <small>
                                        <i className="far fa-clock"></i> October 15,
                                        2020
                                    </small>
                                </div>
                                <div className="card-footer">
                                    <div className="media">
                                        <img
                                            className="mr-3 rounded-circle"
                                            src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/male-512.png"
                                            alt="Generic placeholder image"
                                                                    />
                                        <div className="media-body">
                                            <h6 className="my-0 text-white d-block">
                                                Oz COruhlu
                                            </h6>
                                            <small>Director of UI/UX</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// <div className="col-md-9">
// <div className={`row g-2 ${style.container_Filter_product} `}>
//     {props.productmenu
//         .filter((item) => item.key === router.query.cat)[0]
//         ?.childs.map((item) => {
//             return (
//                 <div
//                     key={item.id + "products"}
//                     className={`${style.df}`}
//                 >
//                     {item.subChilds.map((subchild) => {
//                         return (
//                             <div
//                                 className={` py-4 ${style.product} `}
//                             >
//                                 <div
//                                     className={` text-center ${style.image_cat}`}
//                                 >
//                                     <img
//                                         src={subchild.image}
//                                         width="200"
//                                         height="140"
//                                     />{" "}
//                                     {/* <ProductsImageCarusel  image = {item.image} /> */}
//                                 </div>
//                                 <div
//                                     className={`${style.about} text-center`}
//                                 >
//                                     <h5>{subchild.subChildName}</h5>{" "}
//                                     {/* <span>{item.subName}</span> */}
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </div>
//             );
//         })}
// </div>
// </div>
