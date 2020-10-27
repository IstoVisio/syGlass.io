<template>
    <div class="main-container">

        <router-view></router-view>
        
        <!-- Navbar section -->
        <HeaderElement />

        <!-- breadcrumb strat -->
        <Breadcrumb>
            <template slot="breadcrumb">
                <div class="breadcrumb_box text-center">
                    <h2 class="breadcrumb-title">Box Icon</h2>
                    <!-- breadcrumb-list start -->
                    <ul class="breadcrumb-list">
                        <li class="breadcrumb-item"><router-link :to="{name:'HomeBranding'}">Home</router-link></li>
                        <li class="breadcrumb-item"><router-link :to="{name:'HomeBranding'}">Elements</router-link></li>
                        <li class="breadcrumb-item active">Box Icon</li>
                    </ul>
                    <!-- breadcrumb-list end -->
                </div>
            </template>
        </Breadcrumb>
        <!-- breadcrumb end -->

        <!-- feature app section -->
        <div class="feature-app-showcase section-space--ptb_90 border-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <FeatureApp />
                    </div>
                </div>
            </div>
        </div>

        <!-- startup features -->
        <div class="start-ups-feature section-space--ptb_60 ">
            <div class="container">
                <div class="feature-list__two">
                    <!-- start up feature component -->
                    <StartUpFeature />
                </div>
            </div>
        </div>

        <!-- sass feature section -->
        <SassFeature />

        <!-- startup features start -->
        <div class="start-ups-feature section-space--ptb_90">
            <div class="container">
                <!-- startup feature components -->
                <StartUpFeatureTwo />
            </div>
        </div>
        <!-- startup features end -->

        <!-- payment feature start -->
        <div class="payment-feature section-space--pt_120 section-space--pb_90 bg-gray">
            <div class="container">
                <!-- payment feature component -->
                <PaymentFeature />
            </div>
        </div>
        <!-- payment feature end -->

        <!-- ebook feature -->
        <div class="ebook-feature section-space--ptb_90">
            <div class="container">
                <!-- ebook feature component -->
                <EbookFeature />
            </div>
        </div>
        <!-- ebook feature -->

        <!-- clicic feature start -->
        <div class="clinic-feature section-space--pt_120 section-space--pb_90 bg-gray">
            <div class="container">
                <!-- clinic feature component -->
                <ClinicFeature />
            </div>
        </div>
        <!-- clicic feature end -->

        <!-- footer section -->
        <FooterMain />

        <!-- offcanvas search component -->
        <OffcanvasSearchBox />

        <!-- off-canvas mobile menu -->
        <OffCanvasMobileMenu />

    </div>
</template>

<script>
    import HeaderElement from '@/components/HeaderElement'
    import Breadcrumb from '@/components/Breadcrumb'
    import FeatureApp from '@/components/FeatureApp'
    import StartUpFeature from '@/components/StartUpFeature'
    import SassFeature from '@/components/SassFeature'
    import StartUpFeatureTwo from '@/components/StartUpFeatureTwo'
    import PaymentFeature from '@/components/PaymentFeature'
    import EbookFeature from '@/components/EbookFeature'
    import ClinicFeature from '@/components/ClinicFeature'
    import FooterMain from '@/components/FooterMain'
    import OffcanvasSearchBox from '@/components/OffcanvasSearchBox'
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

    export default {
        name: 'ElementBoxIcon',
        components: {
            HeaderElement,
            Breadcrumb,
            FeatureApp,
            StartUpFeature,
            SassFeature,
            StartUpFeatureTwo,
            PaymentFeature,
            EbookFeature,
            ClinicFeature,
            FooterMain,
            OffcanvasSearchBox,
            OffCanvasMobileMenu
        }
    }
</script>

