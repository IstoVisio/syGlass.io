<template>
    <div class="hero-software hero-swiper-btn section-space--pt_60" id="home">
		<div class="banner">
			<a href="/education" target="_blank" class="bg-transparent" style="width:100%; "> 
				<h4 style="background-color:#44A3F2; text-align: center; padding-top: 5px; padding-bottom:5px; !important font-style:normal;">Explore our new educational offering!</h4>
			</a>
		</div>
        <div class="container_f1">
            <div class="swiper-wrapper">
                <swiper :options="swiperOption">
                    <div class="swiper-slide">
                        <div class="hero-item">
                            <div class="hero-content">
                                <h3 class="h1 hero-content-title">Scientific data in virtual reality </h3>
                                <h5 class="hero-content-subtitle">The new medium of scientific discovery and communication</h5>
                                <div class="d-none d-md-block">
                                <router-link :to="{ hash: 'view' }" class="btn btn--green">
                                    <span class="btn-icon ml-0 mr-2"><i class="fa fa-arrow-alt-to-bottom"></i></span> Get syGlass
                                </router-link>
                                </div>
                            </div>
                            <div class="hero-thumb pr-100">
                                <img src="../assets/img/syglass/VR-avatar.png" class="img-fluid" width="100%" alt="Presentation of somatic spines done by customizable avatar">
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide" >
                        <div class="hero-item" >
                            <div class="hero-content">
                                <h2 class="h1 hero-content-title">Grab and explore your data in 3D</h2>
                                <h5 class="hero-content-subtitle">Faster analysis and better accuracy</h5>
                                <div class="d-none d-md-block">
                                <router-link :to="{ hash: 'view' }" class="btn btn--green">
                                    <span class="btn-icon  ml-0 mr-2"><i class="fa fa-arrow-alt-to-bottom"></i></span> Get syGlass
                                </router-link>
                                </div>
                            </div>
                            <div class="hero-thumb pr-100">
                                    <iframe class="d-none d-md-block vid" width="100%" height="100%" src="https://www.youtube.com/embed/JRHT00eKk_A?autoplay=1&controls=0&modestbranding&mute=1&loop=1&playlist=JRHT00eKk_A"/>
                                    <img class="img img-fluid" src="../assets/img/syglass/fly-microCT.jpg" alt="Microcomputed tomography of drosophilia fly rendered in virtual reality">
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide" >
                        <div class="hero-item">
                            <div class="hero-content">
                                <h2 class="h1 hero-content-title">Handle massive datasets seamlessly</h2>
                                <h5 class="hero-content-subtitle">From megabytes to tens of terabytes</h5>
                                <div class="d-none d-md-block">
                                <router-link :to="{ hash: 'view' }" class="btn btn--green">
                                    <span class="btn-icon  ml-0 mr-2"><i class="fa fa-arrow-alt-to-bottom"></i></span> Get syGlass
                                </router-link>
                                </div>
                            </div>
                            <div class="hero-thumb pr-100">
                                <iframe class="d-none d-md-block vid" width="100%" height="100%" src="https://www.youtube.com/embed/oxIcieQlguw?autoplay=1&controls=0&modestbranding&mute=1&loop=1&playlist=oxIcieQlguw"/>
                                <img class="img img-fluid" src="../assets/img/syglass/brain.jpg" alt="Immersive exploration of a brain in 3D visualization software">
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide" >
                        <div class="hero-item">
                            <div class="hero-content">
                                <h2 class="h1 hero-content-title">The best solution <br/> for time-lapse data </h2>
                                <h5 class="hero-content-subtitle">Track hundreds of objects through time</h5>
                                <div class="d-none d-md-block">
                                <router-link :to="{ hash: 'view' }" class="btn btn--green">
                                    <span class="btn-icon ml-0 mr-2"><i class="fa fa-arrow-alt-to-bottom"></i></span> Get syGlass
                                </router-link>
                                </div>
                            </div>
                            <div class="hero-thumb pr-100">
                                <video autoplay loop muted playsinline class="img-fluid" alt="VR controller tools for image analysis" poster="../assets/img/syglass/analysis-controller.gif">
                                    <source src="../assets/img/syglass/analysis-controller.webm" type="video/webm">
                                    <source src="../assets/img/syglass/analysis-controller.mp4" type="video/mp4">
                                </video>
                            </div>
                        </div>
                    </div>
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
    padding-right: 10px;
    }
</style>
