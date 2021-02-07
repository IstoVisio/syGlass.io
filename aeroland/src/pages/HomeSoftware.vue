<template>
	<div class="main-container">
		<router-view></router-view>
		<!-- Navbar section -->
		<HeaderSoftware />

		<!-- Landing Image >
		<div class="swiper-landing-image" :style="bgImg" width="100%" align="center">
			<img src="../assets/img/syglass/occulus.png" class="swiper-landing-image" style="text-align: center; margin-top: 105px;" height="400">
			<h1 style="margin-top: 35px;">Welcome to syGlass</h1>
		</div-->

		<!-- hero section -->
		<HeroSoftware />
		

        <!-- business analytics start -->
        <div class="feature-icon-list-area section-space--pt_120 "  id="visualize" >
            <div class="container">
                <div class="section-title-wrapper text-center section-space--mb_100">
                    <h2 class="section-title font-weight--light mb-30 wow move-up">Your data in its natural form... grab it!</h2>
					<p> syGlass is a software product that allows you to render large, volumetric data in its true, three-or-four dimensional form. Modern imaging techniques leave you inundated with large volumetric data, but syGlass can prepare up to 20 TB of data at a time, without crashing.

					Data is scaled to allow you to see minute details in extreme detail. Perform analysis with enhanced precision, then annotate the data in syGlass with a vast array of practical tools.

					syGlass has a mission to help scientists, researchers, and educators like you reach your full potential by providing the tools and technology you need to explore, understand, and communicate your data.
					</p>

					<div class="video-button-container video-popup">
						<silentbox-single src="https://youtu.be/ieCdFXgDXZ8">
							<div class="video-play">
								<i class="fa fa-play-circle"></i>
								<span class="video-text">INTRO & DEMO VIDEO</span>
							</div>
						</silentbox-single>
					</div>
				</div>
			</div>
		</div>

        
		<div class="container">
			<div class="row">
				<div class="col">
					<img src="../assets/img/syglass/20200522095127.png" class="img-fluid" alt="hero thumb">
				</div>
				<div class="col">
					<img src="../assets/img/syglass/20200522163458.png" class="img-fluid" alt="hero thumb">
				</div>
				<div class="col">
					<img src="../assets/img/syglass/2020-05-22_10-11-33.png" class="img-fluid" alt="hero thumb">
				</div>
				<div class="col" >
					<img src="../assets/img/syglass/20200521232011.png" class="img-fluid" alt="hero thumb">
				</div>
			</div>
		</div>
					
        <!-- tab two components -->
        <TabTwo  id="analyze"/>
		
		<TestimonialOne />

		<div class="container" >
            <div class="row">
                    <div class="col">
						<img src="../assets/img/syglass/20200522090256.png" class="img-fluid" alt="hero thumb">
					</div>
					<div class="col">
						<img src="../assets/img/syglass/2020-05-22_10-10-43.png" class="img-fluid" alt="hero thumb">
					</div>
					<div class="col">
						<img src="../assets/img/syglass/20181022162002.png" class="img-fluid" alt="hero thumb">
					</div>
					<div class="col">
						<img src="../assets/img/syglass/2020-05-20_11-57-50.png" class="img-fluid" alt="hero thumb">
					</div>
				</div>
			</div>



		<!-- call to action component -->
        <CtaThree  id="view"/>

		<PortfolioGridCaption />
		
		<!-- FAQ -->
        <!-- accordion section -->
        <div class="software-accordion-wrapper section-space--pt_120 " id="faq">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title-wrapper text-center section-space--mb_60">
                            <h2 class="section-title font-weight--light mb-10 wow move-up">Frequently Asked Questions</h2>
                            <span class="section-text wow move-up">It’s our pleasure to answer any questions you have</span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="faq-wrapper">
                            <!-- accordion component -->
                            <Accordion />
                        </div>
                    </div>
					<div class="col">
						<div class="peatures_image-wrap section-space--mb_40">
								<div class="image text-center wow move-up">
									<img class="img-fluid" src="../assets/img/syglass/graphs.png" alt="contact thumb">
								</div>
						</div>
					</div>
                </div>
            </div>
        </div>


        <!-- bannar area NEED TO FIX THE ROTATING CUBE GIF! THERE IS A SKIP AT THE END, MAKE IT ROTATE ENDLESSLY-->
        <div class="software-contact__images">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="software-contact-images__midea text-center wow move-up">
                            <img src="../assets/img/syglass/cropped-cube-2.gif" alt="images" width="200" height="200" class="img-fluid">
                        </div>
                    </div>
                </div>
            </div>
        </div>

		<ContactForm />

		<!-- footer section -->
        <FooterMain />

        <!-- offcanvas search component -->
        <OffcanvasSearchBox />



	</div>
</template>

<script>
	import HeaderSoftware from "../components/HeaderSoftware";
	import HeroSoftware from "../components/HeroSoftware";
	import FeatureList from "../components/FeatureList";
	import TabTwo from "../components/TabTwo";
	import ProgressBar from "../components/ProgressBar";
	import CurveShape from "../components/CurveShape";
	import CtaThree from "../components/CtaThree";
	import FunFactOne from "../components/FunFactOne";
	import Accordion from "../components/Accordion";
	import FooterMain from "../components/FooterMain";
	import OffcanvasSearchBox from "../components/OffcanvasSearchBox";
	import AboutExpand from "../components/AboutExpand";
	import BannerTwo from "../components/BannerTwo";
	import PortfolioGridCaption from "../pages/portfolio/PortfolioGridCaption";
	import ContactForm from "../components/ContactForm";
	import TestimonialOne from "../components/TestimonialOne";

	export default {
		data() {
				return {
						
						swiperOption: {
								speed: 1500,
								loop: true,
								effect: 'fade',
								autoplay: false,
								spaceBetween : 10,
								navigation: {
										nextEl: '.swiper-button-next',
										prevEl: '.swiper-button-prev'
								},
						},
						swiperImages: {
								speed: 1500,
								loop: true,
								effect: 'fade',
								autoplay: true,
								slidesPerView: 'auto',
								loopedSlides: 3,
								spaceBetween : 10,
								navigation: {
										nextEl: '.swiper-button-next',
										prevEl: '.swiper-button-prev'
								},
						}
				};
		},
		name: "app",
		components: {
			HeaderSoftware,
			HeroSoftware,
            FeatureList,
						AboutExpand,
            TabTwo,
            ProgressBar,
			CurveShape,
			BannerTwo ,
			CtaThree,
            FunFactOne,
            Accordion,
            FooterMain,
            OffcanvasSearchBox	,
			ContactForm,
			PortfolioGridCaption,
			TestimonialOne
		}
	};
</script>



<style lang="scss" scoped>
    @import '../assets/scss/variabls.scss';
    @import '../assets/scss/elements/hero-software.scss';
</style>
