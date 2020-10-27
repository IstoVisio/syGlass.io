<template>
    <div class="brand-logo-slider-area bg-gray section-space--pt_100 section-space--pb_60 startup-carousel">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title text-center section-space--mb_30">
                        <h2 class="font-weight--bold mb-15 wow move-up">A reliable top-rated company</h2>
                        <span class="section-text wow move-up">We deliver the best services for app design and coding</span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="brand-logo-slider__container-area">
                        <div class="swiper-container brand-logo-slider__container">
                            <div class="swiper-wrapper brand-logo-slider__wrapper">
                                <swiper :options="swiperOption">
                                    <div class="swiper-slide">
                                        <div class="brand-logo mb-0 wow move-up">
                                            <img src="../assets/img/brand/stratup-brand-logo-1.png" class="img-fluid" alt="brand logo">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="brand-logo mb-0 wow move-up">
                                            <img src="../assets/img/brand/stratup-brand-logo-2.png" class="img-fluid" alt="brand logo">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="brand-logo mb-0 wow move-up">
                                            <img src="../assets/img/brand/stratup-brand-logo-3.png" class="img-fluid" alt="brand logo">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="brand-logo mb-0 wow move-up">
                                            <img src="../assets/img/brand/stratup-brand-logo-4.png" class="img-fluid" alt="brand logo">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="brand-logo mb-0 wow move-up">
                                            <img src="../assets/img/brand/stratup-brand-logo-5.png" class="img-fluid" alt="brand logo">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="brand-logo mb-0 wow move-up">
                                            <img src="../assets/img/brand/stratup-brand-logo-6.png" class="img-fluid" alt="brand logo">
                                        </div>
                                    </div>
                                </swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CarouselStartup',
        data (){
            return {
                swiperOption: {
                    speed: 800,
                    loop: true,
                    autoplay: true,
                    slidesPerView: 5,
                    spaceBetween : 30,
                     breakpoints: {
                        991:{
                            slidesPerView : 4
                        },

                        767:{
                            slidesPerView : 3
                        },
                        575:{
                            slidesPerView : 2
                        }
                    }
                }
            }
        }
    }
</script>