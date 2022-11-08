import style from './Filter.module.scss';


export default function Filter(params) {
    return (
        <>
            <div className="container-fluid mt-5 mb-5">
                <div className="row g-2">
                    <div className="col-md-3">
                        <div className={`${style.t-products} p-2`}>
                            <h6 className="text-uppercase">
                                Computer Periferals
                            </h6>
                            <div className="p-lists">
                                <div className="d-flex justify-content-between mt-2">
                                    {" "}
                                    <span>Laptops</span> <span>23</span>{" "}
                                </div>
                                <div className="d-flex justify-content-between mt-2">
                                    {" "}
                                    <span>Desktops</span> <span>46</span>{" "}
                                </div>
                                <div className="d-flex justify-content-between mt-2">
                                    {" "}
                                    <span>Monitors</span> <span>13</span>{" "}
                                </div>
                                <div className="d-flex justify-content-between mt-2">
                                    {" "}
                                    <span>Mouse</span> <span>33</span>{" "}
                                </div>
                                <div className="d-flex justify-content-between mt-2">
                                    {" "}
                                    <span>Keyboard</span> <span>12</span>{" "}
                                </div>
                                <div className="d-flex justify-content-between mt-2">
                                    {" "}
                                    <span>Printer</span> <span>53</span>{" "}
                                </div>
                                <div className="d-flex justify-content-between mt-2">
                                    {" "}
                                    <span>Mobiles</span> <span>203</span>{" "}
                                </div>
                                <div className="d-flex justify-content-between mt-2">
                                    {" "}
                                    <span>CPU</span> <span>23</span>{" "}
                                </div>
                            </div>
                        </div>
                        <div className={`${style.processor} p-2`} >
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
                        <div className={`${style.brand} p-2`} >
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
                        <div className={`${style.type} mb-2`} >
                            <div className="heading d-flex justify-content-between align-items-center">
                                <h6 className="text-uppercase">Type</h6>{" "}
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
                    </div>
                    <div className="col-md-9">
                        <div className="row g-2">
                            <div className="col-md-4">
                                <div className= {`${style.product} py-4`} >
                                    {" "}
                                    <span className="off bg-success">
                                        -25% OFF
                                    </span>
                                    <div className="text-center">
                                        {" "}
                                        <img
                                            src="https://i.imgur.com/nOFet9u.jpg"
                                            width="200"
                                        />{" "}
                                    </div>
                                    <div className={`${style.about} text-center`}>
                                        <h5>XRD Active Shoes</h5>{" "}
                                        <span>$1,999.99</span>
                                    </div>
                                    <div className={`${style.cart-button} mt-3 px-2 d-flex justify-content-between align-items-center`} >
                                        {" "}
                                        <button className="btn btn-primary text-uppercase">
                                            Add to cart
                                        </button>
                                        <div className="add">
                                            {" "}
                                            <span className="product_fav">
                                                <i className="fa fa-heart-o"></i>
                                            </span>{" "}
                                            <span className="product_fav">
                                                <i className="fa fa-opencart"></i>
                                            </span>{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="product py-4">
                                    {" "}
                                    <span className="off bg-warning">SALE</span>
                                    <div className="text-center">
                                        {" "}
                                        <img
                                            src="https://i.imgur.com/VY0R9aV.png"
                                            width="200"
                                        />{" "}
                                    </div>
                                    <div className="about text-center">
                                        <h5>Hygen Smart watch </h5>{" "}
                                        <span>$123.43</span>
                                    </div>
                                    <div className="cart-button mt-3 px-2 d-flex justify-content-between align-items-center">
                                        {" "}
                                        <button className="btn btn-primary text-uppercase">
                                            Add to cart
                                        </button>
                                        <div className="add">
                                            {" "}
                                            <span className="product_fav">
                                                <i className="fa fa-heart-o"></i>
                                            </span>{" "}
                                            <span className="product_fav">
                                                <i className="fa fa-opencart"></i>
                                            </span>{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="product py-4">
                                    <div className="text-center">
                                        {" "}
                                        <img
                                            src="https://i.imgur.com/PSGrLdz.jpg"
                                            width="200"
                                        />{" "}
                                    </div>
                                    <div className="about text-center">
                                        <h5>Acer surface book 2.5</h5>{" "}
                                        <span>$1,999.99</span>
                                    </div>
                                    <div className="cart-button mt-3 px-2 d-flex justify-content-between align-items-center">
                                        {" "}
                                        <button className="btn btn-primary text-uppercase">
                                            Add to cart
                                        </button>
                                        <div className="add">
                                            {" "}
                                            <span className="product_fav">
                                                <i className="fa fa-heart-o"></i>
                                            </span>{" "}
                                            <span className="product_fav">
                                                <i className="fa fa-opencart"></i>
                                            </span>{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="product py-4">
                                    {" "}
                                    <span className="off bg-success">
                                        -10% OFF
                                    </span>
                                    <div className="text-center">
                                        {" "}
                                        <img
                                            src="https://i.imgur.com/OdRSpXG.jpg"
                                            width="200"
                                        />{" "}
                                    </div>
                                    <div className="about text-center">
                                        <h5>Dell XPS Surface</h5>{" "}
                                        <span>$1,245.89</span>
                                    </div>
                                    <div className="cart-button mt-3 px-2 d-flex justify-content-between align-items-center">
                                        {" "}
                                        <button className="btn btn-primary text-uppercase">
                                            Add to cart
                                        </button>
                                        <div className="add">
                                            {" "}
                                            <span className="product_fav">
                                                <i className="fa fa-heart-o"></i>
                                            </span>{" "}
                                            <span className="product_fav">
                                                <i className="fa fa-opencart"></i>
                                            </span>{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="product py-4">
                                    <span className="off bg-success">
                                        -25% OFF
                                    </span>
                                    <div className="text-center">
                                        {" "}
                                        <img
                                            src="https://i.imgur.com/X2AwTCY.jpg"
                                            width="200"
                                        />{" "}
                                    </div>
                                    <div className="about text-center">
                                        <h5>Acer surface book 5.5</h5>{" "}
                                        <span>$2,999.99</span>
                                    </div>
                                    <div className="cart-button mt-3 px-2 d-flex justify-content-between align-items-center">
                                        {" "}
                                        <button className="btn btn-primary text-uppercase">
                                            Add to cart
                                        </button>
                                        <div className="add">
                                            {" "}
                                            <span className="product_fav">
                                                <i className="fa fa-heart-o"></i>
                                            </span>{" "}
                                            <span className="product_fav">
                                                <i className="fa fa-opencart"></i>
                                            </span>{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="product py-4">
                                    {" "}
                                    <span className="off bg-success">
                                        -5% OFF
                                    </span>
                                    <div className="text-center">
                                        {" "}
                                        <img
                                            src="https://i.imgur.com/QQwcBpF.png"
                                            width="200"
                                        />{" "}
                                    </div>
                                    <div className="about text-center">
                                        <h5>Xps smart watch 5.0</h5>{" "}
                                        <span>$999.99</span>
                                    </div>
                                    <div className="cart-button mt-3 px-2 d-flex justify-content-between align-items-center">
                                        {" "}
                                        <button className="btn btn-primary text-uppercase">
                                            Add to cart
                                        </button>
                                        <div className="add">
                                            {" "}
                                            <span className="product_fav">
                                                <i className="fa fa-heart-o"></i>
                                            </span>{" "}
                                            <span className="product_fav">
                                                <i className="fa fa-opencart"></i>
                                            </span>{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="product py-4">
                                    {" "}
                                    <span className="off bg-warning">SALE</span>
                                    <div className="text-center">
                                        {" "}
                                        <img
                                            src="https://i.imgur.com/PSGrLdz.jpg"
                                            width="200"
                                        />{" "}
                                    </div>
                                    <div className="about text-center">
                                        <h5>Acer surface book 8.5</h5>{" "}
                                        <span>$3,999.99</span>
                                    </div>
                                    <div className="cart-button mt-3 px-2 d-flex justify-content-between align-items-center">
                                        {" "}
                                        <button className="btn btn-primary text-uppercase">
                                            Add to cart
                                        </button>
                                        <div className="add">
                                            {" "}
                                            <span className="product_fav">
                                                <i className="fa fa-heart-o"></i>
                                            </span>{" "}
                                            <span className="product_fav">
                                                <i className="fa fa-opencart"></i>
                                            </span>{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="product py-4">
                                    <div className="text-center">
                                        {" "}
                                        <img
                                            src="https://i.imgur.com/m22OQy9.jpg"
                                            width="200"
                                        />{" "}
                                    </div>
                                    <div className="about text-center">
                                        <h5>Tyko Running shoes</h5>{" "}
                                        <span>$99.99</span>
                                    </div>
                                    <div className="cart-button mt-3 px-2 d-flex justify-content-between align-items-center">
                                        {" "}
                                        <button className="btn btn-primary text-uppercase">
                                            Add to cart
                                        </button>
                                        <div className="add">
                                            {" "}
                                            <span className="product_fav">
                                                <i className="fa fa-heart-o"></i>
                                            </span>{" "}
                                            <span className="product_fav">
                                                <i className="fa fa-opencart"></i>
                                            </span>{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="product py-4">
                                    <div className="text-center">
                                        {" "}
                                        <img
                                            src="https://i.imgur.com/OdRSpXG.jpg"
                                            width="200"
                                        />{" "}
                                    </div>
                                    <div className="about text-center">
                                        <h5>Dell surface book 5</h5>{" "}
                                        <span>$1,999.99</span>
                                    </div>
                                    <div className="cart-button mt-3 px-2 d-flex justify-content-between align-items-center">
                                        {" "}
                                        <button className="btn btn-primary text-uppercase">
                                            Add to cart
                                        </button>
                                        <div className="add">
                                            {" "}
                                            <span className="product_fav">
                                                <i className="fa fa-heart-o"></i>
                                            </span>{" "}
                                            <span className="product_fav">
                                                <i className="fa fa-opencart"></i>
                                            </span>{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
