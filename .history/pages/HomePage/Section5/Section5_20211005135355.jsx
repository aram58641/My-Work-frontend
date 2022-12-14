import style from "./Section5.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Section6() {
    return (
        <>
            <div className="container-xl">
                <div
                    className={`d-flex align-items-center ${style.big_section_5_box}`}
                >
                    <div className={`row ${style.mediaInText_section5}`}>
                        <div className="col-lg-7">
                            <p className={`text-left fs-6 fw-bold mt-2`}>
                                Effortless Validation for
                            </p>
                            <h2 className={`text-left fs-3 fw-bold mt-1`}>
                                Management
                            </h2>
                            <p
                                className={`text-left  fw-normal mt-4 ${style.section_5_text}`}
                            >
                                The Myspace page defines the individual, his or
                                her characteristics, traits, personal choices
                                and the overall personality of the person.
                            </p>
                            <h4 className={`text-left fs-6 fw-bold mt-2`}>
                                Accessory makers
                            </h4>
                            <p
                                className={`text-left  fw-normal mt-4 ${style.section_5_text}`}
                            >
                                While most people enjoy casino gambling, sports
                                betting, lottery and bingo playing for the fun
                            </p>
                            <h4 className={`text-left fs-6 fw-bold mt-2`}>
                                Alterationists
                            </h4>
                            <p
                                className={`text-left  fw-normal mt-4 ${style.section_5_text}`}
                            >
                                If you are looking for a new way to promote your
                                business that won???t cost you more money,{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
