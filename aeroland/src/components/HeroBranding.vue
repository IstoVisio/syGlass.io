<template>
    <section class="hero-branding bg-cover" :style="bgImg" id="home">
        <div class="container-fluid container-fluid--cp-150">
            <div class="hero-branding">
                <div class="hero-content">
                    <h2 class="h1 hero-content-title">Executive branding campaign</h2>
                    <h6 class="hero-content-subtitle mt-20">True branding starts from within. We create and adopt unique branding resolution to strengthen your business.</h6>
                    <div class="slider-button mt-30">
                        <router-link :to="{ path: 'branding' }" class="ht-btn ht-btn-md">Get a demo</router-link>
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
                    backgroundImage: `url(${require('../assets/img/hero/branding/branding.jpg')})`
                },
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/scss/variabls.scss';
    @import '../assets/scss/elements/hero-branding.scss'
</style>
