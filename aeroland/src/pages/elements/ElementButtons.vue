<template>
    <div class="main-container">

        <router-view></router-view>

        <!-- Navbar section -->
        <HeaderElement />

        <!-- breadcrumb strat -->
        <Breadcrumb>
            <template slot="breadcrumb">
                <div class="breadcrumb_box text-center">
                    <h2 class="breadcrumb-title">Buttons</h2>
                    <!-- breadcrumb-list start -->
                    <ul class="breadcrumb-list">
                        <li class="breadcrumb-item"><router-link :to="{name:'HomeBranding'}">Home</router-link></li>
                        <li class="breadcrumb-item"><router-link :to="{name:'HomeBranding'}">Elements</router-link></li>
                        <li class="breadcrumb-item active">Buttons</li>
                    </ul>
                    <!-- breadcrumb-list end -->
                </div>
            </template>
        </Breadcrumb>
        <!-- breadcrumb end -->

        <!-- button element -->
        <div class="button-warpper section-space--pt_120">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-lg-12">
                        <div class="ht-button-group">
                            <div class="single-button-group section-space--mb_100">
                                <h5>Button</h5>
                                <div class="button-group-wrap">
                                    <button class="ht-btn ht-btn-xs">Extra Small</button>
                                    <button class="ht-btn ht-btn-sm">Small Size</button>
                                    <button class="ht-btn ht-btn-md">Standard Size</button>
                                    <button class="ht-btn ht-btn-lg">Large Size</button>
                                    <div class="button-wrap">
                                        <button class="ht-btn ht-btn-md ht-btn-custom">Custom Size</button>
                                    </div>
                                    <div class="button-wrap">
                                        <button class="ht-btn ht-btn-md ht-btn-full">Full Wide</button>
                                    </div>
                                </div>
                            </div>
                            <div class="single-button-group section-space--mb_100">
                                <h5>Button Style</h5>
                                <div class="button-group-wrap">
                                    <button class="ht-btn ht-btn-md">Standard Size</button>
                                    <button class="ht-btn ht-btn-md ht-btn--outline">Solid Style</button>
                                    <button class="ht-btn ht-btn-md ht-btn--no-round">Rectangle</button>
                                    <button class="ht-btn ht-btn-md ht-btn--circle">Bullet</button>

                                </div>
                            </div>
                            <div class="single-button-group section-space--mb_100">
                                <h5>Unlimited Skin</h5>
                                <div class="button-group-wrap">
                                    <button class="btn">Primary Button</button>
                                    <button class="btn btn--green">Secondary Button</button>
                                    <button class="btn btn--black">Custom Color</button>
                                    <button class="btn btn--white">White Button</button>
                                    <button class="btn btn--gradient">Gradient Button</button>
                                </div>
                            </div>
                            <div class="single-button-group section-space--mb_100">
                                <h5>With Ton Of Icons</h5>
                                <div class="button-group-wrap">
                                    <button class="ht-btn ht-btn-md">Standard Size <span class="btn-icon"><i class="far fa-bolt"></i></span></button>
                                    <button class="ht-btn ht-btn-md">Standard Size <span class="btn-icon"><i class="far fa-arrow-right"></i></span></button>
                                    <button class="ht-btn ht-btn-md">Standard Size <span class="btn-icon"><i class="far fa-binoculars"></i></span></button>
                                    <button class="ht-btn ht-btn-md"><span class="btn-icon ml-0 mr-2"><i class="far fa-code-merge"></i></span> Standard Size </button>
                                </div>
                            </div>
                            <div class="single-button-group section-space--mb_100">
                                <h5>With Image</h5>
                                <div class="button-group-wrap">
                                    <button class="image-btn"><img src="../../assets/img/icons/aeroland-black-button-google-play.jpg" alt=""></button>
                                    <button class="image-btn"><img src="../../assets/img/icons/aeroland-black-button-google-play.jpg" alt=""></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- button element -->

        <!-- Footer section -->
        <FooterMain class="border-top" />

        <!-- offcanvas search component -->
        <OffcanvasSearchBox />

        <!-- off-canvas mobile menu -->
        <OffCanvasMobileMenu />

    </div>
</template>

<script>
    import HeaderElement from '@/components/HeaderElement'
    import Breadcrumb from '@/components/Breadcrumb'
    import FooterMain from '@/components/FooterMain'
    import OffcanvasSearchBox from '@/components/OffcanvasSearchBox'
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

    export default {
        name: 'ElementButtons',
        components: {
            HeaderElement,
            Breadcrumb,     
            FooterMain,
            OffcanvasSearchBox,
            OffCanvasMobileMenu
        }
    }
</script>

