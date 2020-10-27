<template>
    <section class="hero-branding bg-cover" :style="bgImg" id="home">
        <div class="container-fluid container-fluid--cp-150">
            <div class="row hero-startup">
                <div class="col-md-6">
                    <div class="hero-content">
                        <h2 class="h1 hero-content-title">Get Your Sites <br> A Kickstart Now!</h2>
                        <h6 class="hero-content-subtitle mt-20">There’s no need to be a technical professional to create sites with AeroLand. With simple guides, everything is easy!</h6>
                        <div class="slider-button mt-30">
                            <router-link to="" class="btn btn--green">Get Started</router-link>
                            <h6 class="sub-heading">
                                Questions? 
                                <router-link to="" class="hover-style-link hover-style-link--green">Talk to our team</router-link>
                            </h6>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 align-self-end">
                    <div class="startup-thumb">
                        <img src="../assets/img/hero/startup/startup-thumb.png" class="img-fluid" alt="startup-thumb">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data (){
            return {
                bgImg: {
                    backgroundImage: `url(${require('../assets/img/hero/startup/startup-bg.jpg')})`
                },
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/scss/variabls.scss';
    @import '../assets/scss/elements/hero-branding.scss';
    
    .hero-branding {
        // responsive
        @media #{$large-mobile}{
            height: 950px;
        }
    }
    .hero-startup {
        align-items: center;
        display: flex;
        height: 100vh;
        .startup-thumb {
            bottom: -32px;
            position: relative;
            z-index: 1;
            // responsive
            @media #{$tablet-device}{
                bottom: -15px;
            }
        }
    }
        .hero-content {
            // responsive
            @media #{$tablet-device}{
                width: 100%;
            }
            &-title,
            &-subtitle {
                color: $white;
            }
            .slider-button {
                display: flex;
                align-items: center;
                // responsive
                @media #{$tablet-device, $extra-small-mobile}{
                    display: block;
                }
            }
            .sub-heading {
                font-size: 15px;
                color: $white;
                padding-left: 20px;
                // responsive
                @media #{$tablet-device, $extra-small-mobile}{
                    padding-left: 0;
                    padding-top: 15px;
                }
            }
        }
</style>
