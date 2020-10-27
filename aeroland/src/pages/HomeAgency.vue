<template>
	<div class="main-container">

		<!-- Navbar section -->
		<HeaderAgency />

		<!-- hero section -->
		<HeroDigitalAgency />

		<!-- service section -->
		<ServiceAgency />

		<!-- feature section -->
		<FeatureAgency />

		<!-- team section -->
		<TeamAgency />

		<!-- project gallery -->
		<ProjectAgency />

        <!-- newsletter section -->
        <NewsletterThree /> 

		<!-- contact us section -->
		<ContactAgency />

		<!-- footer section -->
        <FooterMain />

        <!-- offcanvas search component -->
        <OffcanvasSearchBox />

	</div>
</template>

<script>
	import HeaderAgency from "@/components/HeaderAgency";
	import HeroDigitalAgency from "@/components/sections/HeroDigitalAgency";
	import ServiceAgency from "@/components/sections/ServiceAgency";
	import FeatureAgency from "@/components/sections/FeatureAgency";
	import TeamAgency from "@/components/sections/TeamAgency";
	import ProjectAgency from "@/components/sections/ProjectAgency";
	import NewsletterThree from "@/components/NewsletterThree";
	import ContactAgency from "@/components/sections/ContactAgency";
	import FooterMain from "@/components/FooterMain";
	import OffcanvasSearchBox from "@/components/OffcanvasSearchBox";

	export default {
		name: "app",
		components: {
			HeaderAgency,
			HeroDigitalAgency,
			ServiceAgency,
			FeatureAgency,
			TeamAgency,
			ProjectAgency,
			NewsletterThree,
			ContactAgency,
            FooterMain,
            OffcanvasSearchBox	
		}
	};
</script>

<style lang="scss">
	@import '../assets/scss/_variabls.scss';
    @import '../assets/scss/page-section/_digital-agency.scss';
</style>

