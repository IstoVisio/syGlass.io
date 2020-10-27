<template>
	<div class="main-container">
		<!-- Navbar section -->
		<HeaderProductShowcase />

		<!-- hero section -->
		<HeroProductShowcase />

		<!-- about section -->
		<AboutProductShowcase />

		<!-- product overview -->
		<ProductOverview />

		<!-- feature area -->
		<ProductShowcaseFeature />

		<!-- video section -->
		<ProductShowcaseVideo />

		<!-- work progress section -->
		<ProductShowcaseWorkProgress />

		<!-- testimonial section -->
		<TestimonialThree />

		<!-- brandlogo section -->
		<BrandLogoCarouselTwo brandlogo="bg-gray-2 section-space--pb_90" />

		<!-- footer section -->
        <FooterMain />

	</div>
</template>

<script>
	import HeaderProductShowcase from "../components/sections/HeaderProductShowcase";
	import HeroProductShowcase from "../components/sections/HeroProductShowcase";
	import AboutProductShowcase from "../components/sections/AboutProductShowcase";
	import ProductOverview from "../components/sections/ProductOverview";
	import ProductShowcaseFeature from "../components/sections/ProductShowcaseFeature";
	import ProductShowcaseVideo from "../components/sections/ProductShowcaseVideo";
	import ProductShowcaseWorkProgress from "../components/sections/ProductShowcaseWorkProgress";
	import TestimonialThree from "../components/TestimonialThree";
	import BrandLogoCarouselTwo from "../components/BrandLogoCarouselTwo";
	import FooterMain from "../components/FooterMain";

	export default {
		name: "HomeProductShowcase",
		components: {
			HeaderProductShowcase,
			HeroProductShowcase,
			AboutProductShowcase,
			ProductOverview,
			ProductShowcaseFeature,
			ProductShowcaseVideo,
			ProductShowcaseWorkProgress,
			TestimonialThree,
			BrandLogoCarouselTwo,
			FooterMain
		}
	};
</script>
