<template>
    <div class="faq-banner-area  gray-gradient section-space--pb_90 position-relative ">
        <div class="container_fl">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="col-06__left">
                        <div class="section-title-wrapper section-space--mb_60 wow move-up">
                            <h2 class="section-title font-weight--light">Carry out Marketing <br> Initiatives</h2>
                        </div>
                        <div class="faq-wrapper  wow move-up">
                            <!-- accordion component -->
                            <Accordion />
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 wow move-up">
                    <div class="faq-banner__media">
                        <img src="../assets/img/banners/aeroland-sass-image-01.png" class="img-fluid" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Accordion from "../components/Accordion"
    export default{
        name: 'FaqBanner',
        components: {
            Accordion
        }
    };
</script>