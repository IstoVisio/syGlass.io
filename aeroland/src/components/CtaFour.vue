<template>
    <div class="banner-background-area banner-gradient-bg section-space--ptb_120">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="banner-content__start-up">
                        <div class="content-wrapper text-center">
                            <h2 class="heading_title text-white font-weight--bold wow move-up">SEO marketing app on your mobile!</h2>
                            <div class="banner__text mt-10 text-white wow move-up">The power is in your hands now.</div>
                            <div class="start-ups-background__links section-space--mt_40 wow move-up">
                                <router-link :to="{ path: 'branding' }" class="mb-2 mb-sm-0">
                                    <img src="../assets/img/icons/aeroland-button-google-play.jpg" class="img-fluid" alt="playstore btn">
                                </router-link>
                                <router-link :to="{ path: 'branding' }">
                                    <img src="../assets/img/icons/aeroland-button-app-store.jpg" class="img-fluid" alt="applestore btn">
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
        name: 'CtaFour',
    }
</script>

