<template>
    <div class="hero-sass hero-swiper-btn" id="home">
        <div class="container_f1">
            <div class="swiper-wrapper">
                <swiper :options="swiperOption">
                    <div class="swiper-slide" :style="bgImg">
                        <div class="hero-item text-center">
                            <div class="hero-content">
                                <h2 class="h1 hero-content-title font-weight-light">Free App Download Now</h2>
                                <h6 class="hero-content-subtitle">Responsive app for all kinds of purposes.</h6>
                                <router-link :to="{ path: 'branding' }" class="btn btn--green">
                                    <span class="btn-icon  ml-0 mr-2"><i class="fa fa-arrow-alt-to-bottom"></i></span> Get AeroLand
                                </router-link>
                            </div>
                            <div class="hero-thumb">
                                <img src="../assets/img/hero/hero-sass/sass-thumb-1.png" class="img-fluid" alt="hero thumb">
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide" :style="bgImg">
                        <div class="hero-item text-center">
                            <div class="hero-content">
                                <h2 class="h1 hero-content-title font-weight-light">Free App Download Now</h2>
                                <h6 class="hero-content-subtitle">Responsive app for all kinds of purposes.</h6>
                                <router-link :to="{ path: 'branding' }" class="btn btn--green">
                                    <span class="btn-icon  ml-0 mr-2"><i class="fa fa-arrow-alt-to-bottom"></i></span> Get AeroLand
                                </router-link>
                            </div>
                            <div class="hero-thumb">
                                <img src="../assets/img/hero/hero-sass/sass-thumb-2.png" class="img-fluid" alt="hero thumb">
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide" :style="bgImg">
                        <div class="hero-item text-center">
                            <div class="hero-content">
                                <h2 class="h1 hero-content-title font-weight-light">Free App Download Now</h2>
                                <h6 class="hero-content-subtitle">Responsive app for all kinds of purposes.</h6>
                                <router-link :to="{ path: 'branding' }" class="btn btn--green">
                                    <span class="btn-icon  ml-0 mr-2"><i class="fa fa-arrow-alt-to-bottom"></i></span> Get AeroLand
                                </router-link>
                            </div>
                            <div class="hero-thumb">
                                <img src="../assets/img/hero/hero-sass/sass-thumb-3.png" class="img-fluid" alt="hero thumb">
                            </div>
                        </div>
                    </div>
                    <!-- Optional controls -->
                    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                </swiper>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            bgImg: {
                backgroundImage: `url(${require("../assets/img/hero/hero-sass/hero-sass-bg.jpg")})`
            },
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
    @import '../assets/scss/variabls.scss';
    @import '../assets/scss/elements/hero-sass.scss'
</style>
