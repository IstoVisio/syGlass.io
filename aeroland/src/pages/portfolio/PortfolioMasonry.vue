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
        <div class="portfolio-pages-wrapper masonry-activation section-space--pt_100 section-space--pb_70 border-bottom">
            <div class="container">
                <div class="row clearfix masonry-wrap" v-masonry transition-duration="3s" item-selector=".masonary-item">
                    <div class="col-lg-4 col-md-6 masonary-item wow move-up" v-for="portfolio in portfolios" :key="portfolio.id">
                        <div class="portfolio-wrapper mb-30">
                            <router-link to="/portfolio-details" class="single-portfolio-item">
                                <div class="single-portfolio__thumbnail">
                                    <img class="img-fluid border-radus-5" :src="portfolio.image" :alt="portfolio.alt">
                                </div>
                                <div class="post-overlay gradient-background"></div>
                                <div class="single-portfolio__content">
                                    <div class="post-overlay-info">
                                        <h5 class="post-overlay-title text-white">{{ portfolio.overlayTitle }}</h5>
                                    </div>
                                </div>
                            </router-link>
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
                        overlayTitle: "Print Design Prospect"
                    },
                    {
                        id: 2,
                        image: require("@/assets/img/portfolio/portfolio-11-480x274.jpg"),
                        alt: "portfolio image",
                        overlayTitle: "Print Design Prospect"
                    },
                    {
                        id: 3,
                        image: require("@/assets/img/portfolio/portfolio-10-480x343.jpg"),
                        alt: "portfolio image",
                        overlayTitle: "Print Design Prospect"
                    },
                    {
                        id: 4,
                        image: require("@/assets/img/portfolio/portfolio-07-480x343.jpg"),
                        alt: "portfolio image",
                        overlayTitle: "Print Design Prospect"
                    },
                    {
                        id: 5,
                        image: require("@/assets/img/portfolio/portfolio-09-480x343.jpg"),
                        alt: "portfolio image",
                        overlayTitle: "Print Design Prospect"
                    },
                    {
                        id: 6,
                        image: require("@/assets/img/portfolio/portfolio-06-480x253.jpg"),
                        alt: "portfolio image",
                        overlayTitle: "Print Design Prospect"
                    },
                    {
                        id: 7,
                        image: require("@/assets/img/portfolio/portfolio-08-01-480x343.jpg"),
                        alt: "portfolio image",
                        overlayTitle: "Print Design Prospect"
                    },
                    {
                        id: 8,
                        image: require("@/assets/img/portfolio/portfolio-08-01-480x343.jpg"),
                        alt: "portfolio image",
                        overlayTitle: "Print Design Prospect"
                    },
                    {
                        id: 9,
                        image: require("@/assets/img/portfolio/portfolio-05-480x343.jpg"),
                        alt: "portfolio image",
                        overlayTitle: "Print Design Prospect"
                    }
                ]
            }
        }
    }
</script>

