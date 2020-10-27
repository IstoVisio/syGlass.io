<template>
    <div class="banner-background-area banner-background-area-bg bg-img section-space--ptb_120 bg-cover" :style="bgImg">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="saas-banner-background">
                        <div class="content-wrapper">
                            <h2 class="heading_title text-white font-weight--light wow move-up">Digital marketing app on the go!</h2>
                            <div class="banner__text mt-20 text-white wow move-up">It’s easy to switch between your different devices</div>
                            <div class="saas-background__links section-space--mt_40 wow move-up">
                                <router-link :to="{path: 'Branding'}">
                                    <img src="../assets/img/icons/aeroland-button-google-play.jpg" class="img-fluid" alt="">
                                </router-link>
                                <router-link :to="{path: 'Branding'}">
                                    <img src="../assets/img/icons/aeroland-button-app-store.jpg" class="img-fluid" alt="">
                                </router-link>
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
        name: 'BannerBgOne',
        data () {
            return {
                bgImg: {
                    backgroundImage: `url(${require('../assets/img/bg/aeroland-sass-image-04.jpg')})`
                },
            }
        }
    };
</script>