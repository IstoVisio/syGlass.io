<template>
    <div class="main-container">

        <router-view></router-view>

        <!-- Navbar section -->
        <HeaderElement />

        <!-- breadcrumb strat -->
        <Breadcrumb>
            <template slot="breadcrumb">
                <div class="breadcrumb_box text-center">
                    <h2 class="breadcrumb-title">Progress Circle</h2>
                    <!-- breadcrumb-list start -->
                    <ul class="breadcrumb-list">
                        <li class="breadcrumb-item"><router-link :to="{name:'HomeBranding'}">Home</router-link></li>
                        <li class="breadcrumb-item"><router-link :to="{name:'HomeBranding'}">Elements</router-link></li>
                        <li class="breadcrumb-item active">Progress Circle</li>
                    </ul>
                    <!-- breadcrumb-list end -->
                </div>
            </template>
        </Breadcrumb>
        <!-- breadcrumb end -->

        <!-- circle progress -->
        <div class="feature-list-progress-area  section-space--mt_60">
            <div class="container">
                <progressCircle />
            </div>
        </div>

        <!-- circle progress four col -->
        <div class="feature-list-progress-area progress-circle-element section-space--pt_60 section-space--pb_120">
            <div class="container">
                <progressCircleFour />
            </div>
        </div>

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
    import ProgressCircle from '@/components/ProgressCircle'
    import ProgressCircleFour from '@/components/ProgressCircleFour'
    import FooterMain from '@/components/FooterMain'
    import OffcanvasSearchBox from '@/components/OffcanvasSearchBox'
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

    export default {
        name: 'ElementProgressCircle',
        components: {
            HeaderElement,
            Breadcrumb,
            ProgressCircle,
            ProgressCircleFour,
            FooterMain,
            OffcanvasSearchBox,
            OffCanvasMobileMenu
        }
    }
</script>

