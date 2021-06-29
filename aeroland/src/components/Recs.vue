<template>
<div class="tabs-wrapper startup-tab section-space--mt_60 section-space--pt_120">
        <div class="container">

            <div class="row">
                <div class="col-lg-12">
                        <div class="section-title-wrapper text-left section-space--mb_60 wow move-up">
                            <h2 class="check-list font-weight--light text-white mb-20 wow move-up">
                                <i class="far fa-clipboard-list-check"></i>
                                Minimum system requirements for syGlass
                                </h2>
                                
                        </div>
                         </div>
                          </div>

        <div class="row i">
            <b-col>
                <h4 class="font-weight--light mb-30" style="">PC Recommendations</h4>
                    <ul>
                        <li class="list-item">
                            <a href="mailto:info@syglass.io">
                            Contact </a> us to verify our current specification <br> 
                            Or for more details on portable laptops for syGlass! </li>
                    </ul>
                    <br>
                 <ul class="check-list green-check-list section-space--mb_50">
                        <li class="list-item">OS: Windows 10 </li>
                        <li class="list-item">GPU: NVIDIA GeForce GTX 1080 or better </li>
                        <li class="list-item">RAM: 32 GB or more</li>
                        <li class="list-item">Check out syGlass Certified VR Workstations 
                             <a href="https://www.pogolinux.com/products/syglass-vr-workstations" target="_blank">
                            here </a>!</li>
                    </ul>
            </b-col>
            <b-col>
                 <h4 class="font-weight--light mb-30" style="">Headset Compatibility</h4>
                    <ul>
                        <li class="list-item"> Any VR headset that connects to the PC. </li>
                        <li class="list-item">We recommend the consumer grade, and more affordable headsets. </li>
                    </ul>
                    <br>
                    <ul class="check-list green-check-list section-space--mb_50">
                        <li class="list-item">HTC Vive or Valve Index</li>
                        <li class="list-item">Oculus Rift/Rift S/Quest with link cable </li>
                        <li class="list-item">Windows Mixed Reality Headsets (including HP Reverb G2, Samsung Odyssey, Dell Visor) </li>
                    </ul>
            </b-col>
        
        </div>

<!--
<div class="row">

    <div class="col-lg-4 d-none d-lg-block">
                    <slick class="slick1 tab-slider-nav"
                        :options="slickOptions">
                            <div class="tab-slider-nav--list wow move-up">
                                <div class="image text-center">
                                    <img class="img-fluid" src="../assets/img/Workstation3.png">
                                </div>
                               <!--<h5>PC Recommendations</h5>
                            </div>
                            <div class="tab-slider-nav--list wow move-up">
                                <div class="image text-center">
                                    <img class="img-fluid" src="../assets/img/VRSystem2.png">
                                </div>
                                <h5>Headset Compatibilities</h5>
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
                </div> -->

                
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
</template>

<script>
import HeadsetCompatibility from "../components/HeadsetCompatibility";
import PCRecommendations from "../components/PCRecommendations";
import Slick from "vue-slick";
export default {
  name: "Recs",
  props: ["BgGradient"],
  components: {
    HeadsetCompatibility,
    PCRecommendations,
    Slick,
  },
  data() {
    return {
      
    };
  },
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
  padding-left: 70px;
  padding-right: 70px;
}

.slick-slide {
  width: fit-content;
}

.col-lg-8 {
  padding-left: 55px;
}

.col-lg-4 {
  padding-left: 140px;
}

/*.section-space--mb_60 {
  margin-left: 40px;
}*/

a {
  color: #44a3f2;
}

a:hover {
  text-decoration: underline;
}

/** .i {
    margin-left: 30px;
    margin-right: 30px;
}*/

.far {
    /*color: #44A3F2;*/
    font-weight: 300;
}
</style>