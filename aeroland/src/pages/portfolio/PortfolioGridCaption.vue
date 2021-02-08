<template>
    <div class="main-container section-space--pbt_120">

        <router-view></router-view>

        <!-- portfolio item wrapper start -->
		
        <div class="portfolio-pages-wrapper  gray-gradient">
            <div class="container">
				<p> Browse our library of digital scans of animals, organs, and cells, and explore the beauty of the natural world. syGlass View projects are donated to the library by the best and brightest from around the world -- let us know if you'd like to submit a dataset! 
				</p>
                <div class="row">
                        <div class="col mb-30 wow move-up" v-for="portfolio in portfolios" :key="portfolio.id">
                            <div class="portfolio-grid-caption">
                                <router-link to="/portfolio-details" class="single-grid-caption">
                                    <div class="single-portfolio__thumbnail">
                                        <img class="img-fluid" :src="portfolio.thumbnailUrl" :alt="portfolio.name">
                                    </div>
                                </router-link>
                                <div class="post-info">
                                    <div class="post-categories">
                                        <router-link to="">{{ portfolio.modality }}</router-link>
                                    </div>
                                    <h5 class="post-title font-weight--bold">
                                        <router-link to="/portfolio-details">{{ portfolio.name }}</router-link>
                                    </h5>
									<div class="citation"> {{ portfolio.citation }} </div>
                                </div>
                            </div>
                        </div>
                    
                    <!--div class="col-lg-12">
                        <div class="load-more-button text-center">
                            <button class="ht-btn ht-btn-md ht-btn--outline loadMore">Load More</button>
                        </div>
                    </div-->
                </div>
            </div>
        </div>
        <!-- portfolio item wrapper end -->


    </div>
</template>

<script>
    import HeaderElement from '@/components/HeaderElement'
    import Breadcrumb from '@/components/Breadcrumb'
    import FooterMain from '@/components/FooterMain'
    import OffcanvasSearchBox from '@/components/OffcanvasSearchBox'
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'
    import ViewProjectsJSON from '@/test.json'
 

//The next line of code will filter out all the unwanted data from the object.


    export default {
        name: 'PortfolioGridCaption',
        components: {
            HeaderElement,
            Breadcrumb,
            FooterMain,
            OffcanvasSearchBox,
            OffCanvasMobileMenu
        },
        data () {
            return {
                portfolios: ViewProjectsJSON.projects
            }
        }
    }
</script>

