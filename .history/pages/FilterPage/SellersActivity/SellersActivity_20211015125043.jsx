import style from "../Filter.module.scss";

import { FaBeer, FaAccessibleIcon } from "react-icons/fa";

export default function SellerActivityFilter(params) {
    return (
        <>
            <div className={`${style.type} mb-2`}>
                <div className="heading d-flex justify-content-between align-items-center">
                    <h6 className="text-uppercase">Type</h6> <span>--</span>
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
                            Hybrid{" "}
                        </label>{" "}
                    </div>{" "}
                    <span>23</span>
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
                            Laptop{" "}
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
                            Desktop{" "}
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
                            Touch{" "}
                        </label>{" "}
                    </div>{" "}
                    <span>28</span>
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
                            Tablets{" "}
                        </label>{" "}
                    </div>{" "}
                    <span>44</span>
                </div>
            </div>
        </>
    );
}
