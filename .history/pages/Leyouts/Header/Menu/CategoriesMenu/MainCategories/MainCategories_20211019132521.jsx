import style from "./MainCategories.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
export default function MainCategories(props) {
    return (
        <>
            <div className="container">
                <h1>News Card</h1>
                <div className="cardcontainer">
                    <div className="photo">
                        {" "}
                        <img src="https://images.pexels.com/photos/2346006/pexels-photo-2346006.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500" />
                        <div className="photos">Photos</div>
                    </div>
                    <div className="content">
                        <p className="txt4">City Lights In Newyork</p>
                        <p className="txt5">A city that never sleeps</p>
                        <p className="txt2">
                            New York, the largest city in the U.S., is an
                            architectural marvel with plenty of historic
                            monuments, magnificent buildings and countless
                            dazzling skyscrapers.
                        </p>
                    </div>
                    <div className="footer">
                        <p>
                            <a className="waves-effect waves-light btn" href="#">
                                Read More
                            </a>
                            <a id="heart">
                                <span className="like">
                                    <i className="fab fa-gratipay"></i>Like
                                </span>
                            </a>
                        </p>
                        <p className="txt3">
                            <i className="far fa-clock"></i>10 Minutes Ago{" "}
                            <span className="comments">
                                <i className="fas fa-comments"></i>45 Comments
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
