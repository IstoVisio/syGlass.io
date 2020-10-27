<template>
    <div class="main-container">

        <router-view></router-view>

        <!-- Navbar section -->
        <HeaderElement />

        <!-- breadcrumb strat -->
        <Breadcrumb>
            <template slot="breadcrumb">
                <div class="breadcrumb_box text-center">
                    <h2 class="breadcrumb-title">Popup Video</h2>
                    <!-- breadcrumb-list start -->
                    <ul class="breadcrumb-list">
                        <li class="breadcrumb-item"><router-link :to="{name:'HomeBranding'}">Home</router-link></li>
                        <li class="breadcrumb-item"><router-link :to="{name:'HomeBranding'}">Elements</router-link></li>
                        <li class="breadcrumb-item active">Popup Video</li>
                    </ul>
                    <!-- breadcrumb-list end -->
                </div>
            </template>
        </Breadcrumb>
        <!-- breadcrumb end -->

        <!-- popup video style one start -->
        <div class="popup-video-wrapper section-space--pb_120 section-space--pt_90 ">
            <div class="container">
                <!-- popup video one component -->
                <PopUpVideoOne />
            </div>
        </div>
        <!-- popup video style one end -->

        <!-- popup video style two start -->
        <div class="popup-video-wrapper section-space--pb_120 section-space--pt_90 border-top">
            <div class="container">
                <!-- popup video one component -->
                <PopUpVideoTwo />
            </div>
        </div>
        <!-- popup video style two end -->

        <!-- popup video style three start -->
        <div class="popup-video-wrapper section-space--pb_120 border-top section-space--pt_90 ">
            <div class="container">
                <!-- popup video one component -->
                <PopUpVideoThree />
            </div>
        </div>
        <!-- popup video style three end -->

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
    import PopUpVideoOne from '@/components/PopUpVideoOne'
    import PopUpVideoTwo from '@/components/PopUpVideoTwo'
    import PopUpVideoThree from '@/components/PopUpVideoThree'
    import FooterMain from '@/components/FooterMain'
    import OffcanvasSearchBox from '@/components/OffcanvasSearchBox'
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

    export default {
        name: 'ElementPopupVideo',
        components: {
            HeaderElement,
            Breadcrumb,
            PopUpVideoOne,
            PopUpVideoTwo,
            PopUpVideoThree,
            FooterMain,
            OffcanvasSearchBox,
            OffCanvasMobileMenu
        }
    }
</script>

