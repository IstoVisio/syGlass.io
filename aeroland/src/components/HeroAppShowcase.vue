<template>
    <section class="hero-app-showcase bg-cover" :style="bgImg" id="home">
        <div class="hero-item text-center">
            <div class="hero-content">
                <h2 class="h1 hero-content-title font-weight-light">Download Our App Today</h2>
                <h6 class="hero-content-subtitle">Responsive app for all kinds of purposes.</h6>
                <div class="hero-content-btn section-space--mt_40">
                    <router-link to=""><img src="../assets/img/icons/aeroland-button-google-play.jpg" class="img-fluid" alt=""></router-link >
                    <router-link to=""><img src="../assets/img/icons/aeroland-button-app-store.jpg" class="img-fluid" alt=""></router-link >
                </div>
            </div>
            <div class="hero-thumb">
                <img src="../assets/img/hero/showcase/showcase-hero-thumb.png" class="img-fluid" alt="hero thumb">
            </div>
        </div>
        <div class="vc_row-separator center_curve_alt bottom">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M 0 0 L0 100 L100 100 L100 0 Q 50 200 0 0"></path>
            </svg>
        </div>
    </section>
</template>

<script>
    export default {
        data (){
            return {
                bgImg: {
                    backgroundImage: `url(${require("../assets/img/hero/showcase/showcase-hero-bg.jpg")})`
                },
            }
        }
    }
</script>