<template>
    <div class="tabs-wrapper section-space--pt_120" :class="BgGradient">
	
        <div class="container">
		<h2 class="section-title font-weight--light mb-30 wow move-up text-center section-space--mb_100">Science communication <br/>re-envisioned for the 21st century</h2>
			<span class="section-text wow move-up">Meet with collaborators online, re-think the lab meeting, revolutionize education, re-define publication</span>
            <div class="row">
                <div class="col-lg-4">
					
                    <slick class="slick1 tab-slider-nav" :options="slickOptions">
                            <div class="tab-slider-nav--list wow move-up">
                                <i class="ht-slider-tab-icon fal fa-align-left"></i>
                                <h5>Create immersive lectures with syGlass Narrations</h5>
                                <p>Show off your data in a brand new medium. Your voice and actions, along with the data, can be sent to anyone in the world.  </p>
                            </div>
                            <div class="tab-slider-nav--list wow move-up">
                                <i class="ht-slider-tab-icon fal fa-rocket"></i>
                                <h5>Share data on syGlass Data Zoo</h5>
                                <p>Browse through datasets, pull down narrations, and upload your own. The Data Zoo is a central repository for volumetric data.</p>
                            </div>
                            <div class="tab-slider-nav--list wow move-up">
                                <i class="ht-slider-tab-icon fal fa-chart-pie"></i>
                                <h5>Meet With Others Online.</h5>
                                <p>Dive deep into your data with others in MultiView, our online collaboration system..</p>
                            </div>
                    </slick>
                </div>
                <div class="col-lg-8">
                    <slick class="slick2"
                        :options="slickOptions2">
                            <div class="pro-large-img img-zoom wow move-up">
                                <img class="img-fluid" src="../assets/img/syglass/narration.png" alt="product-details" />
                            </div>
                            <div class="pro-large-img img-zoom wow move-up">
                                <img class="img-fluid" src="../assets/img/syglass/20200522090256.png" alt="product-details" />
                            </div>
                            <div class="pro-large-img img-zoom wow move-up">
                                <img class="img-fluid" src="../assets/img/syglass/multiview.png" alt="product-details" />
                            </div>
                    </slick>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Slick from 'vue-slick';

    export default {
        name: 'TabTwo',
        props: ["BgGradient"],
        components: {
            Slick
        },
        data() {
            return {
                slickOptions: {
                    slidesToShow: 3,
                    focusOnSelect: true,
                    vertical: true,
                    asNavFor: '.slick2',
					
                },
                slickOptions2: {
					autoplay: true,
					autoplaySpeed: 3000,
                    arrows: false,
                    fade:true,
                    dots:true,
                    asNavFor: '.slick1',

                }
            };
        }
    };
</script>