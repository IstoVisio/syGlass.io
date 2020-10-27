<template>
    <div class="main-container">

        <router-view></router-view>

        <!-- Navbar section -->
        <HeaderElement />

        <!-- breadcrumb strat -->
        <Breadcrumb>
            <template slot="breadcrumb">
                <div class="breadcrumb_box text-center">
                    <h2 class="breadcrumb-title">Portfolio Masonry</h2>
                    <!-- breadcrumb-list start -->
                    <ul class="breadcrumb-list">
                        <li class="breadcrumb-item">
                            <router-link :to="{name:'HomeBranding'}">Home</router-link>
                        </li>
                        <li class="breadcrumb-item">
                            <router-link :to="{name:'HomeBranding'}">Portfolio</router-link>
                        </li>
                        <li class="breadcrumb-item active">Portfolio Masonry</li>
                    </ul>
                    <!-- breadcrumb-list end -->
                </div>
            </template>
        </Breadcrumb>
        <!-- breadcrumb end -->

        <!-- portfolio item wrapper start -->
        <div class="portfolio-pages-wrapper section-space--pt_100 section-space--pb_70 gray-gradient">
            <div class="container">
                <div class="row clearfix masonry-wrap" v-masonry transition-duration="3s" item-selector=".masonary-item">
                    <div class="col-lg-4 col-md-6 masonary-item wow move-up" v-for="portfolio in portfolios" :key="portfolio.id">
                        <div class="portfolio-grid-caption mb-30">
                            <router-link to="/portfolio-details" class="single-grid-caption">
                                <div class="single-portfolio__thumbnail">
                                    <img class="img-fluid" :src="portfolio.image" :alt="portfolio.alt">
                                </div>
                            </router-link>
                            <div class="post-info">
                                <div class="post-categories">
                                    <router-link to="">{{ portfolio.category }}</router-link>
                                </div>
                                <h5 class="post-title font-weight--bold">
                                    <router-link to="/portfolio-details">{{ portfolio.overlayTitle }}</router-link>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- portfolio item wrapper end -->

        <!-- footer section -->
        <FooterMain />

        <!-- offcanvas search component -->
        <OffcanvasSearchBox />

        <!-- off-canvas mobile menu -->
        <OffCanvasMobileMenu />

    </div>
</template>

<script>
    import HeaderElement from '@/components/HeaderElement'
    import Breadcrumb from '@/components/Breadcrumb'
    import FooterMain from '@/components/FooterMain'
    import OffcanvasSearchBox from '@/components/OffcanvasSearchBox'
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

    export default {
        name: 'PortfolioMasonry',
        components: {
            HeaderElement,
            Breadcrumb,
            FooterMain,
            OffcanvasSearchBox,
            OffCanvasMobileMenu
        },

        mounted () {
            if (typeof this.$redrawVueMasonry === 'function') {
                this.$redrawVueMasonry()
            };

            this.onLoad();
        },

        methods:{
            async onLoad(){
                await this.sleep(950)
                this.$redrawVueMasonry()
            },
            sleep(ms){
                return new Promise(resolve => setTimeout(resolve, ms))
            }
        },

        data () {
            return {
                portfolios: [
                    {
                        id: 1,
                        image: require("@/assets/img/portfolio/portfolio-12-481x325.jpg"),
                        alt: "portfolio image",
                        overlayTitle: "Print Design Prospect",
                        category: "Branding"
                    },
                    {
                        id: 2,
                        image: require("@/assets/img/portfolio/portfolio-11-480x274.jpg"),
                        alt: "portfolio image",
                        overlayTitle: "2018 President Summit",
                        category: "Concept"
                    },
                    {
                        id: 3,
                        image: require("@/assets/img/portfolio/portfolio-10-480x343.jpg"),
                        alt: "portfolio image",
                        overlayTitle: "Lonity Brand New Look",
                        category: "Art Derection"
                    },
                    {
                        id: 4,
                        image: require("@/assets/img/portfolio/portfolio-07-480x343.jpg"),
                        alt: "portfolio image",
                        overlayTitle: "Digitized Visual Projects",
                        category: "Illustration"
                    },
                    {
                        id: 5,
                        image: require("@/assets/img/portfolio/portfolio-09-480x343.jpg"),
                        alt: "portfolio image",
                        overlayTitle: "Finding Alternativel Resources",
                        category: "Digital"
                    },
                    {
                        id: 6,
                        image: require("@/assets/img/portfolio/portfolio-06-480x253.jpg"),
                        alt: "portfolio image",
                        overlayTitle: "Print Design Prospect",
                        category: "Marketing"
                    },
                    {
                        id: 7,
                        image: require("@/assets/img/portfolio/portfolio-08-01-480x343.jpg"),
                        alt: "portfolio image",
                        overlayTitle: "Smart Technology Source",
                        category: "Design"
                    },
                    {
                        id: 8,
                        image: require("@/assets/img/portfolio/portfolio-08-01-480x343.jpg"),
                        alt: "portfolio image",
                        overlayTitle: "Spiral Branding Touchpoint",
                        category: "Digital"
                    },
                    {
                        id: 9,
                        image: require("@/assets/img/portfolio/portfolio-05-480x343.jpg"),
                        alt: "portfolio image",
                        overlayTitle: "Electric Vehicle Invention",
                        category: "Branding"
                    }
                ]
            }
        }
    }
</script>

