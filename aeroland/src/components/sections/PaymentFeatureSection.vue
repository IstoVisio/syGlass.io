<template>
    <div class="payment-feature-warpper position-relative section-space--pb_120" id="about">
        <div class="payment-feature">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title text-center section-space--mb_60">
                            <h2 class="font-weight--bold mb-15 wow move-up">Advantages AeroLand Brings</h2>
                            <span class="section-text wow move-up">You’ll need these advantages to take the lead.</span>
                        </div>
                    </div>
                </div>
                <!-- Payment Feature component -->
                <PaymentFeature />
            </div>
        </div>
        <div class="payment_feature_svg vc_row-separator tilt_left bottom"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" preserveAspectRatio="none" viewBox="0 0 4 0.266661">
                <linearGradient id="svg-fill-5d3a79b9bb254">
                    <stop offset="0%" stop-color="#5e61e7"></stop>
                    <stop offset="100%" stop-color="#9c7af2"></stop>
                </linearGradient>
                <polygon points="4,0 4,0.266661 -0,0.266661" fill="url( #svg-fill-5d3a79b9bb254 )"></polygon>
            </svg>
        </div>
    </div>
</template>

<script>
    import PaymentFeature from '../PaymentFeature'

    export default {
        name: 'PaymentFeatureSection',
        components: {
            PaymentFeature
        }
    };
</script>