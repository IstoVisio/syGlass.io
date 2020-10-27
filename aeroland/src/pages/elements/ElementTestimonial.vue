<template>
    <div class="main-container">

        <router-view></router-view>

        <!-- Navbar section -->
        <HeaderElement />

        <!-- breadcrumb strat -->
        <Breadcrumb>
            <template slot="breadcrumb">
                <div class="breadcrumb_box text-center">
                    <h2 class="breadcrumb-title">Testimonials</h2>
                    <!-- breadcrumb-list start -->
                    <ul class="breadcrumb-list">
                        <li class="breadcrumb-item"><router-link :to="{name:'HomeBranding'}">Home</router-link></li>
                        <li class="breadcrumb-item"><router-link :to="{name:'HomeBranding'}">Elements</router-link></li>
                        <li class="breadcrumb-item active">Testimonials</li>
                    </ul>
                    <!-- breadcrumb-list end -->
                </div>
            </template>
        </Breadcrumb>
        <!-- breadcrumb end -->

        <!-- testimonial one component start -->
        <TestimonialOne />
        <!-- testimonial one component end -->

        <!-- testimonial two component start -->
        <div class="testimonial-slider-area section-space--ptb_120 bg-gray" id="testimonial">
            <div class="container">
                <TestimonialTwo />  
            </div>
        </div>
        <!-- testimonial two component end -->

        <!-- testimonial three component start -->
        <TestimonialThree />
        <!-- testimonial three component end -->

        <!-- footer component -->
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
    import TestimonialOne from '@/components/TestimonialOne'
    import TestimonialTwo from '@/components/TestimonialTwo'
    import TestimonialThree from '@/components/TestimonialThree'
    import FooterMain from '@/components/FooterMain'
    import OffcanvasSearchBox from '@/components/OffcanvasSearchBox'
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

    export default {
        name: 'ElementTestimonial',
        components: {
            HeaderElement,
            Breadcrumb,
            TestimonialOne,
            TestimonialTwo,
            TestimonialThree,
            FooterMain,
            OffcanvasSearchBox,
            OffCanvasMobileMenu
        }
    }
</script>

