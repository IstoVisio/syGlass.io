<template>
    <div class="testimonial-slider-area section-space--pb_120">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title text-center section-space--mb_60">
                        <h2 class="section-title font-width--light">Don’t take our word for it</h2>
                    </div>
                    <div class="testimonial-slider">
                        <div class="swiper-container testimonial-slider__container">
                            <div class="swiper-wrapper testimonial-slider__wrapper">
                                <swiper :options="swiperOption">
                                    <div class="swiper-slide">
                                        <div class="testimonial-slider__one">
                                            <div class="testimonial-slider__text">“I just wanted to share this wonderful result we would not be able to visualize without syGlass. One of my colleagues made this improved version (over the previous one below) without telling us. We were just able to discover it today!”</div>
                                            <div class="testimonial-slider--info">
                                                <div class="post-thumbnail">
                                                    <img src="../assets/img/syglass_profiles/Bostjan_Kokot_scale.jpg" class="img-fluid" alt="">
                                                </div>
                                                <div class="testimonial-slider__author">
                                                    <h6 class="name">Dr. Boštjan Kokot</h6>
                                                    <span class="designation">Jožef Stefan Institute</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="testimonial-slider__one">
                                            <div class="testimonial-slider__text">“We are tracking the positions of hundreds of cells per 4-D time series, each consisting of months of in vivo imaging time points. Nearly a full week of clicking in ImageJ has been reduced to about 6 hours in syGlass.”</div>
                                            <div class="testimonial-slider--info">
                                                <div class="post-thumbnail">
                                                    <img src="../assets/img/team/avatar-07-60x60.png" class="img-fluid" alt="">
                                                </div>
                                                <div class="testimonial-slider__author">
                                                    <h6 class="name">Dr. Cody Call</h6>
                                                    <span class="designation">Johns Hopkins University</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="testimonial-slider__one">
                                            <div class="testimonial-slider__text">"SyGlass' support has been nothing but amazing through this project."</div>
                                            <div class="testimonial-slider--info">
                                                <div class="post-thumbnail">
                                                    <img src="../assets/img/team/avatar-07-60x60.png" class="img-fluid" alt="">
                                                </div>
                                                <div class="testimonial-slider__author">
                                                    <h6 class="name">Dr. </h6>
                                                    <span class="designation">Monash University</span>
                                                </div>
                                            </div>
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
        name: 'TestimonialOne',
        data () {
            return {
                swiperOption: {
                    speed: 800,
                    loop: true,
                    slidesPerView: 3,
                    spaceBetween : 30,
                    breakpoints: {
                        1499:{
                            slidesPerView : 3
                        },
                        
                        991:{
                            slidesPerView : 2
                        },

                        767:{
                            slidesPerView : 1

                        },

                        575:{
                            slidesPerView : 1
                        }
                    }
                }
            }
        }   
    }
</script>
