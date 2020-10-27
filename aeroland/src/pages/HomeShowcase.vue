<template>
	<div class="main-container">
		<!-- Navbar section -->
		<HeaderShowcase />

		<!-- hero section -->
		<HeroAppShowcase />

		<!-- brand logo carousel -->
		<BrandLogoCarousel class="pb-0" />
		
		<!-- feature section -->
		<FeatureAppShowcase />

		<!-- download section -->
		<Download />

		<!-- three step process -->
		<ThreeStepProcessWrap />

		<!-- newsletter section -->
		<AppShowcaseNewsletter />

		<!-- footer section -->
        <FooterAppShowcase />

		<!-- overlay menu section -->
		<OverlayMenu/>
	</div>
</template>

<script>
	import HeaderShowcase from "../components/HeaderShowcase";
	import HeroAppShowcase from "../components/HeroAppShowcase";
	import BrandLogoCarousel from "../components/BrandLogoCarousel";
	import FeatureAppShowcase from "../components/FeatureAppShowcase";
	import Download from "../components/Download";
	import ThreeStepProcessWrap from "../components/ThreeStepProcessWrap";
	import AppShowcaseNewsletter from "../components/sections/AppShowcaseNewsletter";
	import FooterAppShowcase from "../components/FooterAppShowcase";
	import OverlayMenu from "../components/OverlayMenu";

	export default {
		name: "app",
		components: {
			HeaderShowcase,
			HeroAppShowcase,
			BrandLogoCarousel,
			FeatureAppShowcase,
			Download,
			ThreeStepProcessWrap,
			AppShowcaseNewsletter,
			FooterAppShowcase,
			OverlayMenu
		}
	};
</script>

