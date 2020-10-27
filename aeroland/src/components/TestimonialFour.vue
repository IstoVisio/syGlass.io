<template>
    <div class="applanding-ts testimonial-slider-area section-space--pt_120" id="testimonial">
        <div class="testimonial-slider-area section-space--pb_90">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="testimonial-slider border-bottom-drak  section-space--pb_90">
                            <div class="swiper-container testimonial-slider__container">
                                <div class="swiper-wrapper testimonial-slider__wrapper">
                                    <swiper :options="swiperOption">
                                        <div class="swiper-slide  wow move-up">
                                            <div class="app-landing-testimonial-slider__wrap">
                                                <div class="post-thumbnail">
                                                    <img src="../assets/img/team/avatar-03-140x140.png" class="img-fluid" alt="">
                                                </div>
                                                <div class="testimonial-slider--info">
                                                    <div class="testimonial-slider__text">“Amazing fast and reliable customer support! The team of developers are willing to go an extra mile for customer service!”</div>
                                                    <div class="testimonial-slider__author">
                                                        <h6 class="name">Abbie Ferguson</h6>
                                                        <span class="designation">WEB DESIGNER</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide wow move-up">
                                            <div class="app-landing-testimonial-slider__wrap">
                                                <div class="post-thumbnail">
                                                    <img src="../assets/img/team/avatar-01-140x140.png" class="img-fluid" alt="">
                                                </div>
                                                <div class="testimonial-slider--info">
                                                    <div class="testimonial-slider__text">” Their customer support was amazing. Their help was quick and gave me very clear instructions to follow! Thanks!”</div>
                                                    <div class="testimonial-slider__author">
                                                        <h6 class="name">Abbie Ferguson</h6>
                                                        <span class="designation">WEB DESIGNER</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide wow move-up">
                                            <div class="app-landing-testimonial-slider__wrap">
                                                <div class="post-thumbnail">
                                                    <img src="../assets/img/team/avatar-02-140x140.png" class="img-fluid" alt="">
                                                </div>
                                                <div class="testimonial-slider--info">
                                                    <div class="testimonial-slider__text">” Their customer support was amazing. Their help was quick and gave me very clear instructions to follow! Thanks!”</div>
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
    </div>
</template>

<script>
    export default {
        name: 'TestimonialFour',
        
        data () {
            return {
                swiperOption: {
                    speed: 800,
                    loop: true
                }
            }
        }   
    }
</script>
