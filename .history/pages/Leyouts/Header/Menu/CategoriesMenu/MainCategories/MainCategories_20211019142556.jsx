import style from "./MainCategories.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import MainCategoriesFilter from "./MainCategoriesFilter/MainCategoriesFilter";
export default function MainCategories(props) {
    return (
        <>
            <div className="container-xl mt-5 mb-5">
                <div className="row g-2">
                    {/*Filter */}

                    <div className={`col-md-3 ${style.backgrount_filter}`}>
                        <MainCategoriesFilter />
                        
                    </div>

                    {/* Products */}
                    <div class="container d-flex justify-content-center mt-100">
    <div class="row">
        <div class="col-md-3">
            <div class="product-wrapper mb-45 text-center">
                <div class="product-img"> <a href="#" data-abc="true"> <img src="https://i.imgur.com/tL7ZE46.jpg" alt=""/> </a>
                    <div class="product-action">
                        <div class="product-action-style"> <a href="#"> <i class="fa fa-plus"></i> </a> <a href="#"> <i class="fa fa-heart"></i> </a> <a href="#"> <i class="fa fa-shopping-cart"></i> </a> </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="product-wrapper mb-45 text-center">
                <div class="product-img"> <a href="#" data-abc="true"> <img src="https://i.imgur.com/lAQxXCK.jpg" alt=""/> </a>
                    <div class="product-action">
                        <div class="product-action-style"> <a class="action-plus" title="Quick View" data-toggle="modal" data-target="#exampleModal" href="#" data-abc="true"> <i class="fa fa-plus"></i> </a> <a class="action-heart" title="Wishlist" href="#" data-abc="true"> <i class="fa fa-heart"></i> </a> <a class="action-cart" title="Add To Cart" href="#" data-abc="true"> <i class="fa fa-shopping-cart"></i> </a> </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="product-wrapper mb-45 text-center">
                <div class="product-img"> <a href="#" data-abc="true"> <img src="https://i.imgur.com/HxEEu5g.jpg" alt=""/> </a>
                    <div class="product-action">
                        <div class="product-action-style"> <a class="action-plus" title="Quick View" data-toggle="modal" data-target="#exampleModal" href="#" data-abc="true"> <i class="fa fa-plus"></i> </a> <a class="action-heart" title="Wishlist" href="#" data-abc="true"> <i class="fa fa-heart"></i> </a> <a class="action-cart" title="Add To Cart" href="#" data-abc="true"> <i class="fa fa-shopping-cart"></i> </a> </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="product-wrapper mb-45 text-center">
                <div class="product-img"> <a href="#" data-abc="true"> <img src="https://i.imgur.com/lAQxXCK.jpg" alt=""/> </a>
                    <div class="product-action">
                        <div class="product-action-style"> <a class="action-plus" title="Quick View" data-toggle="modal" data-target="#exampleModal" href="#" data-abc="true"> <i class="fa fa-plus"></i> </a> <a class="action-heart" title="Wishlist" href="#" data-abc="true"> <i class="fa fa-heart"></i> </a> <a class="action-cart" title="Add To Cart" href="#" data-abc="true"> <i class="fa fa-shopping-cart"></i> </a> </div>
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
