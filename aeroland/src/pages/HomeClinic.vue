<template>
    <div class="main-container">

        <!-- Navbar section -->
        <HeaderDefault />

        <!-- hero section -->
        <HeroClinic />

        <!-- clinic feature section -->
        <ClinicFeatureSection />

        <!-- clinic work step section -->
        <ClinicWorkStep />

        <!-- funfact section -->
        <ClinicCounterup />

        <!-- pricing section -->
        <ClinicPricing />

        <!-- newsletter section -->
        <Newsletter /> 

        <!-- footer section -->
        <FooterMain />

        <!-- offcanvas search component -->
        <OffcanvasSearchBox />

    </div>
</template>

<script>
    import HeaderDefault from '@/components/sections/HeaderDefault'
    import HeroClinic from '@/components/sections/HeroClinic'
    import ClinicFeatureSection from '@/components/sections/ClinicFeatureSection'
    import ClinicWorkStep from '@/components/sections/ClinicWorkStep'
    import ClinicCounterup from '@/components/sections/ClinicCounterup'
    import ClinicPricing from '@/components/sections/ClinicPricing'
    import Newsletter from '@/components/Newsletter'
    import FooterMain from '@/components/FooterMain'
    import OffcanvasSearchBox from '@/components/OffcanvasSearchBox'

    export default {
        name: 'app',
        components: {
            HeaderDefault,
            HeroClinic,
            ClinicFeatureSection,
            ClinicWorkStep,
            ClinicCounterup,
            ClinicPricing,
            Newsletter,
            FooterMain,
            OffcanvasSearchBox
        }
    }
</script>

<style lang="scss">
    @import '../assets/scss/_variabls.scss';
    @import '../assets/scss/page-section/_clinic.scss';
</style>