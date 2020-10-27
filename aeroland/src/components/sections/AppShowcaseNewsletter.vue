<template>
    <div class="newsletter-section section-space--pb_120" id="contact">
        <div class="app-showcase-section__titel">
            <div class="vc_row-separator center_curve top">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M 0 0 Q 50 200 100 0"></path>
                </svg>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <ChartCircleTwo circleValue="03" class="section-space--mb_40 section-space--mt_30" />
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <NewsletterTwo/>
        </div>
    </div>
</template>

<script>
    import ChartCircleTwo from '../ChartCircleTwo'
    import NewsletterTwo from '../NewsletterTwo'
    export default{
        name: 'AppShowcaseNewsletter',
        components: {
            NewsletterTwo,
            ChartCircleTwo
        }
    };
</script>