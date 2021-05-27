<template>
<div class="tabs-wrapper startup-tab section-space--mt_60 section-space--pt_120">
        <div class="container-fluid">

            <div class="row">
                <div class="col-lg-12">
                        <div class="section-title-wrapper text-center section-space--mb_60 wow move-up">
                            <h2 class="font-weight--light text-white mb-20 wow move-up">Minimum system requirements for syGlass</h2>
                        </div>
                         </div>
                          </div>

<div class="row">

    <div class="col-lg-4">
                    <slick class="slick1 tab-slider-nav"
                        :options="slickOptions">
                            <div class="tab-slider-nav--list wow move-up">
                                <div class="image text-center">
                                    <img class="img-fluid" src="../assets/img/Workstation.png">
                                </div>
                               <!--<h5>PC Recommendations</h5>-->
                            </div>
                            <div class="tab-slider-nav--list wow move-up">
                                <div class="image text-center">
                                    <img class="img-fluid" src="../assets/img/VRSystem.png">
                                </div>
                                <!--<h5>Headset Compatibilities</h5>-->
                            </div>
                    </slick>
                </div>

    <div class="col-lg-8 justify-content-center">
                    <slick class="slick2"
                        :options="slickOptions2">
                            <div class="pro-large-img img-zoom wow move-up">
                                <PCRecommendations/>
                            </div>
                            <div class="pro-large-img img-zoom wow move-up">
                                <HeadsetCompatibility/>
                            </div>
                    </slick>
                </div>

                
                </div>

    <!--               
    <div class="ht-tab-wrap">
        <b-tabs v-model="tabIndex" class="ht-tab-menu wow move-up">
            <b-tab title="PC Recommendations" active class="cyclebutton">
                <PCRecommendations />  
            </b-tab>
            <b-tab title="Headset Compatibility" class="cyclebutton">
                <HeadsetCompatibility /> 
            </b-tab>
        </b-tabs>
        
        <div class="container" >
            <div class="scroll-to-me"> </div>
        </div>
    </div> -->

    </div>
    </div>
</template>

<script>
import HeadsetCompatibility from "../components/HeadsetCompatibility";
import PCRecommendations from "../components/PCRecommendations";
import Slick from 'vue-slick';
export default {
  name: "Recs",
  props: ["BgGradient"],
  components: {
    HeadsetCompatibility,
    PCRecommendations,
    Slick
  },
        data() {
            return {
                slickOptions: {
                    slidesToShow: 2,
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
/** .col-lg-12 {
  padding-right: 70px;
}*/

.tab-slider-nav--list {
    margin-bottom: 5px;
}

.container-fluid {
    padding-left: 170px;
    padding-right: 70px;
}

.slick-slide {
    width: fit-content;
}

.text-center {
    text-align: left !important;
}
</style>