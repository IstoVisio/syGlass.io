<template>

    <div class="tabs-wrapper section-space--pt_120" :class="BgGradient">
        <div class="container" style="height:600px">
            <h2 class="section-title font-weight--light wow move-up text-center mtb-30 section-space--mtb_100"> Hear the impact on a Texas High School: </h2>
            <br/>

              
				<iframe class="vid" width="100%" height="100%" style=" width:100% !important;  height:100% !important;" src="https://www.youtube.com/embed/Mk179KB9eHg?autoplay=0&controls=1&modestbranding&mute=0&loop=1&playlist=Mk179KB9eHg"/>
				


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