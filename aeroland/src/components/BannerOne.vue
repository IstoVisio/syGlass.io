<template>
    <div class="banner-image-area position-relative">
        <div class="container_fl">
            <div class="row align-items-center">
                <div class="col-lg-6 order-1 order-lg-1 wow move-up">
                    <div class="banner-image__media">
                        <img src="../assets/img/banners/aeroland_slider-sass-image-03.png" class="img-fluid" alt="">
                    </div>
                </div>
                <div class="col-lg-6 order-2 order-lg-2 wow move-up">
                    <div class="banner-image__content">
                        <div class="section-title-wrapper mb-20">
                            <h2 class="section-title font-weight--light">All-in-one responsive app for you</h2>
                        </div>
                        <div class="banner-image__text section-space--mb_40">It is about us being able to offer help with the branding campaign, product presentation, and advertisement running across social media.</div>
                        <router-link :to="{ path: 'branding' }" class="ht-btn ht-btn-md section-space--mb_40">
                            Learn More
                        </router-link>
                        <h6 class="banner-image__helper-text">What’s next in AeroLand? 
                            <router-link :to="{ path: 'branding' }" class="hover-style-link hover-style-link--green">
                                Learn More
                            </router-link>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'BannerOne',
    };
</script>