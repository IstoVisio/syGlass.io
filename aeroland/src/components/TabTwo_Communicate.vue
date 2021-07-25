<template>

    <div class="tabs-wrapper section-space--pt_120 pb-30" :class="BgGradient">
        <div class="container">
            <h2 class="section-title font-weight--light wow move-up text-center mtb-30 section-space--mtb_100">Science communication <br/>re-envisioned for the 21st century</h2>
            <br/>
            <div class="row">
                <div class="col-lg-4">
                    <slick class="slick1 tab-slider-nav"
                        :options="slickOptions">
                            <div class="tab-slider-nav--list wow move-up">
                                <i class="ht-slider-tab-icon fas fa-video"></i>
                                <h5>Create Immersive Lectures</h5>
                                <p>Show off your data in a brand new medium. Your voice and actions, along with the data, can be sent to anyone in the world.</p>
                            </div>
                            <div class="tab-slider-nav--list wow move-up">
                                <i class="ht-slider-tab-icon fas fa-retweet"></i>
                                <h5>Share data on the Data Zoo</h5>
                                <p>Browse through datasets, pull down narrations, and upload your own. The <a href="http://datazoo.syglass.io/" target="_blank"> syGlass Data Zoo</a> is a central repository for volumetric data.</p>
                            </div>
                            <div class="tab-slider-nav--list wow move-up">
                                <i class="ht-slider-tab-icon fas fa-globe"></i>
                                <h5>Meet With Others Online</h5>
                                <p>Dive deep into your data with others in Multiplayer, our online collaboration system.</p>
                            </div>
                    </slick>
                </div>
                <div class="col-lg-8">
                    <slick class="slick2"
                        :options="slickOptions2">
                            <div class="pro-large-img img-zoom wow move-up">
                                <img class="img-fluid " src="../assets/img/syglass/multiplayer/Presentations-avatar-pic1.jpg" alt="product-details" />
                            </div>
                            <div class="pro-large-img img-zoom wow move-up">
                                <img class="img-fluid " src="../assets/img/syglass/downsize/datazoo.png" alt="product-details" />
                            </div>
                            <div class="pro-large-img img-zoom wow move-up">
                                <img class="img-fluid" src="../assets/img/syglass/multiplayer/MultiPlayer-avatar-pic2.jpg" alt="product-details" />
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
                    asNavFor: '.slick2'
                },
                slickOptions2: {
                    arrows: false,
                    fade:true,
                    dots:true,
                    asNavFor: '.slick1'
                }
            };
        }
    };
</script>

<style scoped>

    .border {
        border-color: white;
        border-width: 20px;
    }

    
a {
  color: #44a3f2;
}

a:hover {
  text-decoration: underline;
}
</style>