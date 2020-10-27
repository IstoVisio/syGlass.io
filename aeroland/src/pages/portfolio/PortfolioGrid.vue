<template>
    <div class="main-container">

        <router-view></router-view>

        <!-- Navbar section -->
        <HeaderElement />

        <!-- breadcrumb strat -->
        <Breadcrumb>
            <template slot="breadcrumb">
                <div class="breadcrumb_box text-center">
                    <h2 class="breadcrumb-title">Portfolio Grid</h2>
                    <!-- breadcrumb-list start -->
                    <ul class="breadcrumb-list">
                        <li class="breadcrumb-item">
                            <router-link :to="{name:'HomeBranding'}">Home</router-link>
                        </li>
                        <li class="breadcrumb-item">
                            <router-link :to="{name:'HomeBranding'}">Portfolio</router-link>
                        </li>
                        <li class="breadcrumb-item active">Portfolio Grid</li>
                    </ul>
                    <!-- breadcrumb-list end -->
                </div>
            </template>
        </Breadcrumb>
        <!-- breadcrumb end -->

        <!-- portfolio item wrapper start -->
        <div class="portfolio-pages-wrapper section-space--ptb_100 border-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 wow move-up" v-for="portfolio in portfolios" :key="portfolio.id">
                        <div class="portfolio-wrapper mb-30">
                            <router-link to="portfolio-details" class="single-portfolio-item">
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
                    
                    <div class="col-lg-12">
                        <div class="load-more-button text-center">
                            <button class="ht-btn ht-btn-md ht-btn--outline loadMore">Load More</button>
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
        name: 'PortfolioGrid',
        components: {
            HeaderElement,
            Breadcrumb,
            FooterMain,
            OffcanvasSearchBox,
            OffCanvasMobileMenu
        },

        data () {
            return {
                portfolios: [
                    {
                        id: 1,
                        image: require("@/assets/img/portfolio/portfolio-01-481x325.jpg"),
                        alt: "portfolio image",
                        overlayTitle: "Print Design Prospect"
                    },
                    {
                        id: 2,
                        image: require("@/assets/img/portfolio/portfolio-02-481x325.jpg"),
                        alt: "portfolio image",
                        overlayTitle: "Print Design Prospect"
                    },
                    {
                        id: 3,
                        image: require("@/assets/img/portfolio/portfolio-03-481x325.jpg"),
                        alt: "portfolio image",
                        overlayTitle: "Print Design Prospect"
                    },
                    {
                        id: 4,
                        image: require("@/assets/img/portfolio/portfolio-04-481x325.jpg"),
                        alt: "portfolio image",
                        overlayTitle: "Print Design Prospect"
                    },
                    {
                        id: 5,
                        image: require("@/assets/img/portfolio/portfolio-05-481x325.jpg"),
                        alt: "portfolio image",
                        overlayTitle: "Print Design Prospect"
                    },
                    {
                        id: 6,
                        image: require("@/assets/img/portfolio/portfolio-06-481x325.jpg"),
                        alt: "portfolio image",
                        overlayTitle: "Print Design Prospect"
                    },
                    {
                        id: 7,
                        image: require("@/assets/img/portfolio/portfolio-07-481x325.jpg"),
                        alt: "portfolio image",
                        overlayTitle: "Print Design Prospect"
                    },
                    {
                        id: 8,
                        image: require("@/assets/img/portfolio/portfolio-08-481x325.jpg"),
                        alt: "portfolio image",
                        overlayTitle: "Print Design Prospect"
                    },
                    {
                        id: 9,
                        image: require("@/assets/img/portfolio/portfolio-09-481x325.jpg"),
                        alt: "portfolio image",
                        overlayTitle: "Print Design Prospect"
                    }
                ]
            }
        }
    }
</script>

