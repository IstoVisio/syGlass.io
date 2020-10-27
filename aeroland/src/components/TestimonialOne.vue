<template>
    <div class="testimonial-slider-area section-space--ptb_120">
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
                                            <div class="testimonial-slider__text">“Amazing fast and reliable customer support! The team of developers are willing to go an extra mile for customer service!”</div>
                                            <div class="testimonial-slider--info">
                                                <div class="post-thumbnail">
                                                    <img src="../assets/img/team/avatar-07-60x60.png" class="img-fluid" alt="">
                                                </div>
                                                <div class="testimonial-slider__author">
                                                    <h6 class="name">Abbie Ferguson</h6>
                                                    <span class="designation">WEB DESIGNER</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="testimonial-slider__one">
                                            <div class="testimonial-slider__text">“Working with Aeroland is like having a family member who can fix everything! Amazing fast and reliable support!”</div>
                                            <div class="testimonial-slider--info">
                                                <div class="post-thumbnail">
                                                    <img src="../assets/img/team/avatar-07-60x60.png" class="img-fluid" alt="">
                                                </div>
                                                <div class="testimonial-slider__author">
                                                    <h6 class="name">Abbie Ferguson</h6>
                                                    <span class="designation">WEB DESIGNER</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="testimonial-slider__one">
                                            <div class="testimonial-slider__text">@AeroLand was unbelievably helpful to me when I need to find a responsive HTML template for my upcoming websites.</div>
                                            <div class="testimonial-slider--info">
                                                <div class="post-thumbnail">
                                                    <img src="../assets/img/team/avatar-07-60x60.png" class="img-fluid" alt="">
                                                </div>
                                                <div class="testimonial-slider__author">
                                                    <h6 class="name">Abbie Ferguson</h6>
                                                    <span class="designation">WEB DESIGNER</span>
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
