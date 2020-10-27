<template>
	<div class="main-container">
		<!-- Navbar section -->
		<HeaderSass />

		<!-- hero section -->
		<HeroSass class="hero-sass" />

		<!-- Gradation section start -->
		<div class="icon-process-area section-space--pb_120" id="about">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <Gradation />
                    </div>
                </div>
            </div>
        </div>

		<!-- faq banner start -->
		<FaqBanner />

		<!-- banner one component -->
		<CurveShape class="curve-bottom">
            <template v-slot:bgcolor>
                <path style="fill: #f6f5f9;
                    stroke-miterlimit:10;" 
                    d="M3360.5,97.739c-242,0-480-48.375-480-48.375
                        S2647.5,0.5,2400.5,0.5s-480,48.375-480,48.375s-238,48.864-480,48.864s-480-48.375-480-48.375S727.5,0.5,480.5,0.5
                        S0.5,48.875,0.5,48.875V108h1920h1920V48.875C3840.5,48.875,3602.5,97.739,3360.5,97.739z"/>
            </template>
        </CurveShape>
		<BannerOne class="banner-one-sass" />

		<!-- sass feature component -->
		<SassFeature class="gray-gradient" id="service"/>

		<!-- call to action component -->
		<CurveShape class="curve-bottom">
            <template v-slot:bgcolor>
                <path style="fill: #f6f5f9;
                    stroke-miterlimit:10;" 
                    d="M3360.5,97.739c-242,0-480-48.375-480-48.375
                        S2647.5,0.5,2400.5,0.5s-480,48.375-480,48.375s-238,48.864-480,48.864s-480-48.375-480-48.375S727.5,0.5,480.5,0.5
                        S0.5,48.875,0.5,48.875V108h1920h1920V48.875C3840.5,48.875,3602.5,97.739,3360.5,97.739z"/>
            </template>
        </CurveShape>
        <CtaOne />

		<!-- fun facts section -->
		<div class="fun-fact-wrapper section-space--pb_120">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title text-center section-space--mb_60">
                            <h2 class="font-weight--light mb-15 move-up">No stories, facts only</h2>
                            <span class="section-text wow move-up">Better software promotes overall sales & net profits</span>
                        </div>
                    </div>
                </div>
				<!-- fun fact component -->
				<FunFactOne />
            </div>
		</div>

		<!-- testimonial section -->
		<div class="testimonial-slider-area section-space--ptb_120 bg-gray" id="testimonial">
            <div class="container">
				<div class="section-title text-center section-space--mb_60">
					<h2 class="section-title font-weight--light wow move-up">Don’t take our word for it</h2>
				</div>
                <TestimonialTwo />  
            </div>
        </div>

		<!-- brand logo carousel -->
		<BrandLogoCarousel />

		<!-- banner component -->
		<BannerBgOne />

		<!-- footer section -->
        <FooterMain />

	</div>
</template>

<script>
	import HeaderSass from "../components/HeaderSass";
	import HeroSass from "../components/HeroSass";
	import Gradation from "../components/Gradation";
	import FaqBanner from "../components/FaqBanner";
	import CurveShape from "../components/CurveShape";
	import BannerOne from "../components/BannerOne";
	import SassFeature from "../components/SassFeature";
	import CtaOne from "../components/CtaOne";
	import FunFactOne from "../components/FunFactOne";
	import TestimonialTwo from "../components/TestimonialTwo";
	import BrandLogoCarousel from "../components/BrandLogoCarousel";
	import BannerBgOne from "../components/BannerBgOne";
	import FooterMain from "../components/FooterMain";

	export default {
		name: "app",
		components: {
			HeaderSass,
			HeroSass,
			Gradation,
			CurveShape,
			FaqBanner,
			BannerOne,
			SassFeature,
			CtaOne,
			FunFactOne,
			TestimonialTwo,
			BrandLogoCarousel,
			BannerBgOne,
			FooterMain
		}
	};
</script>
