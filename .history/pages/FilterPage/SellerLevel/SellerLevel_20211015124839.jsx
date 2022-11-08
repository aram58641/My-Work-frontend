import style from "../Filter.module.scss";

import { FaBeer, FaAccessibleIcon } from "react-icons/fa";

export default function SellFilter(params) {
    return (
        <>
            <div className={`${style.processor} p-2`}>
                <div className="heading d-flex justify-content-between align-items-center">
                    <h6 className="text-uppercase">Processor</h6>{" "}
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
                            Intel Core i7{" "}
                        </label>{" "}
                    </div>{" "}
                    <span>3</span>
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
                            Intel Core i6{" "}
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
                            Intel Core i3{" "}
                        </label>{" "}
                    </div>{" "}
                    <span>14</span>
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
                            Intel Centron{" "}
                        </label>{" "}
                    </div>{" "}
                    <span>8</span>
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
                            Intel Pentinum{" "}
                        </label>{" "}
                    </div>{" "}
                    <span>14</span>
                </div>
            </div>
        </>
    );
}
