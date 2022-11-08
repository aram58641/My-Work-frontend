import { I18nextProvider } from "react-i18next";
import { configure as configureI18next } from "../translations";

import "../styles/globals.css";

const i18n = configureI18next();

export default function MyApp({ Component, pageProps }) {
    return (
        <I18nextProvider i18n={i18n}>
            <Component {...pageProps} />
        </I18nextProvider>
    );
}
