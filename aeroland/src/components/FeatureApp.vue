<template>
    <div class="feature-list__one">
        <div class="row">
            <div v-for="(item, x) in items" :key="x" class="col-lg-6 wow move-up">
                <div class="grid-item animate">
                    <div class="ht-box-icon style-01">
                        <div class="icon-box-wrap">
                            <div class="image">
                                <img :src="item.icon" class="img-fluid" alt="aeroland-app-showcase-box-icon-image-01">
                            </div>
                            <div class="content">
                                <h6 class="heading">{{ item.heading }}</h6>
                                <div class="text">{{ item.text }}</div>
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
        name: 'FeatureApp',
        data (){
            return {
                items: [
                    {
                        icon: require('../assets/img/icons/aeroland-app-showcase-box-icon-image-01.png'), 
                        heading: 'Connect ideas', 
                        text: 'Consider this app a platform for connecting people  from everywhere based on their preferences.'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-app-showcase-box-icon-image-02.png'), 
                        heading: 'Make schedules', 
                        text: 'Consider this app a platform for connecting people from everywhere based on their preferences.'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-app-showcase-box-icon-image-03.png'), 
                        heading: 'Manage time', 
                        text: 'Consider this app a platform for connecting people from everywhere based on their preferences.'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-app-showcase-box-icon-image-04.png'), 
                        heading: 'Working mobile', 
                        text: 'Consider this app a platform for connecting people from everywhere based on their preferences.'
                    },
                ]
            }
        }
    }
</script>
