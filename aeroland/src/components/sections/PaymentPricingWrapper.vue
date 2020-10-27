<template>
    <div class="payment-staps-pricing_wrapper payment-pricing-table-bg" id="pricing-section">
            <div class="position-relative section-space--pb_120">
                <div class="payment-staps-way-last_wrap section-space--pt_60">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <!-- payment Process Step Start -->
                                <div class="payment-process-step__three section-space--ptb_60">
                                    <div class="row align-items-center">
                                        <div class="col-lg-6 col-md-12  wow move-up">
                                            <div class="payment-process-step__media text-center">
                                                <img src="../../assets/img/features/aeroland-payment-image-03.png" class="img-fluid" alt="">
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-12  wow move-up">
                                            <div class="payment-process-step__content float-md-right">
                                                <div class="payment-process__inner">
                                                    <h4 class="font-weight--blod section-space--mb_40">Payment system access
                                                        <sup>03</sup>
                                                    </h4>
                                                    <div class="sub-text section-space--mb_40">
                                                        The access to payment account is conducted through 2-step authentication…
                                                    </div>

                                                    <div class="payment-conters section-space--mb_40">
                                                        <div class="row">
                                                            <div class="col-md-6 col-sm-6">
                                                                <div class="fun-fact--three ">
                                                                    <span class="fun-fact__count odometer">
                                                                        <ICountUp :endVal="950" />
                                                                    </span>
                                                                    <h6 class="fun-fact__text">Accounts created</h6>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6 col-sm-6">
                                                                <div class="fun-fact--three">
                                                                    <span class="fun-fact__count odometer">
                                                                        <ICountUp :endVal="820" />
                                                                    </span>
                                                                    <h6 class="fun-fact__text">Times dowloaded</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="payment-process-btn section-space--mb_40">
                                                        <a href="#" class="image-btn"><img src="../../assets/img/icons/aeroland-black-button-google-play.jpg" alt=""></a>
                                                        <a href="#" class="image-btn"><img src="../../assets/img/icons/aeroland-black-button-google-play.jpg" alt=""></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- payment Process Step End -->
                            </div>
                        </div>
                    </div>
                </div>

                <div class="section-spartor_svg_02  vc_row-separator tilt_left bottom"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" preserveAspectRatio="none" viewBox="0 0 4 0.266661">
                        <linearGradient id="svg-fill-5d3ab43082011">
                            <stop offset="0%" stop-color="#8481ec"></stop>
                            <stop offset="100%" stop-color="#a890f2"></stop>
                        </linearGradient>
                        <polygon points="4,0 4,0.266661 -0,0.266661" fill="url( #svg-fill-5d3ab43082011 )"></polygon>
                    </svg>
                </div>
            </div>

            <!--========= Pricing  Table Area ===========-->
            <div class="pricing-table-area section-space--pb_120 position-relative" id="pricing">
                <div class="pricing-table-title-area position-relative section-table_gradeient">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="section-title-wrapper text-center section-space--mb_60">
                                    <h2 class="section-title text-white font-width-light mb-15 wow move-up">Affordable for everyone!</h2>
                                    <p class="text-white wow move-up">Choose a suitable package for your site</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section-spartor_svg_02 vc_row-separator tilt_right top"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" preserveAspectRatio="none" viewBox="0 0 4 0.266661">
                        <linearGradient id="svg-fill-5d3ab430835b4">
                            <stop offset="0%" stop-color="#a890f2"></stop>
                            <stop offset="100%" stop-color="#8481ec"></stop>
                        </linearGradient>
                        <polygon points="4,0 4,0.266661 -0,0.266661" fill="url( #svg-fill-5d3ab430835b4 )"></polygon>
                    </svg>
                </div>

                <div class="pricing-table-content-area">
                    <div class="container">
                        <!-- PricingTwo component -->
                        <PricingTwo />
                    </div>
                </div>

            </div>
            <!--========= Pricing  Table End ===========-->
        </div>
</template>

<script>
    import PricingTwo from '../pricingTwo'
    import ICountUp from 'vue-countup-v2'

    export default {
        name: 'PaymentPricingWrapper',
        components: {
            PricingTwo,
            ICountUp
        },
        data(){
            return {
                delay: 300
            }
        }
    };
</script>