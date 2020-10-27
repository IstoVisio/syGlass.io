<template>
    <div class="sc-outer pl-0 pr-0">
        <div class="row">
            <div class="col-12  wow move-up">
                <div class="flexible-image-slider-wrap">
                    <div class="swiper-container">
                        <swiper :options="swiperOption">
                            <div class="swiper-slide">
                                <div class="single-flexible-slider wow move-up">
                                    <img class="img-fluid" src="../assets/img/project/project-1.jpg" alt="project-1">
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="single-flexible-slider wow move-up">
                                    <img class="img-fluid" src="../assets/img/project/project-2.jpg" alt="project-1">
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="single-flexible-slider wow move-up">
                                    <img class="img-fluid" src="../assets/img/project/project-3.jpg" alt="project-1">
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="single-flexible-slider wow move-up">
                                    <img class="img-fluid" src="../assets/img/project/project-4.jpg" alt="project-1">
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="single-flexible-slider wow move-up">
                                    <img class="img-fluid" src="../assets/img/project/project-5.jpg" alt="project-1">
                                </div>
                            </div>
                        </swiper>
                        <!-- Add Arrows -->
                        <div class="swiper-pagination swiper-pagination-2 section-space--mt_50"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'ScreenshotCarousel',
        data (){
            return {
                swiperOption: {
                    speed: 800,
                    loop: true,
                    autoplay: true,
                    slidesPerView: 5,
                    spaceBetween : 30,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                     breakpoints: {
                        1499:{
                            slidesPerView : 3
                        },

                        991:{
                            slidesPerView : 2
                        }
                    }
                }
            }
        }
    };
</script>