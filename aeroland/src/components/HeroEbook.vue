<template>
    <div class="hero-ebook hero-swiper-btn" id="home">
        <div class="container_f1">
            <div class="swiper-wrapper">
                <swiper :options="swiperOption">
                    <div class="swiper-slide" :style="bgImg">
                        <div class="hero-item">
                            <div class="hero-content">
                                <h6 class="hero-content-subtitle">it's time to change something</h6>
                                <h2 class="h1 hero-content-title">Learn to Design Beautiful & Simple Websites</h2>
                                <router-link to="" class="btn btn--black">Get the book your way</router-link>
                            </div>
                            <div class="hero-thumb">
                                <img src="../assets/img/hero/ebook/ebook-hero-thumb1.png" class="img-fluid" alt="hero thumb">
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide" :style="bgImg">
                        <div class="hero-item">
                            <div class="hero-content">
                                <h6 class="hero-content-subtitle">it's time to change something</h6>
                                <h2 class="h1 hero-content-title">Learn to Design Beautiful & Simple Websites</h2>
                                <router-link to="" class="btn btn--black">Get the book your way</router-link>
                            </div>
                            <div class="hero-thumb">
                                <img src="../assets/img/hero/ebook/ebook-hero-thumb2.png" class="img-fluid" alt="hero thumb">
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide" :style="bgImg">
                        <div class="hero-item">
                            <div class="hero-content">
                                <h6 class="hero-content-subtitle">it's time to change something</h6>
                                <h2 class="h1 hero-content-title">Learn to Design Beautiful & Simple Websites</h2>
                                <router-link to="" class="btn btn--black">Get the book your way</router-link>
                            </div>
                            <div class="hero-thumb">
                                <img src="../assets/img/hero/ebook/ebook-hero-thumb3.png" class="img-fluid" alt="hero thumb">
                            </div>
                        </div>
                    </div>
                    <!-- Optional controls -->
                    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                bgImg: {
                    backgroundImage: `url(${require("../assets/img/hero/ebook/ebook-hero-bg.jpg")})`
                },
                swiperOption: {
                    speed: 1500,
                    loop: true,
                    effect: 'fade',
                    autoplay: false,
                    spaceBetween : 30,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                }
            };
        }
    };
</script>
