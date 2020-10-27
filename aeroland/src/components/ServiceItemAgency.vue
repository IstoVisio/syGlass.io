<template>
    <div class="digital-agency-grid">
        <a href="#" class="digital-agency-assistance__warap wow move-up" v-for="(item, index) in services" :key="index">
            <div class="digital-agency-assistance__box">
                <div class="digital-agency-assistance__images">
                    <div class="images-midea">
                        <img :src="item.img" class="img-fluid" alt="service thumb">
                        <h5 class="heading">{{ item.heading }}</h5>
                    </div>
                </div>
                <div class="digital-agency-assistance__content mt-30 text-center">
                    <p>{{ item.desc }}</p>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
    export default{
        name: 'ServiceItemAgency',
        data(){
            return {
                services: [
                    {
                        img: require('../assets/img/agency/agency-service-01.jpg'),
                        heading: 'Website & app designing',
                        desc: 'Our technical experts have a flair for developing clean-coded websites based on customers’ needs, global guidelines and trends.'
                    },
                    {
                        img: require('../assets/img/agency/agency-service-02.jpg'),
                        heading: 'Marketing campaign & PR',
                        desc: 'Our presence on a wide range of social platforms leads to better marketing results, larger customer base & bigger opportunities.'
                    },
                    {
                        img: require('../assets/img/agency/agency-service-03.jpg'),
                        heading: 'Site ranking improvement',
                        desc: 'Studies showed that the choice of appropriate keywords for your sites content, portfolios, posts help increase the site ranking'
                    }
                ]
            }
        }
    };
</script>

<style lang="scss">

</style>