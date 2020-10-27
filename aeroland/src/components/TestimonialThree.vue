<template>
    <div class="testimonial-slider-area section-space--ptb_120 fixed-bg" :style="bgImg" id="testimonial">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="testimonial-slider">
                        <div class="swiper-container testimonial-slider__three">
                            <div class="swiper-wrapper testimonial-slider__wrapper">
                                <swiper :options="swiperOption">
                                    <div class="swiper-slide">
                                        <div class="testimonial-slider__wrap text-center">
                                            <div class="testimonial-slider__thum">
                                                <img src="../assets/img/team/avatar-06-90x90.png" class="img-fluid" alt="">
                                            </div>
                                            <div class="testimonial-slider__dec">
                                                <p>“Working with Aeroland is like having a family member who can fix everything!”</p>
                                            </div>
                                            <div class="testimonial-slider__author">
                                                <h6 class="name">Colin</h6>
                                                <span class="designation">Web designer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="testimonial-slider__wrap text-center">
                                            <div class="testimonial-slider__thum">
                                                <img src="../assets/img/team/avatar-05-90x90.png" class="img-fluid" alt="">
                                            </div>
                                            <div class="testimonial-slider__dec">
                                                <p>“Great theme, just what we were looking for. Easy to install, easy to navigate. Well-documented. Really enjoyed their support.”</p>
                                            </div>
                                            <div class="testimonial-slider__author">
                                                <h6 class="name">Cassie Ventura</h6>
                                                <span class="designation">Web designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </swiper>
                            </div>
                            <!-- Add Arrows -->
                            <div class="swiper-nav-button swiper-button-next"><i class="nav-button-icon"></i></div>
                            <div class="swiper-nav-button swiper-button-prev"><i class="nav-button-icon"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TestimonialThree',
        data () {
            return {
                bgImg: {
                    backgroundImage: `url(${require('../assets/img/bg/testimonial-bg.jpg')})`
                },
                swiperOption: {
                    speed: 800,
                    loop: true,
                    autoHeight: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                }
            }
        }   
    }
</script>
