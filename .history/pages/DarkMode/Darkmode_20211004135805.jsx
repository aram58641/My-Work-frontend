import { useCallback, useState, useEffect } from "react";
import style from "./Header.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/dist/client/image";
import logo1 from "../../../public/Image/logo1.png";
import logo2 from "../../../public/Image/logo2.png";
import light_dark_icon from "../../../public/Image/light_dark.png";

export default function Darkmode() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const onClick = useCallback(
        (evt) => {
            evt.preventDefault();
            if ("undefined" === typeof document) {
                return;
            }

            if (isDarkMode) {
                document.body.style =    `background-color:blue `;
                document.body.style =   `background-color:red `;
                setIsDarkMode(false);
            } else {
                document.body.style =   `background-color:red `;
                document.body.style =   `background-color:blue `;
                setIsDarkMode(true);
            }
        },
        [isDarkMode];
    );