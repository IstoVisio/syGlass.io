<template>
    <div class="main-container">

        <router-view></router-view>
        <!-- Navbar section -->
        <HeaderAppLanding />

        <!-- hero section -->
        <HeroAppLanding />

        <!-- app landing feature component -->
        <CurveShape class="no-height">
            <template v-slot:bgcolor>
                <path style="fill: #2d1b6e;
                    stroke-miterlimit:10;" 
                    d="M3360.5,97.739c-242,0-480-48.375-480-48.375
                        S2647.5,0.5,2400.5,0.5s-480,48.375-480,48.375s-238,48.864-480,48.864s-480-48.375-480-48.375S727.5,0.5,480.5,0.5
                        S0.5,48.875,0.5,48.875V108h1920h1920V48.875C3840.5,48.875,3602.5,97.739,3360.5,97.739z"/>
            </template>
        </CurveShape>
        <AppLandingFeature />

        <!-- content banner two component -->
        <BannerTwo />

        <!-- screenshot component -->
        <CurveShape class="no-height">
            <template v-slot:bgcolor>
                <path style="fill: #33237A;
                    stroke-miterlimit:10;" 
                    d="M3360.5,97.739c-242,0-480-48.375-480-48.375
                        S2647.5,0.5,2400.5,0.5s-480,48.375-480,48.375s-238,48.864-480,48.864s-480-48.375-480-48.375S727.5,0.5,480.5,0.5
                        S0.5,48.875,0.5,48.875V108h1920h1920V48.875C3840.5,48.875,3602.5,97.739,3360.5,97.739z"/>
            </template>
        </CurveShape>
        <Screenshot />

        <!-- pricing box component -->
        <PricingThree />

        <!-- testimonial four component -->
        <CurveShape class="no-height">
            <template v-slot:bgcolor>
                <path style="fill: #161953;
                    stroke-miterlimit:10;" 
                    d="M3360.5,97.739c-242,0-480-48.375-480-48.375
                        S2647.5,0.5,2400.5,0.5s-480,48.375-480,48.375s-238,48.864-480,48.864s-480-48.375-480-48.375S727.5,0.5,480.5,0.5
                        S0.5,48.875,0.5,48.875V108h1920h1920V48.875C3840.5,48.875,3602.5,97.739,3360.5,97.739z"/>
            </template>
        </CurveShape>
        <TestimonialFour />

        <!-- partnership component -->
        <Partnership />

        <!-- footer component -->
        <FooterAppLanding />

    </div>
</template>

<script>
    import HeaderAppLanding from '../components/HeaderAppLanding'
    import HeroAppLanding from '../components/HeroAppLanding'
    import AppLandingFeature from '../components/AppLandingFeature'
    import BannerTwo from '../components/BannerTwo'
    import CurveShape from '../components/CurveShape'
    import Screenshot from '../components/Screenshot'
    import PricingThree from '../components/PricingThree'
    import TestimonialFour from '../components/TestimonialFour'
    import Partnership from '../components/Partnership'
    import FooterAppLanding from '../components/FooterAppLanding'

    export default {
        name: 'app',
        components: {
            HeaderAppLanding,
            HeroAppLanding,
            AppLandingFeature,
            BannerTwo,
            CurveShape,
            Screenshot,
            PricingThree,
            TestimonialFour,
            Partnership,
            FooterAppLanding
        }
    }
</script>

