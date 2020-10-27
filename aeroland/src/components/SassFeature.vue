<template>
    <div class="saas-feature section-space--ptb_90 bg-gray">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title text-center section-space--mb_60">
                        <h2 class="font-weight--light mb-15 wow move-up">Developed for Higher Business Growth</h2>
                        <span class="section-text wow move-up">Offer your business with the best assistance for growth.</span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div v-for="item in items" :key="item.id" class="col-lg-4 col-md-6 wow move-up">
                    <div class="service-grid">
                        <div class="ht-service-box--one style-03">
                            <router-link :to="'branding'">
                                <div class="image__media">
                                    <img :src="item.icon" class="img-fluid" alt="aeroland-app-showcase-box-icon-image-01">
                                </div>
                                <div class="content">
                                    <h6 class="heading">{{ item.heading }}</h6>
                                    <div class="service_text">{{ item.text }}</div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SassFeature',
        data (){
            return {
                items: [
                    {
                        icon: require('../assets/img/icons/aeroland-box-image-01.png'), 
                        heading: 'Reliable Services', 
                        text: 'Consider this app a platform for connecting people from everywhere based on their preferences.'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-box-image-02.png'), 
                        heading: 'Extensive Documentation', 
                        text: 'Consider this app a platform for connecting people from everywhere based on their preferences.'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-box-image-03.png'), 
                        heading: 'Customer Assistance', 
                        text: 'Consider this app a platform for connecting people from everywhere based on their preferences.'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-box-image-04.png'), 
                        heading: 'Guaranteed Growth', 
                        text: 'Consider this app a platform for connecting people from everywhere based on their preferences.'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-box-image-05.png'), 
                        heading: 'Plugins Integration', 
                        text: 'Consider this app a platform for connecting people from everywhere based on their preferences.'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-box-image-06.png'), 
                        heading: 'Employee Management', 
                        text: 'Consider this app a platform for connecting people from everywhere based on their preferences.'
                    },
                ]
            }
        }
    }
</script>
