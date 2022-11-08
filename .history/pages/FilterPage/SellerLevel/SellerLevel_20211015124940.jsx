import style from "../Filter.module.scss";

import { FaBeer, FaAccessibleIcon } from "react-icons/fa";

export default function SellerLavelFilter(params) {
    return (
        <>
            <div className={`${style.brand} p-2`}>
                            <div className="heading d-flex justify-content-between align-items-center">
                                <h6 className="text-uppercase">Brand</h6>{" "}
                                <span>--</span>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <div className="form-check">
                                    {" "}
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                    />{" "}
                                    <label
                                        className="form-check-label"
                                        for="flexCheckDefault"
                                    >
                                        {" "}
                                        Apple{" "}
                                    </label>{" "}
                                </div>{" "}
                                <span>13</span>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <div className="form-check">
                                    {" "}
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckChecked"
                                        checked
                                    />{" "}
                                    <label
                                        className="form-check-label"
                                        for="flexCheckChecked"
                                    >
                                        {" "}
                                        Asus{" "}
                                    </label>{" "}
                                </div>{" "}
                                <span>4</span>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <div className="form-check">
                                    {" "}
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckChecked"
                                        checked
                                    />{" "}
                                    <label
                                        className="form-check-label"
                                        for="flexCheckChecked"
                                    >
                                        {" "}
                                        Dell{" "}
                                    </label>{" "}
                                </div>{" "}
                                <span>24</span>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <div className="form-check">
                                    {" "}
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckChecked"
                                        checked
                                    />{" "}
                                    <label
                                        className="form-check-label"
                                        for="flexCheckChecked"
                                    >
                                        {" "}
                                        Lenovo{" "}
                                    </label>{" "}
                                </div>{" "}
                                <span>18</span>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <div className="form-check">
                                    {" "}
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckChecked"
                                        checked
                                    />{" "}
                                    <label
                                        className="form-check-label"
                                        for="flexCheckChecked"
                                    >
                                        {" "}
                                        Acer{" "}
                                    </label>{" "}
                                </div>{" "}
                                <span>44</span>
                            </div>
                        </div>
        </>
    );
}
