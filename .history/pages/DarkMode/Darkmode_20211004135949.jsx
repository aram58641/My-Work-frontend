import { useCallback, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
        [isDarkMode]
    );