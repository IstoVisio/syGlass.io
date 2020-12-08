<template>
    <div class="hero-software hero-swiper-btn section-space--pt_60" id="home">

        <div class="container_f1">
            <div class="swiper-wrapper">
                <swiper :options="swiperOption">
                    <div class="swiper-slide">
                        <div class="hero-item">
                            <div class="hero-content">
                                <h2 class="h1 hero-content-title">Your 3D data deserves better software</h2>
                                <h6 class="hero-content-subtitle">Explore it naturally in virtual reality</h6>
                                <router-link :to="{ path: 'branding' }" class="btn btn--green">
                                    <span class="btn-icon  ml-0 mr-2"><i class="fa fa-arrow-alt-to-bottom"></i></span> Get syGlass
                                </router-link>
                            </div>
                            <div class="hero-thumb pr-100">
                                <img src="../assets/img/syglass/image (4).png" class="img-fluid" alt="hero thumb">
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide" :style="bgImg">
                        <div class="hero-item" >
                            <div class="hero-content">
                                <h2 class="h1 hero-content-title">Understand volumetric image stacks and 3D models easily</h2>
                                <h6 class="hero-content-subtitle">syGlass doesn't require users to be experts.</h6>
                                <router-link :to="{ path: 'branding' }" class="btn btn--green">
                                    <span class="btn-icon  ml-0 mr-2"><i class="fa fa-arrow-alt-to-bottom"></i></span> Get syGlass
                                </router-link>
                            </div>
                            <div class="hero-thumb">
                                <img src="../assets/img/syglass/VR 06_Cutplane.00_07_45_20.Still001.jpg" class="img-fluid" alt="hero thumb">
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide" :style="bgImg">
                        <div class="hero-item">
                            <div class="hero-content">
                                <h2 class="h1 hero-content-title">Explore your data!</h2>
                                <h6 class="hero-content-subtitle"></h6>
                                <router-link :to="{ path: 'branding' }" class="btn btn--green">
                                    <span class="btn-icon  ml-0 mr-2"><i class="fa fa-arrow-alt-to-bottom"></i></span> Get syGlass
                                </router-link>
                            </div>
                            <div class="hero-thumb pr-100">
                                <img src="../assets/img/syglass/20181022162002.png" class="img-fluid" alt="hero thumb">
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

                swiperOption: {
                    speed: 1500,
                    loop: true,
                    effect: 'fade',
                    autoplay: {
					delay: 4000 },
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
    @import '../assets/scss/elements/hero-software.scss';
</style>
