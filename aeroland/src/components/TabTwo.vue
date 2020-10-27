<template>
    <div class="tabs-wrapper section-space--pt_120 section-space--pb_60" :class="BgGradient">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <slick class="slick1 tab-slider-nav"
                        :options="slickOptions">
                            <div class="tab-slider-nav--list wow move-up">
                                <i class="ht-slider-tab-icon fal fa-align-left"></i>
                                <h5>Page Change Effects</h5>
                                <p>The transition between pages is made to provide convenience for users while navigating.</p>
                            </div>
                            <div class="tab-slider-nav--list wow move-up">
                                <i class="ht-slider-tab-icon fal fa-rocket"></i>
                                <h5>New Marketing Plan</h5>
                                <p>We are capable of sketching out competitive marketing plans that's efficiency proven.</p>
                            </div>
                            <div class="tab-slider-nav--list wow move-up">
                                <i class="ht-slider-tab-icon fal fa-chart-pie"></i>
                                <h5>SEO Analytic Tools</h5>
                                <p>Promote your sales and increase the ROI with the help from built-in SEO analytics tools.</p>
                            </div>
                    </slick>
                </div>
                <div class="col-lg-8">
                    <slick class="slick2"
                        :options="slickOptions2">
                            <div class="pro-large-img img-zoom wow move-up">
                                <img class="img-fluid" src="../assets/img/banners/aeroland-tab-content-image-01.jpg" alt="product-details" />
                            </div>
                            <div class="pro-large-img img-zoom wow move-up">
                                <img class="img-fluid" src="../assets/img/banners/aeroland-tab-content-image-02.jpg" alt="product-details" />
                            </div>
                            <div class="pro-large-img img-zoom wow move-up">
                                <img class="img-fluid" src="../assets/img/banners/aeroland-tab-content-image-03.jpg" alt="product-details" />
                            </div>
                    </slick>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Slick from 'vue-slick';

    export default {
        name: 'TabTwo',
        props: ["BgGradient"],
        components: {
            Slick
        },
        data() {
            return {
                slickOptions: {
                    slidesToShow: 3,
                    focusOnSelect: true,
                    vertical: true,
                    asNavFor: '.slick2'
                },
                slickOptions2: {
                    arrows: false,
                    fade:true,
                    dots:true,
                    asNavFor: '.slick1'
                }
            };
        }
    };
</script>