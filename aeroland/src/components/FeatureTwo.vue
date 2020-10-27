<template>
    <div class="feature-slider-area section-space--pt_60">
        <div class="feature-slider position-relative">
            <div class="feature-slider__container">
                <div class="feature-slider__wrapper">
                    <swiper :options="swiperOption">
                        <swiper-slide>
                            <div class="feature-slider__single-slide">
                                <div class="feature-slider__single-slide-wrapper">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 wow move-up">
                                            <div class="image">
                                                <img src="../assets/img/features/aeroland-branding-image-10.png" class="img-fluid" alt="">
                                            </div>
                                        </div>
                                        <div class="col-md-6 wow move-up">
                                            <div class="content">
                                                <h4 class="title">Visionary Creative Team Member</h4>
                                                <div class="text">We bring on like-minded and talented members to help you grow a stronger business for fiercely reaching towards higher goals every day. We try to form an all-star team that deeply investigates your company culture to advertise about it.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>

                         <swiper-slide>
                             <div class="feature-slider__single-slide">
                                <div class="feature-slider__single-slide-wrapper">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 wow move-up">
                                            <div class="image">
                                                <img src="../assets/img/features/aeroland-branding-image-11.png" class="img-fluid" alt="">
                                            </div>
                                        </div>
                                        <div class="col-md-6 wow move-up">
                                            <div class="content">
                                                <h4 class="title">How to Fit into The Big Picture</h4>
                                                <div class="text">Our branding professionals have unique ways to avoid the well-worn path. They can get on a new original one for finding resolutions by imagining your company as a piece and study how to make it fit into the big picture.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         </swiper-slide>

                         <swiper-slide>
                             <div class="feature-slider__single-slide">
                                <div class="feature-slider__single-slide-wrapper">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 wow move-up">
                                            <div class="image">
                                                <img src="../assets/img/features/aeroland-branding-image-12.png" class="img-fluid" alt="">
                                            </div>
                                        </div>
                                        <div class="col-md-6 wow move-up">
                                            <div class="content">
                                                <h4 class="title">Build Enticing & Professional Website</h4>
                                                <div class="text">Putting together all of your business's data, rearrange and present in an appealing way to highlight your core values, services, and visions in the local area. Your online website would be a stepping stone for expanding company's visibility.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         </swiper-slide>
                         <div class="swiper-pagination swiper-pagination--vertical swiper-pagination-1"  slot="pagination"></div>
                    </swiper>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'featureTwo',
        data (){
            return {
                swiperOption: {
                    speed: 600,
                    loop: true,
                    slidesPerView: 1,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    breakpoints: {
                        768:{
                            clickable: false
                        }
                    }
                }
            }
        }
    }
</script>