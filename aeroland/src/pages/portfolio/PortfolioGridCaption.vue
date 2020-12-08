<template>
    <div class="main-container">

        <router-view></router-view>

        <!-- portfolio item wrapper start -->
        <div class="portfolio-pages-wrapper section-space--ptb_100 border-bottom gray-gradient">
            <div class="container">
                <div class="row">
					<div class="column">
						<div class="col-lg-3 col-md-3 mb-30 wow move-up" v-for="portfolio in portfolios" :key="portfolio.id">
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
								</div>
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



console.log(ViewProjectsJSON)
console.log(ViewProjectsJSON.projects[0].name)



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

