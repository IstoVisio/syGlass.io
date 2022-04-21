<template>
  <div class="main-container">
    <router-view></router-view>
    <!-- section: Navbar -->
    <EduHeaderSoftware />

    <div id="home" />

    <!-- section: Home -->
    <EducationSoftware />



    <!-- section: Analyze -->
    <div
      class="
        tabs-wrapper
        startup-tab
        section-space--mt_60 section-space--ptb_120
      "
      id="analyze"
    >
      <div class="container">
        <div class="row">
        </div>
        <EduTabContentTwo />
      </div>
    </div>
	
	<!-- section: ResearchPartnership -->
    <ResearchPartnership id="view" />

	<!-- section: NovelCourseWork -->
    <NovelCourseWork id="view" />
	
	<!-- section: Focus -->
    <Focus id="view" />
	
	
	<!-- section: Communicate -->
    <EduTabTwo_Communicate id="communicate" />


    <!-- section: About -->
    <div class="feature-icon-list-area section-space--pt_120" id="about">
      <div class="container">

      </div>
    </div>
	<div class="feature-icon-list-area section-space--pt_120">
	<!-- section: Contact -->
    <EduContactForm />
	</div>

    <!-- section: Footer -->
    <FooterMain />

    <!-- offcanvas search component -->
    <OffcanvasSearchBox />
  </div>
</template>

<script>
import EduHeaderSoftware from "../components/EduHeaderSoftware";
import EducationSoftware from "../components/EducationSoftware";
import EduTabTwo_Communicate from "../components/EduTabTwo_Communicate";
import ResearchPartnership from "../components/ResearchPartnership";
import NovelCourseWork from "../components/NovelCourseWork";
import Focus from "../components/Focus";
import FooterMain from "../components/FooterMain";
import OffcanvasSearchBox from "../components/OffcanvasSearchBox";
import EduContactForm from "../components/EduContactForm";
import EduTabContentTwo from "../components/EduTabContentTwo";
import Recs from "../components/Recs";


export default {
  data() {
    return {
      swiperOption: {
        speed: 1500,
        loop: true,
        effect: "fade",
        autoplay: false,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      swiperImages: {
        speed: 1500,
        loop: true,
        effect: "fade",
        autoplay: true,
        slidesPerView: "auto",
        loopedSlides: 3,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  name: "app",
  components: {
    EduHeaderSoftware,
    EducationSoftware,
    EduTabContentTwo,
    EduTabTwo_Communicate,
    ResearchPartnership,
    NovelCourseWork,
    Focus,
    FooterMain,
    OffcanvasSearchBox,
    EduContactForm,
    Recs,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variabls.scss";
@import "../assets/scss/elements/hero-software.scss";

#space {
  padding-left: 20px;
}

.y {
  color: rgb(255, 255, 158);
  color: #44a3f2;
}

.list-item.vr {
  &::before {
    content: "\f6ea";
    font-size: 25px;
    font-weight: 400;
  }
}

.list-item.tool {
  &::before {
    content: "\f7d9";
    font-weight: 400;
    font-size: 25px;
  }
}

.list-item.data {
  &::before {
    content: "\f080";
    font-size: 25px;
    /*content: '\f643';*/
    font-weight: 400;
  }
}

.list-item.mission {
  &::before {
    content: "\f0eb";
    font-weight: 350;
    font-size: 30px;
  }
}
</style>
