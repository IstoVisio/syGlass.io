<template>
    <div class="main-container">
        <!-- Navbar section -->
        <Navbar />

        <!-- hero section -->
        <HeroBranding />

        <!-- about section -->
        <div class="box-image-area section-space--ptb_120" id="about">
            <div class="container">
                <div class="section-title-wrapper text-center section-space--mb_60 wow move-up">
                    <h2 class="section-title mb-15">Expand Your Business</h2>
                    <span class="section-text">Plan ahead to make progress and lead the trend.</span>
                </div>
                <!-- about component -->
                <AboutExpand />
            </div>
        </div>

        <!-- business analytics start -->
        <div class="feature-icon-list-area section-space--pb_120">
            <div class="container">
                <div class="section-title-wrapper text-center section-space--mb_100">
                    <h2 class="section-title mb-30">Receive real-time business analytics</h2>
                    <div class="video-button-container video-popup">
                        <silentbox-single src="https://www.youtube.com/watch?v=9No-FiEInLA">
                            <div class="video-play">
                                <i class="fa fa-play-circle"></i>
                                <span class="video-text">INTRO & DEMO VIDEO</span>
                            </div>
                        </silentbox-single>
                    </div>
                </div>
            </div>
            <!-- feature list component -->
            <FeatureList />
        </div>

        <!-- requirement section-->
        <RequireList />

        <!-- feature carousel -->
        <FeatureTwo />

        <!-- feature list progress bar -->
        <div class="feature-list-progress-area pb-30">
            <div class="container">
                <!-- progress feature component -->
                <ProgressCircle />
            </div>
        </div>
        <!-- feature list progress bar -->

        <!-- pricing section start-->
        <CurveShape>
            <template v-slot:bgcolor>
                <path style="fill: #f6f5f9;
                    stroke-miterlimit:10;" 
                    d="M3360.5,97.739c-242,0-480-48.375-480-48.375
                        S2647.5,0.5,2400.5,0.5s-480,48.375-480,48.375s-238,48.864-480,48.864s-480-48.375-480-48.375S727.5,0.5,480.5,0.5
                        S0.5,48.875,0.5,48.875V108h1920h1920V48.875C3840.5,48.875,3602.5,97.739,3360.5,97.739z"/>
            </template>
        </CurveShape>
        <div class="pricing-table-area bg-gray-2 pt-30" id="pricing">
            <div class="pricing-table-title-area position-relative">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title-wrapper text-center section-space--mb_60">
                                <h2 class="section-title font-width-light mb-15 wow move-up">Affordable for everyone!</h2>
                                <span class="section-text wow move-up">If you are planning on developing a product landing app or website, take a look at this beautiful-crafted and error-free HTML template.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pricing-table-content-area section-space--pb_90">
                <div class="container">
                    <!-- Pricing component -->
                    <Pricing />
                </div>
            </div>
        </div>
        <!-- pricing section end-->

        <!-- partner client section -->
        <div class="brand-logo-area section-space--ptb_120" id="partner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title-wrapper text-center section-space--mb_60">
                            <h2 class="section-title mb-15 wow move-up">Trusted services from top-rated company</h2>
                            <span class="section-text wow move-up">It is about us being able to offer help with the branding campaign, product presentation, and advertisement running across social media.</span>
                        </div>
                    </div>
                </div>
                <!-- brandlogo component -->
                <BrandLogo />
            </div>
        </div>

        <!-- newsletter section -->
        <Newsletter /> 

        <!-- footer section -->
        <FooterMain />

        <!-- offcanvas search component -->
        <OffcanvasSearchBox />

    </div>
</template>

<script>
    import Navbar from '../components/Navbar'
    import HeroBranding from '../components/HeroBranding'
    import AboutExpand from '../components/AboutExpand'
    import FeatureList from '../components/FeatureList'
    import RequireList from '../components/RequireList'
    import FeatureTwo from '../components/FeatureTwo'
    import ProgressCircle from '../components/ProgressCircle'
    import CurveShape from '../components/CurveShape'
    import Pricing from '../components/Pricing'
    import BrandLogo from '../components/BrandLogo'
    import Newsletter from '../components/Newsletter'
    import FooterMain from '../components/FooterMain'
    import OffcanvasSearchBox from '../components/OffcanvasSearchBox'

    export default {
        name: 'app',
        components: {
            Navbar,
            HeroBranding,
            AboutExpand,
            FeatureList,
            RequireList,
            FeatureTwo,
            ProgressCircle,
            CurveShape,
            Pricing,
            BrandLogo,
            Newsletter,
            FooterMain,
            OffcanvasSearchBox
        }
    }
</script>