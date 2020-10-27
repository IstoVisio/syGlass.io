<template>
    <div class="main-container">

        <router-view></router-view>

        <!-- Navbar section -->
        <HeaderElement />

        <!-- breadcrumb strat -->
        <Breadcrumb>
            <template slot="breadcrumb">
                <div class="breadcrumb_box text-center">
                    <h2 class="breadcrumb-title">Counters</h2>
                    <!-- breadcrumb-list start -->
                    <ul class="breadcrumb-list">
                        <li class="breadcrumb-item"><router-link :to="{name:'HomeBranding'}">Home</router-link></li>
                        <li class="breadcrumb-item"><router-link :to="{name:'HomeBranding'}">Elements</router-link></li>
                        <li class="breadcrumb-item active">Counters</li>
                    </ul>
                    <!-- breadcrumb-list end -->
                </div>
            </template>
        </Breadcrumb>
        <!-- breadcrumb end -->

        <!-- funfact one start -->
        <div class="fun-fact-wrapper section-space--ptb_120">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title text-center section-space--mb_60">
                            <h2 class="font-weight--light mb-15">Style 01</h2>
                        </div>
                    </div>
                </div>
                <!-- funfact component -->
                <FunFactOne />
            </div>
        </div>
        <!-- funfact one end -->

        <!-- footer section -->
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
    import FunFactOne from '@/components/FunFactOne'
    import FooterMain from '@/components/FooterMain'
    import OffcanvasSearchBox from '@/components/OffcanvasSearchBox'
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

    export default {
        name: 'ElementCounters',
        components: {
            HeaderElement,
            Breadcrumb,
            FunFactOne,
            FooterMain,
            OffcanvasSearchBox,
            OffCanvasMobileMenu
        }
    }
</script>

