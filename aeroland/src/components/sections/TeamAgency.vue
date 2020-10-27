<template>
    <div class="degital-agency-free-mode-wrap agency-free-mode-bg section-space--pt_60 section-space--pb_90" id="team">
        <div class="container">
            <div class="digital-agency-section-title-area section-space--mb_60">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="digital-agency-section-title text-left">
                            <h3 class="section-title font-weight--light mb-15 wow move-up">Cooperation unifies the best teammates & create miracles.</h3>
                            <div class="contact-button section-space--mt_30 wow move-up">
                                <a href="#" class="hover-style-link hover-style-link--green">View all team <i class="far fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 wow move-up">
                        <div class="agency-free-mode-button">
                            <a href="#" class="ht-btn ht-btn-md">Join us</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 wow move-up">
                    <div class="flexible-image-slider-wrap">
                        <div class="swiper-container auto--per-flexible__container__aegency">
                            <div class="swiper-wrapper auto-plexible-row">
                                <swiper :options="swiperOption">
                                    <div class="swiper-slide">
                                        <div class="single-flexible-slider">
                                            <img class="img-fluid" src="../../assets/img/agency/agency-slide-01.jpg" alt="gallery 01">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="single-flexible-slider">
                                            <img class="img-fluid" src="../../assets/img/agency/agency-slide-02.jpg" alt="gallery 02">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="single-flexible-slider">
                                            <img class="img-fluid" src="../../assets/img/agency/agency-slide-03.jpg" alt="gallery 03">
                                        </div>
                                    </div>
                                </swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- brand logo component -->
        <BrandLogoCarouselTwo />
    </div>
</template>

<script>
    import BrandLogoCarouselTwo from '../BrandLogoCarouselTwo'
    export default{
        name: 'TeamAgency',
        components: {
            BrandLogoCarouselTwo
        },
        data () {
            return {
                swiperOption: {
                    spaceBetween : 30,
                    loop: true,
                    freeMode: true,
                    slidesPerView: 'auto',
                    autoplay: {
                        delay: 0,
                        disableOnInteraction: false,
                    },
                    speed: 7000
                }
            }
        }
    };
</script>