<template>
    <div class="row">
        <div v-for="item in items" :key="item.id" class="col-lg-6 col-md-12 mb-25 wow move-up">
            <div class="ht-service-box--three">
                <div class="service-box-wrap">
                    <div class="image__media">
                        <img :src="item.icon" class="img-fluid" alt="Icon">
                    </div>
                    <div class="content">
                        <h5 class="heading font-weight--light">{{ item.heading }}</h5>
                        <div class="service_text">{{ item.text }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PaymentFeature',
        data (){
            return {
                items: [
                    {
                        icon: require('../assets/img/icons/aeroland-payment-box-icon-01.png'),
                         heading:'Simple order submit', 
                        text:'Consider this app a platform for connecting people from everywhere based on their preferences.'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-payment-box-icon-02.png'), 
                        heading:'Wireless payment', 
                        text:'Consider this app a platform for connecting people from everywhere based on their preferences.'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-payment-box-icon-03.png'), 
                        heading:'Hassle-free payment', 
                        text:'Consider this app a platform for connecting people from everywhere based on their preferences.'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-payment-box-icon-04.png'), 
                        heading:'Mobile app support', 
                        text:'Consider this app a platform for connecting people from everywhere based on their preferences.'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-payment-box-icon-05.png'), 
                        heading:'Quick account access', 
                        text:'Consider this app a platform for connecting people from everywhere based on their preferences.'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-payment-box-icon-06.png'), 
                        heading:'Online credit services', 
                        text:'Consider this app a platform for connecting people from everywhere based on their preferences.'
                    },
                ]
            }
        }
    }
</script>
