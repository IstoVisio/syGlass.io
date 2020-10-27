<template>
    <div class="row">
        <div v-for="item in items" :key="item.id" class="col-lg-4 col-md-6 wow move-up">
            <div class="service-grid">
                <div class="ht-service-box--two text-center style-03">
                    <router-link to="">
                        <div class="image mb-20">
                            <img :src="item.icon" class="img-fluid" alt="aeroland-startup-box-icon-01">
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
</template>

<script>
    export default {
        name: 'StartUpFeatureTwo',
        data (){
            return {
                items: [
                    {
                       icon: require('../assets/img/icons/aeroland-startup-box-icon-01.png'), 
                       heading: 'Web Development', 
                       text: 'Consider this app a platform for connecting people from everywhere based on their preferences.'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-startup-box-icon-02.png'), 
                        heading: 'Social Media', 
                        text: 'Consider this app a platform for connecting people from everywhere based on their preferences.'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-startup-box-icon-03.png'), 
                        heading: 'SEO Marketing', 
                        text: 'Consider this app a platform for connecting people from everywhere based on their preferences.'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-startup-box-icon-04.png'), 
                        heading: 'Keyword Search', 
                        text: 'Consider this app a platform for connecting people from everywhere based on their preferences.'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-startup-box-icon-05.png'), 
                        heading: 'Email Optimization', 
                        text: 'Consider this app a platform for connecting people from everywhere based on their preferences.'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-startup-box-icon-06.png'), 
                        heading: 'Web Design', 
                        text: 'Consider this app a platform for connecting people from everywhere based on their preferences.'
                    },
                ]
            }
        }
    }
</script>
