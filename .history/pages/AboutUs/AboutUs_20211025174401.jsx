import Main from "../Leyouts/Main";


export default function AboutUs(params) {
    
    return(
        <>
        <Main>
        <nav class="navbar navbar-preview fixed-top">
        <div class="container-fluid d-flex justify-content-between align-items-center w-100"><a class="my-lg-0 text-gray-soft" href="https://themes.getbootstrap.com/product/around-multipurpose-template-ui-kit/"><i class="bootstrap-themes-icon-left-open-1"></i> View theme <span class="d-none d-sm-inline">info</span></a>
            <ul class="nav nav-preview d-none d-md-flex" role="tablist">
                <li class="nav-item"><a class="nav-link btn-iframe-to-desktop-trigger active" data-toggle="tab" href="#home" role="tab"><i class="bootstrap-themes-icon-desktop nav-preview__icon"></i></a></li>
                <li class="nav-item"><a class="nav-link nav-link--small btn-iframe-to-mobile-trigger" data-toggle="tab" href="#profile" role="tab"><i class="bootstrap-themes-icon-iphone nav-preview__icon nav-preview__icon--sm"></i></a></li>
            </ul>            
            <div class="form-inline">
                <div class="btn-group d-none d-sm-flex">
                  <a class="dropdown-toggle text-gray-soft" js-price-dropdown="true" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Standard License</a>
                    <div class="dropdown-menu dropdown-menu--xl dropdown-menu--centered dropdown-menu--has-triangle">
                    <button class="dropdown-block-item switch_price_prod" data-type="Standard License" data-price="49.00" data-price_label="$49.00" data-label="Standard License">
                        <div class="d-flex justify-content-between align-items-center mb-2"><span>Standard License</span><span class="d-flex align-items-center">$49.00</span></div>
                        <ul class="fs-13 text-gray-soft mb-2">
                            <li>Use for a single product</li>
                            <li>Non-paying users only</li>
                        </ul>
                        <p class="fs-11 text-gray-soft">Read the full <a href="https://themes.getbootstrap.com/licenses#fullStandardLicense">Standard License</a></p>
                    </button>
                    <div class="dropdown-divider"></div>

                      <button class="dropdown-block-item switch_price_prod" data-type="Multisite License" data-price="149.00" data-price_label="$149.00" data-label="Multisite License">
                          <div class="d-flex justify-content-between align-items-center mb-2"><span>Multisite License</span><span class="d-flex align-items-center">$149.00</span></div>
                          <ul class="fs-13 text-gray-soft mb-2">
                            <li>Use for a unlimited product</li>
                            <li>Non-paying users only</li>
                          </ul>
                          <p class="fs-11 text-gray-soft">Read the full <a href="https://themes.getbootstrap.com/licenses#fullMultisiteLicense">Multisite License</a></p>
                      </button>

                                            <div class="dropdown-divider"></div>
                        <button class="dropdown-block-item switch_price_prod" data-type="Extended License" data-price="499.00" data-price_label="$499.00" data-label="Extended License">
                            <div class="d-flex justify-content-between align-items-center mb-2"><span>Extended License</span><span class="d-flex align-items-center">$499.00</span></div>
                            <ul class="fs-13 text-gray-soft mb-2">
                              <li>Use for a single product</li>
                              <li>Paying users allowed</li>
                            </ul>
                            <p class="fs-11 text-gray-soft">Read the full <a href="https://themes.getbootstrap.com/licenses#fullExtendedLicense">Extended License</a></p>
                        </button>
                                    </div> 
                </div>
                <form action="https://themes.getbootstrap.com/cart/" method="POST" class=" btn-block inline-block">
                    <input type="hidden" js-license-type="license_type" name="license_type" value="Standard License" />
                    <input type="hidden" name="add-to-cart" value="50603" />
                    <button type="submit" class="btn btn-brand btn-block btn-checkout"><span class="btn-text">Add to cart <span class="btn__label btn__label--right" js-price-value="main_price_div">$<b id="price_val">49.00</b></span></span></button>
                </form>
                <a class="text-gray ml-3" href="https://around.createx.studio/">
                  <small>
                    <i class="bootstrap-themes-icon-close"></i>
                  </small>
                </a>
            </div>
        </div>
    </nav>
    


        </Main>
        </>
    );
};