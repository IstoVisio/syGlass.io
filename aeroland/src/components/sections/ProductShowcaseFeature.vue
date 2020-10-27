<template>
    <div class="product-showcase-feature-wrapper section-space--pt_120">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="section-title-wrapper section-space--mb_60 wow move-up">
                        <h3 class="font-weight--light text-black">{{ sectionTitle }}</h3>
                    </div>
                </div>
                <div class="col-lg-8 wow move-up mtn-30">
                    <div v-for="(feature, index) in productFeature" :key="index" class="ht-product-service-box mt-30">
                        <div class="content-header">
                            <div class="icon">
                                <i :class="feature.icon"></i>
                            </div>
                            <h6 class="heading">{{ feature.title }}</h6>
                        </div>
                        <div class="content-body">
                            <div class="service_text">{{ feature.desc }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'ProductShowcase',
        data(){
            return {
                sectionTitle: 'Compact size, easy to carry on the road, high reading speed',
                productFeature: [
                    {
                        icon: 'fal fa-bolt',
                        title: 'High Quality',
                        desc: 'Made from imported high-quality materials that are inflammable and durable.',
                    },
                    {
                        icon: 'fal fa-music',
                        title: 'Pocket Size',
                        desc: 'Made from imported high-quality materials that are inflammable and durable.',
                    },
                    {
                        icon: 'fal fa-palette',
                        title: 'Various Options',
                        desc: 'There are up to 6 beautiful and classy colors for customers to choose from.',
                    },
                    {
                        icon: 'fal fa-retweet',
                        title: 'Transmission Speed',
                        desc: 'Transmitting data takes only a few seconds thanks to the fast data transfer tech.',
                    },
                ]
            }
        }
    };
</script>