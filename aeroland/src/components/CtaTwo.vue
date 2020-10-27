<template>
    <div class="cta-image-area_two cta-image-bg-03 section-space--ptb_90">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="cta-image__content text-center">
                        <h3 class="cta-image__title mb-20">Ready to get started?</h3>
                        <div class="cta-image__text mb-40">Daily position tracking & competitor tracking, anytime, anywhere!</div>
                        <router-link :to="{ path: 'branding' }" class="ht-btn ht-btn-md">Start free trial</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: 'CtaTwo',
    }
</script>