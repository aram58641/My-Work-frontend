import style from "./MainCategories.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import Products from "../../../../../Products/Products";
import JsonProduct from "../../../../../Json/Filter.json";




export default function Categories(props) {
    return (
        <>

                    <Products productfilter = {JsonProduct}  />
          
         
        </>
    );
}
