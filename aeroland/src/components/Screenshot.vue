<template>
    <div class="app-landing--center-slider-wrapper section-space--ptb_120 " id="gallery">
        <div class="app-landing-listing-title-wrap drak-area section-space--pb_60">
            <div class="container_fl">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="app-landing-title-contet">
                            <div class="title-details_one wow move-up">
                                <h2>+60</h2>
                                <h5>Screens</h5>
                            </div>
                            <div class="title-details_two wow move-up">
                                <h2>Download <br> to your phone</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 wow move-up">
                        <ul class="check-list green-check-list section-space--mb_50">
                            <li class="list-item">User-friendly, modern and intuitive </li>
                            <li class="list-item">Updated mobile design & features </li>
                            <li class="list-item">Beautiful icons, typography and images </li>
                            <li class="list-item">Extendable premium customer support </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <ScreenshotCarousel />
    </div>
</template>

<script>

    import ScreenshotCarousel from '../components/ScreenshotCarousel'
    export default{
        name: 'Screenshot',
        components: {
            ScreenshotCarousel
        }
    };
</script>

<style lang="scss">

</style>