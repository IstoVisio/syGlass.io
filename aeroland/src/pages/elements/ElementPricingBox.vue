<template>
    <div class="main-container">

        <router-view></router-view>

        <!-- Navbar section -->
        <HeaderElement />

        <!-- breadcrumb strat -->
        <Breadcrumb>
            <template slot="breadcrumb">
                <div class="breadcrumb_box text-center">
                    <h2 class="breadcrumb-title">Pricing Box</h2>
                    <!-- breadcrumb-list start -->
                    <ul class="breadcrumb-list">
                        <li class="breadcrumb-item"><router-link :to="{name:'HomeBranding'}">Home</router-link></li>
                        <li class="breadcrumb-item"><router-link :to="{name:'HomeBranding'}">Elements</router-link></li>
                        <li class="breadcrumb-item active">Pricing Box</li>
                    </ul>
                    <!-- breadcrumb-list end -->
                </div>
            </template>
        </Breadcrumb>
        <!-- breadcrumb end -->

        <!-- pricing table one start -->
        <div class="pricing-table-area section-space--ptb_120">
            <div class="pricing-table-title-area position-relative">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title-wrapper text-center section-space--mb_60">
                                <h2 class="section-title font-width-light">Affordable for everyone!</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pricing-table-content-area">
                <div class="container">
                    <!-- pricing component -->
                    <PricingOne />
                </div>
            </div>
        </div>
        <!-- pricing table one end -->

        <!-- pricing table two start -->
        <div class="pricing-table-area section-space--ptb_120 bg-gray">
            <div class="pricing-table-title-area position-relative">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title-wrapper text-center section-space--mb_60">
                                <h2 class="section-title font-width-light">Affordable for everyone!</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pricing-table-content-area">
                <div class="container">
                    <!-- pricing component -->
                    <Pricing />
                </div>
            </div>
        </div>
        <!-- pricing table two end -->

        <!-- pricing table two start -->
        <div class="pricing-table-area section-space--ptb_120 border-top bg-gray">
            <div class="pricing-table-title-area position-relative">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title-wrapper text-center section-space--mb_60">
                                <h2 class="section-title font-width-light">Affordable for everyone!</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pricing-table-content-area">
                <div class="container">
                    <!-- pricing component -->
                    <pricingTwo />
                </div>
            </div>
        </div>
        <!-- pricing table two end -->

        <!-- pricing table three end -->
        <PricingThree />
        <!-- pricing table three end -->

        <!-- pricing table two start -->
        <div class="pricing-table-area section-space--ptb_120 bg-gray">
            <div class="pricing-table-title-area position-relative">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title-wrapper text-center section-space--mb_60">
                                <h2 class="section-title font-width-light">Affordable for everyone!</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pricing-table-content-area">
                <div class="container">
                    <!-- pricing component -->
                    <PricingFour />
                </div>
            </div>
        </div>
        <!-- pricing table two end -->
        
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
    import PricingOne from '@/components/PricingOne'
    import Pricing from '@/components/Pricing'
    import pricingTwo from '@/components/pricingTwo'
    import PricingThree from '@/components/PricingThree'
    import PricingFour from '@/components/PricingFour'
    import FooterMain from '@/components/FooterMain'
    import OffcanvasSearchBox from '@/components/OffcanvasSearchBox'
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

    export default {
        name: 'ElementPricingBox',
        components: {
            HeaderElement,
            Breadcrumb,
            PricingOne,
            Pricing,
            pricingTwo,
            PricingThree,
            PricingFour,
            FooterMain,
            OffcanvasSearchBox,
            OffCanvasMobileMenu
        }
    }
</script>

