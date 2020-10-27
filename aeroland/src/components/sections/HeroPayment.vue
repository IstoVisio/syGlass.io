<template>
    <div class="payment-hero__slider bg-cover" :style="bgImg" id="home">
            <div class="container-fluid container-fluid--cp-150 ">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="payment-hero-hero__content  section-space--mt_30">
                            <div class="row">
                                <div class="col-lg-5 wow move-up">
                                    <div class="payment-hero__text">
                                        <h1>The world's top secure payment platform </h1>
                                        <p class="text-hero section-space--mb_40">Authorized payment gateway from prestigious specialized financial service providers </p>
                                        <div class="hero-btn-wrap">
                                            <router-link to="" class="btn btn--green">Get started</router-link>
                                            <h6 class="sub-heading">Questions? 
                                                <router-link to="" class="hover-style-link hover-style-link--green">Talk to our team</router-link>
                                            </h6>
                                        </div>

                                    </div>
                                </div>
                                <div class="col-lg-7 wow move-up">
                                    <div class="payment-hero--images__midea">
                                        <img src="../../assets/img/hero/payments/aeroland-payment-hero-image.png" alt="hero thumb" class="img-fluid">
                                    </div>
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
        data (){
            return {
                bgImg: {
                    backgroundImage: `url(${require('../../assets/img/hero/payments/aeroland-payment-hero-bg.jpg')})`
                }
            }
        }
    }
</script>
