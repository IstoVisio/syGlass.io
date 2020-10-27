<template>
    <div class="banner-image-area feature-app-landing drak-area section-space--pb_120">
        <div class="container_fl">
            <div class="row align-items-center">
                <div class="col-lg-6 order-1 order-lg-1 wow move-up">
                    <div class="banner-image__media">
                        <img src="../assets/img/features/aeroland-app-landing-image-04.png" class="img-fluid" alt="">
                    </div>
                </div>
                <div class="col-lg-6 order-2 order-lg-2">
                    <div class="app-landing__content">
                        <div class="app-landing__inner">
                            <h2 class="font-weight--bold mb-20 wow move-up">All Functional <br> Features Included</h2>
                            <div class="sub-text text section-space--mb_40 wow move-up">
                                We dream about building a mighty empire by designing responsive apps that inspire business initiatives as well as future forwarding visions. With simple guides, everything is easy!
                            </div>
                            <router-link :to="{ path: 'branding' }" class="ht-btn ht-btn-md section-space--mb_40 wow move-up">
                                Learn More
                            </router-link>
                            <h6 class="banner-image__helper-text">What’s next in AeroLand? 
                                <router-link :to="{ path: 'branding' }" class="hover-style-link hover-style-link--green wow move-up">
                                    Learn More
                                </router-link>
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
        name: 'BannerTwo',
    };
</script>

<style lang="scss">

</style>






