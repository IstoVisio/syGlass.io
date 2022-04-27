<template>
    <div class="hero-software hero-swiper-btn section-space--pt_60" id="home">

        <div class="container_f1">
            <div class="swiper-wrapper">
                <swiper :options="swiperOption">
                    <div class="swiper-slide">
                        <div class="hero-item">
                            <div class="hero-content">
                                <h3 class="h1 hero-content-title">Bridge the gap between science and education </h3>
                                <h5 class="hero-content-subtitle">Explore real scientific data in the classroom through the power of virtual reality</h5>
								
                            </div>
                            <div class="hero-thumb pr-100">
                                <img src="../assets/img/educationFront.png" class="img-fluid" width="100%" alt="hero thumb" style="padding-bottom:40px">
                            </div>
                        </div>
                    </div>

                </swiper>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
    @import '../assets/scss/variabls.scss';
    @import '../assets/scss/elements/hero-software.scss';

    .hero-content-title {
    width: auto;
    padding-right: 10px;
}
</style>
