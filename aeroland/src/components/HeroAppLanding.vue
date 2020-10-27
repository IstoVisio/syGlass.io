<template>
    <section class="hero-branding bg-cover" :style="bgImg" id="home">
        <div class="container-fluid container-fluid--cp-150">
            <div class="row">
                <div class="col-md-6">
                    <div class="hero-content">
                        <h2 class="h1 hero-content-title text-white">Exclusive Mobile <br> App Today!</h2>
                        <h6 class="hero-content-subtitle text-white mt-20">Apps designed by our experts can work perfectly on any devices with high responsiveness and performance.</h6>
                        <div class="slider-button mt-30">
                            <router-link :to="{ path: 'branding' }" class="btn btn--green"> 
                                <i class="fa fa-arrow-alt-to-bottom"></i>
                                Get Aeroland
                            </router-link>
                        </div>
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
                    backgroundImage: `url(${require('../assets/img/hero/app-landing/app-landing.jpg')})`
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
            height: 600px;
            padding-right: 125px;
        }
        @media #{$small-mobile}{
            height: 550px;
            padding-right: 30px;
        }
        @media #{$small-mobile}{
            padding-right: 0;
        }
    }
    .hero-content {
        @media #{$large-mobile}{
            width: 100%;
        }
    }
</style>
