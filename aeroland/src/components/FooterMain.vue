<template>
    <div class="footer-area-wrapper section-space--pb_60" :class="FooterStyle">
        <div class="footer-area">
            <div class="container">
                <div class="row footer-widget-wrapper">
                    <div class="col-lg-4 col-md-6 footer-widget">
                        <div class="footer-widget__logo mb-30">
                            <router-link to="/">
                                <img src="../assets/img/syglass/Artboardx.png" class="img-fluid logo-dark" alt="logo">
                            </router-link>
                        </div>
                        <ul class="footer-widget__list">
                            <li>128 Fountain View, Morgantown, WV 26505</li>
                            <li>
                                <a href="mailto:info@syglass.io" class="hover-style-link">info@syglass.io</a>
                            </li>
                            <li>
                                <a href="tel:(+1)3046773045" class="hover-style-link">(+1) 304 677 3045</a>
                            </li>
                            <li>
                                <a href="www.syglass.io" target="_blank" class="hover-style-link hover-style-link--green">www.syglass.io</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-md-6 footer-widget">
                        <h6 class="footer-widget__title mb-20">Who we are</h6>
                        <ul class="footer-widget__list">
                            <li>
                                <router-link to="/" class="hover-style-link">About us</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="hover-style-link">Before you go</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="hover-style-link">Online check in</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="hover-style-link">FAQ</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-md-6 footer-widget">
                        <h6 class="footer-widget__title mb-20">Quick links</h6>
                        <ul class="footer-widget__list">
                            <li>
                                <router-link to="/" class="hover-style-link">Terms of Payment</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="hover-style-link">Privacy Policy</router-link>
                            </li>
                            <li>
                                <router-link to="/" class="hover-style-link">Where to Find Us</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6 offset-lg-1 footer-widget">
                        <div class="twitter-feed-slider">
                            <div class="swiper-container twitter-feed-slider__container">
                                <div class="swiper-wrapper twitter-feed-slider__wrapper">
                                    <div class="swiper-slide twitter-feed-slider__single">
                                        <div class="tweet">
                                            <div class="tweet__text">
                                                "The ocean never ceases to amaze!" Feature: Ben Klea
                                                <a href="https://t.co/jSRMsZAdPW" target="_blank">https://t.co/jSRMsZAdPW</a>
                                                <a href="https://t.co/2iDReuyPMt" target="_blank">https://t.co/2iDReuyPMt</a>
                                            </div>
                                            <div class="tweet__info">
                                                <h6 class="tweet__heading">Unsplash</h6>
                                                <span class="tweet__date">May 07, 2020</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-copyright-area ">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6 text-center text-md-left">
                        <span class="copyright-text">© 2020 IstoVisio, Inc. All Rights Reserved.</span>
                    </div>
                    <div class="col-md-6 text-center text-md-right">
                        <ul class="list ht-social-networks solid-rounded-icon">
                            <li class="item">
                                <a href="https://www.facebook.com/" target="_blank" class="social-link"> <i class="fab fa-facebook social-link-icon"></i> </a>
                            </li>
                            <li class="item">
                                <a href="https://twitter.com/" target="_blank" class="social-link"> <i class="fab fa-twitter social-link-icon"></i> </a>
                            </li>
                            <li class="item">
                                <a href="https://www.instagram.com/" target="_blank" class="social-link"> <i class="fab fa-instagram social-link-icon"></i> </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FooterMain',
        props: ["FooterStyle"]
    }
</script>
