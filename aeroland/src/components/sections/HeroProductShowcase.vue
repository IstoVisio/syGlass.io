<template>
    <div class="hero-product-showcase hero-height hero-swiper-btn" id="home">
        <div class="swiper-wrapper">
            <swiper :options="swiperOption">
                <div class="swiper-slide bg-cover slider-2">
                    <div class="hero-item">
                        <div class="container-fluid container-fluid--cp-150">
                            <div class="row">
                                <div class="col-xl-5 col-lg-7 col-md-8">
                                    <div class="hero-content hero-content--style-2">
                                        <h5 class="hero-content-subtitle pb-3">S.Box 2000mAh</h5>
                                        <h2 class="h1 hero-content-title font-weight-normal">Portable charger for your mobile</h2>
                                        <p class="hero-content-desc pb-4">It's fast and reliable energy charger for powering your mobile devices like phones and tablets.</p>
                                        <div class="hero-btn">
                                            <button class="ht-btn ht-btn-md">$139 Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide bg-cover slider-1">
                    <div class="hero-item">
                        <div class="container-fluid container-fluid--cp-150">
                            <div class="row">
                                <div class="col-xl-5 col-lg-7 col-md-8">
                                    <div class="hero-content">
                                        <h5 class="hero-content-subtitle pb-3">S.Box 2000mAh</h5>
                                        <h2 class="h1 hero-content-title pb-5 font-weight-normal">Fit into pocket size & highly portable, data protection</h2>
                                        <div class="hero-btn">
                                            <button class="ht-btn ht-btn-md">$139 Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Optional controls -->
                <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                swiperOption: {
                    speed: 1500,
                    loop: true,
                    effect: 'fade',
                    autoplay: false,
                    spaceBetween : 30,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                }
            };
        }
    };
</script>

<style lang="scss" scoped> 
    @import '../../assets/scss/variabls.scss';
    
    .hero-height {
        height: 950px;
        // responsive
        @media #{$xlmax-device}{
            height: 750px;
        }
        @media #{$desktop-device, $tablet-device}{
            height: 600px;
        }
        @media #{$large-mobile}{
            height: 550px;
        }
        @media #{$extra-small-mobile}{
            height: 500px;
        }
    }
    .hero-item {
        height: 100%;
        display: flex;
        align-items: center;
    }
    .hero-content {
        padding-top: 60px;
        &-subtitle {
            color: $white;
            @media #{$extra-small-mobile}{
                font-size: 18px;
            }
        }
        &-title {
            color: $white;
            // responsive
            @media #{$extra-small-mobile}{
                font-size: 26px;
            }
        }
        &-desc {
            font-size: 18px;
        }
        &--style-2 {
            width: 550px;
            // responsive
            @media #{$desktop-device}{
                width: 100%;
                padding-right: 60px;
            }
            @media #{$tablet-device}{
                padding-right: 100px;
                width: 100%;
            }
            @media #{$large-mobile}{
                padding-right: 150px;
                width: 100%;
            }
            // responsive
            @media #{$extra-small-mobile}{
                padding-right: 0;
            }
            .hero-content-title,
            .hero-content-subtitle {
                color: $theme-color--black;
            }
        }
    }
    .slider-1 {
        background-image: url('../../assets/img/hero/product-showcase/product-showcase-bg-01.jpg');
    }
    .slider-2 {
        background-image: url('../../assets/img/hero/product-showcase/product-showcase-bg-02.jpg');
    }
</style>

