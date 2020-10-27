<template>
    <div class="product-showcase-product-view-wrapper section-space--pt_120" id="product">
        <div class="container-fluid container-fluid--cp-120">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title-wrapper text-center section-space--mb_60">
                        <h3 class="font-weight--light text-black mb-10 wow move-up">Product Overview</h3>
                        <div class="sub-text wow move-up">
                            A super-high 13000 mAh capacity with two high-speed USB ports that is smaller than a wallet
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <!-- gallery-warp Start -->
                    <div class="gallery-warp">
                        <div class="popup-images gallery-grid-4">
                            <!-- single gallery Start -->
                            <silentbox-single 
                                :src="require('../../assets/img/product/product-showcase-gallery-01.jpg')"
                                class="single-gallery grid-width-2 grid-height-2"
                            >
                                <div class="single-gallery__item">
                                    <div class="single-gallery__thum">
                                        <img class="img-fluid" src="../../assets/img/product/product-showcase-gallery-01.jpg" />
                                    </div>
                                    <div class="ht-overlay"></div>
                                    <div class="overlay-icon">
                                        <i class="far fa-search"></i>
                                    </div>
                                </div>
                            </silentbox-single>
                            <!-- single gallery End -->

                            <!-- single gallery Start -->
                            <silentbox-single 
                                :src="require('../../assets/img/product/product-showcase-gallery-02.jpg')"
                                class="single-gallery"
                            >
                                <div class="single-gallery__item">
                                    <div class="single-gallery__thum">
                                        <img class="img-fluid" src="../../assets/img/product/product-showcase-gallery-02.jpg" />
                                    </div>
                                    <div class="ht-overlay"></div>
                                    <div class="overlay-icon">
                                        <i class="far fa-search"></i>
                                    </div>
                                </div>
                            </silentbox-single>
                            <!-- single gallery End -->

                            <!-- single gallery Start -->
                            <silentbox-single 
                                :src="require('../../assets/img/product/product-showcase-gallery-03.jpg')"
                                class="single-gallery"
                            >
                                <div class="single-gallery__item">
                                    <div class="single-gallery__thum">
                                        <img class="img-fluid" src="../../assets/img/product/product-showcase-gallery-03.jpg" />
                                    </div>
                                    <div class="ht-overlay"></div>
                                    <div class="overlay-icon">
                                        <i class="far fa-search"></i>
                                    </div>
                                </div>
                            </silentbox-single>
                            <!-- single gallery End -->

                            <!-- single gallery Start -->
                            <silentbox-single 
                                :src="require('../../assets/img/product/product-showcase-gallery-04.jpg')"
                                class="single-gallery"
                            >
                                <div class="single-gallery__item">
                                    <div class="single-gallery__thum">
                                        <img class="img-fluid" src="../../assets/img/product/product-showcase-gallery-04.jpg" />
                                    </div>
                                    <div class="ht-overlay"></div>
                                    <div class="overlay-icon">
                                        <i class="far fa-search"></i>
                                    </div>
                                </div>
                            </silentbox-single>
                            <!-- single gallery End -->

                            <!-- single gallery Start -->
                            <silentbox-single 
                                :src="require('../../assets/img/product/product-showcase-gallery-05.jpg')"
                                class="single-gallery"
                            >
                                <div class="single-gallery__item">
                                    <div class="single-gallery__thum">
                                        <img class="img-fluid" src="../../assets/img/product/product-showcase-gallery-05.jpg" />
                                    </div>
                                    <div class="ht-overlay"></div>
                                    <div class="overlay-icon">
                                        <i class="far fa-search"></i>
                                    </div>
                                </div>
                            </silentbox-single>
                            <!-- single gallery End -->
                        </div>
                    </div>
                    <!-- gallery-warp End -->
                </div>
            </div>
        </div>
    </div>
</template>