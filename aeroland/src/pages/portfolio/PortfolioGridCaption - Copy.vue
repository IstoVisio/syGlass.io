/* eslint-disable */
<template>
    <div class="main-container">

        <router-view></router-view>

        <!-- portfolio item wrapper start -->
        <div class="portfolio-pages-wrapper section-space--ptb_100 border-bottom gray-gradient">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 mb-30 wow move-up" v-for="portfolio in portfolios" :key="portfolio.id">
                        <div class="portfolio-grid-caption">
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

// eslint-disable-next-line
console.log("hello!");

    var getJSON = function(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onload = function() {
          var status = xhr.status;
          if (status === 200) {
            callback(null, xhr.response);
          } else {
            callback(status, xhr.response);
          }
        };
        xhr.send();
    };
    
    var response = getJSON('https://syglassview.s3.us-east-2.amazonaws.com/viewProjects.json',
    function(err, data) {
      if (err !== null) {
        alert('Something went wrong: ' + err);
      } else {
        alert('Your query count: ' + data.query.count);
      }
    });
    
    var jsonData = JSON.parse(response);
    for (var i = 0; i < jsonData.myjsons.length; i++) {
        var myjsons= jsonData.myjsons[i];
        // eslint-disable-next-line
        console.log(myjsons.errno);
        // eslint-disable-next-line
        console.log(myjsons.num_keys);
    }
 
/*
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
                portfolios: [
                    {
                        id: 1,
                        image: require("@/assets/img/portfolio/portfolio-01-481x325.jpg"),
                        alt: "portfolio image",
                        overlayTitle: "Print Design Prospect",
                        category: "Branding"
                    },
                    {
                        id: 2,
                        image: require("@/assets/img/portfolio/portfolio-02-481x325.jpg"),
                        alt: "portfolio image",
                        overlayTitle: "2018 President Summit",
                        category: "Concept"
                    },
                    {
                        id: 3,
                        image: require("@/assets/img/portfolio/portfolio-03-481x325.jpg"),
                        alt: "portfolio image",
                        overlayTitle: "Lonity Brand New Look",
                        category: "Art Derection"
                    },
                    {
                        id: 4,
                        image: require("@/assets/img/portfolio/portfolio-04-481x325.jpg"),
                        alt: "portfolio image",
                        overlayTitle: "Finding Alternativel Resources",
                        category: "Illustration"
                    },
                    {
                        id: 5,
                        image: require("@/assets/img/portfolio/portfolio-05-481x325.jpg"),
                        alt: "portfolio image",
                        overlayTitle: "Digitized Visual Projects",
                        category: "Digital"
                    },
                    {
                        id: 6,
                        image: require("@/assets/img/portfolio/portfolio-06-481x325.jpg"),
                        alt: "portfolio image",
                        overlayTitle: "Electric Vehicle Invention",
                        category: "Marketing"
                    },
                    {
                        id: 7,
                        image: require("@/assets/img/portfolio/portfolio-07-481x325.jpg"),
                        alt: "portfolio image",
                        overlayTitle: "Smart Technology Source",
                        category: "Design"
                    },
                    {
                        id: 8,
                        image: require("@/assets/img/portfolio/portfolio-08-481x325.jpg"),
                        alt: "portfolio image",
                        overlayTitle: "Spiral Branding Touchpoint",
                        category: "Digital"
                    },
                    {
                        id: 9,
                        image: require("@/assets/img/portfolio/portfolio-09-481x325.jpg"),
                        alt: "portfolio image",
                        overlayTitle: "Print Design Prospect",
                        category: "Branding"
                    }
                ]
            }
        }
*/
</script>



