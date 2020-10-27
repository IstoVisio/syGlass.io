<template>
    <div class="main-container">

        <router-view></router-view>

        <!-- Navbar section -->
        <HeaderElement />

        <!-- breadcrumb strat -->
        <Breadcrumb>
            <template slot="breadcrumb">
                <div class="breadcrumb_box text-center">
                    <h2 class="breadcrumb-title">Portfolio Details Two</h2>
                    <!-- breadcrumb-list start -->
                    <ul class="breadcrumb-list">
                        <li class="breadcrumb-item">
                            <router-link :to="{name:'HomeBranding'}">Home</router-link>
                        </li>
                        <li class="breadcrumb-item">
                            <router-link :to="{name:'HomeBranding'}">Portfolio</router-link>
                        </li>
                        <li class="breadcrumb-item active">Portfolio Details Two</li>
                    </ul>
                    <!-- breadcrumb-list end -->
                </div>
            </template>
        </Breadcrumb>
        <!-- breadcrumb end -->

        <!-- portfolio details wrapper start -->
        <div class="portfolio-details-wrapper section-space--ptb_100">
            <div class="container">
                <div class="row portfolio-details-feature-wrap">
                    <div class="col-lg-8">
                        <div class="portfolio-details-grid-masonry">
                            <div class="portfolio-details-grid-image grid-width-2 grid-height-2">
                                <img class="img-fluid border-radus-5" src="@/assets/img/portfolio/portfolio-05-670x479.jpg" alt="">
                            </div>
                            <div class="portfolio-details-grid-image">
                                <img class="img-fluid border-radus-5" src="@/assets/img/portfolio/portfolio-08-02-670x479.jpg" alt="">
                            </div>
                            <div class="portfolio-details-grid-image">
                                <img class="img-fluid border-radus-5" src="@/assets/img/portfolio/portfolio-08-03-670x479.jpg" alt="">
                            </div>
                            <div class="portfolio-details-grid-image">
                                <img class="img-fluid border-radus-5" src="@/assets/img/portfolio/portfolio-09-670x479.jpg" alt="">
                            </div>
                            <div class="portfolio-details-grid-image">
                                <img class="img-fluid border-radus-5" src="@/assets/img/portfolio/portfolio-08-01-670x479.jpg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="portfolio-details-content">
                            <div class="portfolio-details-title">
                                <a class="portfolio-categories" href="#">Concept</a>
                                <h3 class="portfolio-details-title">Brand Agency Studio</h3>
                            </div>
                            <div class="text mt-20">
                                <p>The studio was keen to create an identity that would not interfere with any of the existing brands, settling on a helicoid system that can be easily adapted to “work with any colour system”. The studio consulted with the various brands throughout the process. (Source: designweek.co.uk)</p>
                            </div>
                            <div class="portfolio-details-table mt-30">
                                <table class="mb-0">
                                    <tbody>
                                        <tr class="portfolio-details-date">
                                            <td class="label">Date</td>
                                            <td>July 30th, 2004</td>
                                        </tr>

                                        <tr class="portfolio-details-client">
                                            <td class="label">Client</td>
                                            <td>Alfred Morris</td>
                                        </tr>

                                        <tr class="portfolio-details-tags">
                                            <td class="label">Tags</td>
                                            <td>
                                                <a href="#" rel="tag">concept</a>, 
                                                <a href="#" rel="tag">digital</a>
                                            </td>
                                        </tr>

                                        <tr class="portfolio-details-share">
                                            <td class="label">Share</td>
                                            <td class="portfolio-sharing-list">
                                                <div class="inner">
                                                    <a class="hint--bounce hint--top hint--primary twitter" target="_blank" aria-label="Twitter" href="https://twitter.com/">
                                                        <i class="fab fa-twitter"></i>
                                                    </a>
                                                    <a class="hint--bounce hint--top hint--primary facebook" target="_blank" aria-label="Facebook" href="https://www.facebook.com/">
                                                        <i class="fab fa-facebook-f"></i>
                                                    </a>
                                                    <a class="hint--bounce hint--top hint--primary linkedin" target="_blank" aria-label="Linkedin" href="https://www.linkedin.com/">
                                                        <i class="fab fa-linkedin"></i>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="portfolio-nav-links bg-gray">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="nav-list">
                            <div class="nav-item prev">
                                <div class="inner">
                                    <a href="#" rel="prev">
                                        <div><img class="img-fluid border-radus-5" src="@/assets/img/portfolio/portfolio-08-01-120x80.jpg" alt="portfolio-08-01">
                                            <h6>Smart Technology Source</h6>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div class="nav-item next">
                                <div class="inner">
                                    <a href="#" rel="next">
                                        <div><img class="img-fluid border-radus-5" src="@/assets/img/portfolio/portfolio-06-120x80.jpg" alt="portfolio-06-01">
                                            <h6>Digitized Visual Projects</h6>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <button class="entry-portfolio-return-link">
                            <span class="fa fa-th"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- portfolio details wrapper end -->

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
    }
</script>

