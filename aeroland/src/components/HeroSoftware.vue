<template>
    <div class="hero-software hero-swiper-btn section-space--pt_60" id="home">

        <div class="container_f1">
            <div class="swiper-wrapper">
                <swiper :options="swiperOption">
                    <div class="swiper-slide">
                        <div class="hero-item">
                            <div class="hero-content">
                                <h3 class="h1 hero-content-title">Scientific data in virtual reality </h3>
                                <h5 class="hero-content-subtitle">The new medium of scientific discovery and communication</h5>
                                <router-link :to="{ hash: 'view' }" class="btn btn--green">
                                    <span class="btn-icon  ml-0 mr-2"><i class="fa fa-arrow-alt-to-bottom"></i></span> Get syGlass
                                </router-link>
                            </div>
                            <div class="hero-thumb pr-100">
                                <img src="../assets/img/syglass/presentation.png" class="img-fluid" width="100%" alt="hero thumb">
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide" >
                        <div class="hero-item" >
                            <div class="hero-content">
                                <h2 class="h1 hero-content-title">Grab and explore your data in 3D</h2>
                                <h6 class="hero-content-subtitle">Faster analysis and better accuracy</h6>
                                <router-link :to="{ hash: 'view' }" class="btn btn--green">
                                    <span class="btn-icon  ml-0 mr-2"><i class="fa fa-arrow-alt-to-bottom"></i></span> Get syGlass
                                </router-link>
                            </div>
                            <div class="hero-thumb pr-100">
                                    <iframe class="vid" width="100%" height="100%" src="https://www.youtube.com/embed/JRHT00eKk_A?autoplay=1&controls=0&modestbranding&mute=1&loop=1&playlist=JRHT00eKk_A"/>
                                    <img class="img img-fluid" src="../assets/img/syglass/downsize/flyfly.png" alt="hero thumb">
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide" >
                        <div class="hero-item">
                            <div class="hero-content">
                                <h2 class="h1 hero-content-title">Handle massive datasets seamlessly</h2>
                                <h6 class="hero-content-subtitle">From megabytes to tens of terabytes</h6>
                                <router-link :to="{ hash: 'view' }" class="btn btn--green">
                                    <span class="btn-icon  ml-0 mr-2"><i class="fa fa-arrow-alt-to-bottom"></i></span> Get syGlass
                                </router-link>
                            </div>
                            <div class="hero-thumb pr-100">
                                <iframe class="vid" width="100%" height="100%" src="https://www.youtube.com/embed/oxIcieQlguw?autoplay=1&controls=0&modestbranding&mute=1&loop=1&playlist=oxIcieQlguw"/>
                                <img class="img img-fluid" src="../assets/img/syglass/downsize/bigbrain.png" alt="hero thumb">
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide" >
                        <div class="hero-item">
                            <div class="hero-content">
                                <h2 class="h1 hero-content-title">The best solution <br/> for time-lapse data </h2>
                                <h6 class="hero-content-subtitle">Track hundreds of objects through time</h6>
                                <router-link :to="{ hash: 'view' }" class="btn btn--green">
                                    <span class="btn-icon  ml-0 mr-2"><i class="fa fa-arrow-alt-to-bottom"></i></span> Get syGlass
                                </router-link>
                            </div>
                            <div class="hero-thumb pr-100">
                                <img src="../assets/lls.gif" class="img-fluid" alt="hero thumb">
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
                    speed: 500,
                    loop: true,
                    effect: 'fade',
                    autoplay: {
					delay: 8000 },
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

    .hero-content-title {
    width: auto;
}
</style>
