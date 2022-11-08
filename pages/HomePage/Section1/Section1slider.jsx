import React from "react";
import style from "./Section1.module.scss";

export default function SliderSection1() {
    return(
        <>
         <div 
                    id="carouselExampleFade"
                    className= {`carousel slide carousel-fade w-100 `}
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src="https://www.roberthalf.com/sites/default/files/2020-06/digital-portfolio-rh.jpg"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://images.ctfassets.net/u0haasspfa6q/4yyEmAaG4VPWbwbeWqvp83/da8e1f92c113ab5bb314fd0052e94852/rawpixel-196509-unsplash"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://www.roberthalf.com/sites/default/files/2020-06/digital-portfolio-rh.jpg"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleFade"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleFade"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
        </>
    )
}