<template>
<div class="tabs-wrapper startup-tab section-space--mt_40 section-space--pt_120">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                        <div class="section-title-wrapper text-left section-space--mb_60 wow move-up">
                            <h2 class="check-list font-weight--light text-white mb-20 wow move-up">
                                <i class="far fa-clipboard-list-check font-weight-light"></i>
                                Minimum system requirements for syGlass
                                </h2>
                        </div>
                    </div>
                </div>
        <div class="row">
            <b-col>
                <h4 class="font-weight--light mb-30" style="">PC Recommendations</h4>
                    <ul>
                        <li class="list-item">
                            <a href="mailto:info@syglass.io" id="highlight">
                            Contact </a> us to verify our current specification <br> 
                            Or for more details on portable laptops for syGlass! </li>
                    </ul>
                    <br>
                 <ul class="check-list green-check-list section-space--mb_50">
                        <li class="list-item">OS: Windows 10 </li>
                        <li class="list-item">GPU: NVIDIA GeForce GTX 1080 or better </li>
                        <li class="list-item">RAM: 32 GB or more</li>
                        <li class="list-item">Check out syGlass Certified VR Workstations 
                             <a href="https://www.pogolinux.com/products/syglass-vr-workstations" target="_blank" id="highlight">
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
        </div>
    </div>
</template>

<script>
export default {
  name: "Recs",
  props: ["BgGradient"],
  data() {
    return {
    };
  },
};
</script>
