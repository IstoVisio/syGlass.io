<template>
    <div class="testimonial-slider-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title text-center section-space--m_60">
                        <h2 class="section-title font-width--light"></h2>
                    </div>
                    <div class="testimonial-slider">
                        <div class="swiper-container testimonial-slider__container">
                            <div class="swiper-wrapper testimonial-slider__wrapper">
                                <swiper :options="swiperOption">
                                    <div class="swiper-slide">
                                        <div class="testimonial-slider__one">
                                            <div class="testimonial-slider__text">“I just wanted to share this wonderful result we would not have realized without syGlass.”</div>
                                            <div class="testimonial-slider--info">
                                                
                                            </div>
                                            <div class="testimonial-slider__author">
                                                    <h6 class="name">PhD Candidate</h6>
                                                </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="testimonial-slider__one">
                                            <div class="testimonial-slider__text">"Thank you again for showing me around in syGlass, the VR experience really elevates the data to a new dimension."</div>
                                            <div class="testimonial-slider--info">

                                                
                                            </div>
                                            <div class="testimonial-slider__author">
                                                    <h6 class="name">Microscopy Core Manager</h6>

                                                </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="testimonial-slider__one">
                                            <div class="testimonial-slider__text">"We can make the scan as large as a house, I can actually walk around inside the body of the cat and make microscopic measurements to examine in minute detail."</div>
                                            <div class="testimonial-slider--info">

                                            
                                            </div>
                                                <div class="testimonial-slider__author">
                                                    <h6 class="name">Imaging Facility Co-Director</h6>

                                                </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="testimonial-slider__one">
                                            <div class="testimonial-slider__text">“Tracking the position of hundreds of cells per 3D+time series, from months of imaging, has been reduced from 1 week to 6 hours in syGlass.”</div>
                                            <div class="testimonial-slider--info">

                                                
                                            </div>
                                            <div class="testimonial-slider__author">
                                                    <h6 class="name">PhD Candidate</h6>
                                                </div>
                                        </div>
                                    </div>

                                    <div class="swiper-slide">
                                        <div class="testimonial-slider__one">
                                            <div class="testimonial-slider__text">"..our minds literally being blown right now! It's so intuitive. You were right the videos don't do it justice... got to see it to believe it”."</div>
                                            <div class="testimonial-slider--info">

                                                <div class="testimonial-slider__author">
                                                    <h6 class="name">Postdoctoral Fellow</h6>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="testimonial-slider__one">
                                            <div class="testimonial-slider__text">"We found new structures we overlooked during 2D-screen analysis."</div>
                                            <div class="testimonial-slider--info">

                                                <div class="testimonial-slider__author">
                                                    <h6 class="name">Senior Researcher</h6>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="testimonial-slider__one">
                                            <div class="testimonial-slider__text">"syGlass support has been nothing but amazing through this project."</div>
                                            <div class="testimonial-slider--info">

                                                <div class="testimonial-slider__author">
                                                    <h6 class="name">Microscopy Core Facility Manager</h6>

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
                    speed: 1200,
                    loop: true,
                    autoplay: true,
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
