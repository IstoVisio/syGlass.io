<template>
    <div class="main-container">

        <router-view></router-view>

        <!-- Navbar section -->
        <HeaderElement />

        <!-- breadcrumb strat -->
        <Breadcrumb>
            <template slot="breadcrumb">
                <div class="breadcrumb_box text-center">
                    <h2 class="breadcrumb-title">Call To Action</h2>
                    <!-- breadcrumb-list start -->
                    <ul class="breadcrumb-list">
                        <li class="breadcrumb-item"><router-link :to="{name:'HomeBranding'}">Home</router-link></li>
                        <li class="breadcrumb-item"><router-link :to="{name:'HomeBranding'}">Elements</router-link></li>
                        <li class="breadcrumb-item active">Call To Action</li>
                    </ul>
                    <!-- breadcrumb-list end -->
                </div>
            </template>
        </Breadcrumb>
        <!-- breadcrumb end -->

        <!-- call to action style one -->
        <CtaOne />

        <!-- call to action style four -->
        <CtaFour />

        <!-- call to action style two -->
        <CtaTwo />

        <!-- call to action style three -->
        <CtaThree />

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
    import CtaOne from '@/components/CtaOne'
    import CtaFour from '@/components/CtaFour'
    import CtaTwo from '@/components/CtaTwo'
    import CtaThree from '@/components/CtaThree'
    import FooterMain from '@/components/FooterMain'
    import OffcanvasSearchBox from '@/components/OffcanvasSearchBox'
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

    export default {
        name: 'ElementCta',
        components: {
            HeaderElement,
            Breadcrumb,
            CtaOne,
            CtaFour,
            CtaTwo,
            CtaThree,
            FooterMain,
            OffcanvasSearchBox,
            OffCanvasMobileMenu
        }
    }
</script>

