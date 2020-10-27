<template>
    <div class="main-container box-page">
        <div class="site-wrapper-box">
            <div class="site-wrapper">
                <!-- Navbar section -->
                <HeaderEbook />

                <!-- hero section -->
                <HeroEbook />

                <!-- intro section -->
                <EbookIntro />

                <!-- Ebook Chanters section -->
                <EbookChanters />

                <!-- ebook testimonial section -->
                <EbookTestimonial />

                <!-- call to action section -->
                <CtaThree id="download" />

                <!-- Ebook Mailchimp Section -->
                <EbookMailchimp />

                <!-- footer bottom section -->
                <FooterBottom />

                <!-- offcanvas search component -->
                <OffcanvasSearchBox />
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderEbook from '@/components/HeaderEbook'
    import HeroEbook from '@/components/HeroEbook'
    import EbookIntro from '@/components/sections/EbookIntro'
    import EbookChanters from '@/components/sections/EbookChanters'
    import EbookTestimonial from '@/components/sections/EbookTestimonial'
    import CtaThree from '@/components/CtaThree'
    import EbookMailchimp from '@/components/sections/EbookMailchimp'
    import FooterBottom from '@/components/FooterBottom'
    import OffcanvasSearchBox from '@/components/OffcanvasSearchBox'

    export default {
        name: 'app',
        components: {
            HeaderEbook,
            HeroEbook,
            EbookIntro,
            EbookChanters,
            EbookTestimonial,
            CtaThree,
            EbookMailchimp,
            FooterBottom,
            OffcanvasSearchBox
        }
    }
</script>