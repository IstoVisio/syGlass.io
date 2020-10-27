<template>
    <div class="row pricing-table-two">
        <div class="col-md-6 col-lg-4 pricing-table pricing-table--popular wow move-up" v-for="(pricing, index) in pricingTable" :key="index">
            <div class="pricing-table__inner">
                <div class="pricing-table__feature-mark" v-if="pricing.isPopular">
                    <span>Popular Choice</span>
                </div>
                <div class="pricing-table__header">
                    <div class="pricing-table__image">
                        <img :src="pricing.thumb" class="img-fluid" :alt="pricing.alt">
                    </div>
                    <h5 class="pricing-table__title">{{ pricing.title }}</h5>
                    <div class="pricing-table__price-wrap">
                        <h6 class="price">${{ pricing.value }}</h6>
                    </div>
                </div>
                <div class="pricing-table__body">
                    <div class="pricing-table__footer">
                        <button class="ht-btn ht-btn-default" :class="{'btn--green': pricing.active}">Get started</button>
                    </div>
                    <ul class="pricing-table__list text-left">
                        <li v-for="(list, index) in pricing.price" :key="index">{{ list }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'pricingTwo',
        data(){
            return {
                pricingTable: [
                    {
                        thumb: require('../assets/img/pricing/aeroland-pricing-image-06.png'),
                        title: 'Free',
                        value: '0',
                        alt: 'Pricing Thumb',
                        isPopular: false,
                        active: false,
                        price: ['03 projects', 'Quality & Customer Experience', 'Try for free, forever!']
                    },
                    {
                        thumb: require('../assets/img/pricing/aeroland-pricing-image-05.png'),
                        title: 'Personal',
                        value: '49',
                        alt: 'Pricing Thumb',
                        isPopular: true,
                        active: true,
                        price: ['30 project','Power And Predictive Dialing','Quality & Customer Experience','24/7 phone and email support']
                    },
                    {
                        thumb: require('../assets/img/pricing/aeroland-pricing-image-07.png'),
                        title: 'Group',
                        value: '99',
                        alt: 'Pricing Thumb',
                        isPopular: false,
                        active: false,
                        price: ['Unlimited projects','Quality & Customer Experience','24/7 phone and email support']
                    }
                ]
            }
        }
    }
</script>