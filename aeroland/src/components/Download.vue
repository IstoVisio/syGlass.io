<template>
    <div class="feature-app-showcase section-space--pb_90">
        <div class="container_fl">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="app-showcase-image__media wow move-up">
                        <img :src="thumbnail" class="img-fluid" alt="thumbnail">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="app-showcase__content">
                        <div class="app-showcase__inner">
                            <h4 class="font-weight--light wow move-up">{{ title }}</h4>
                            <div class="sub-text section-space--mb_40 wow move-up">{{ desc }}</div>
                            <div class="btn-sowcase section-space--mb_40 wow move-up">
                                <router-link to="/showcase" class="ht-btn ht-btn-md"><i class="mr-3 fa fa-play"></i>Intro & demo video </router-link>
                            </div>
                            <h6 class="sub-heading  wow move-up">What’s next in AeroLand? <router-link to="/showcase" class="hover-style-link       hover-style-link--green">Learn more</router-link>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'Download',
        data (){
            return {
                thumbnail: require("../assets/img/banners/aeroland-app-showcase-image-02.png"),
                title: 'Download Now for Free',
                desc: 'More than 35 social platforms are integrated into the app. Cross-platform sharing & displaying followers and likes are easy and convenient with just a few clicks.',
            }
        }
    };
</script>

<style lang="scss">

</style>