<template>
    <b-navbar type="light" toggleable="xl" fixed="top" class="header-area" :class="{'is-sticky': scrolled}">
        <div class="container-fluid container-fluid--cp-150 position-relative">
            <b-navbar-toggle target="nav_collapse" class="d-none"></b-navbar-toggle>
            <b-navbar-brand class="navbar-brand" to="/"><img :src='"../assets/img/logo/logo-dark.png"' alt="logo"></b-navbar-brand>
            <b-btn-group class="header-config-wrapper">
                <b-btn class="header-config" @click="toggleClass('addClass', 'active')"><i class="far fa-search"></i></b-btn>
                <b-link class="ht-btn ht-btn--outline hire-btn d-none d-xl-block" href="https://1.envato.market/c/25198880/275988/4415?subId1=hasthemes&subId2=demo&subId3=https%3A%2F%2Fthemeforest.net%2Fcart%2Fconfigure_before_adding%2F25198880%3Flicense%3Dregular%26size%3Dsource&u=https%3A%2F%2Fthemeforest.net%2Fcart%2Fconfigure_before_adding%2F25198880%3Flicense%3Dregular%26size%3Dsource">BUY Now</b-link>
                <b-link class="mobile-menu-bar d-xl-none" @click="mobiletoggleClass('addClass', 'active')"> <i class="fa fa-bars"></i></b-link>
            </b-btn-group>
            <b-collapse class="default-nav justify-content-center position-relative" is-nav id="nav_collapse">
                <b-navbar-nav class="navbar-nav main-menu element-menu">
                    <b-nav-item to="/"><span>LANDING</span></b-nav-item>
                    <b-nav-item-dropdown text="HOME PAGES">
                        <b-dropdown-item to="/branding" target="_blank">Home Branding</b-dropdown-item>
                        <b-dropdown-item to="/sass" target="_blank">Home Sass</b-dropdown-item>
                        <b-dropdown-item to="/software" target="_blank">Home Software</b-dropdown-item>
                        <b-dropdown-item to="/start-up" target="_blank">Home Start Up</b-dropdown-item>
                        <b-dropdown-item to="/app-landing" target="_blank">Home App Landing</b-dropdown-item>
                        <b-dropdown-item to="/showcase" target="_blank">Home App Showcase</b-dropdown-item>
                        <b-dropdown-item to="/ebook" target="_blank">Home Ebook</b-dropdown-item>
                        <b-dropdown-item to="/clinic" target="_blank">Home Clinic</b-dropdown-item>
                        <b-dropdown-item to="/payment" target="_blank">Home Payment</b-dropdown-item>
                        <b-dropdown-item to="/agency" target="_blank">Home Agency</b-dropdown-item>
                        <b-dropdown-item to="/product-showcase" target="_blank">Product Showcase</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown text="PORTFOLIO PAGES" class="mega-menu position-static">
                        <b-nav-item class="mega-submenu">
                            <b-dropdown-item class="mega-title" to="">Portfolio Group 01</b-dropdown-item>
                            <b-dropdown-item to="/portfolio-grid">Portfolio Grid</b-dropdown-item>
                            <b-dropdown-item to="/Portfolio-grid-wide">Portfolio Grid Wide</b-dropdown-item>
                            <b-dropdown-item to="/portfolio-grid-caption">Portfolio Grid Caption</b-dropdown-item>
                            <b-dropdown-item to="/portfolio-grid-caption-wide">Portfolio Grid Caption Wide</b-dropdown-item>
                        </b-nav-item>
                        <b-nav-item class="mega-submenu">
                            <b-dropdown-item class="mega-title" to="">Portfolio Group 02</b-dropdown-item>
                            <b-dropdown-item to="/portfolio-masonry">Portfolio Masonry</b-dropdown-item>
                            <b-dropdown-item to="/portfolio-masonry-caption">Portfolio Masonry Caption</b-dropdown-item>
                            <b-dropdown-item to="/portfolio-masonry-wide">Portfolio Masonry Wide</b-dropdown-item>
                        </b-nav-item>
                        <b-nav-item class="mega-submenu">
                            <b-dropdown-item class="mega-title" to="">Portfolio Group 03</b-dropdown-item>
                            <b-dropdown-item to="/portfolio-details">Portfolio Details</b-dropdown-item>
                            <b-dropdown-item to="/portfolio-details-two">Portfolio Details Two</b-dropdown-item>
                        </b-nav-item>
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown text="ELEMENTS PAGES" class="mega-menu position-static">
                        <b-nav-item class="mega-submenu">
                            <b-dropdown-item class="mega-title" to="">Element Group 01</b-dropdown-item>
                            <b-dropdown-item to="/element-tab">Element Tab</b-dropdown-item>
                            <b-dropdown-item to="/element-accordion">Element Accordion</b-dropdown-item>
                            <b-dropdown-item to="/element-team-member">Element Team Member</b-dropdown-item>
                            <b-dropdown-item to="/element-buttons">Element Buttons</b-dropdown-item>
                        </b-nav-item>
                        <b-nav-item class="mega-submenu">
                            <b-dropdown-item class="mega-title" to="">Element Group 02</b-dropdown-item>
                            <b-dropdown-item to="/element-cta">Element CTA</b-dropdown-item>
                            <b-dropdown-item to="/element-testimonial">Element Testimonial</b-dropdown-item>
                            <b-dropdown-item to="/element-box-icon">Element Box Icon</b-dropdown-item>
                            <b-dropdown-item to="/element-counters">Element Counters</b-dropdown-item>
                        </b-nav-item>
                        <b-nav-item class="mega-submenu">
                            <b-dropdown-item class="mega-title" to="">Element Group 03</b-dropdown-item>
                            <b-dropdown-item to="/element-pricing-box">Element Pricing Box</b-dropdown-item>
                            <b-dropdown-item to="/element-popup-video">Element Popup Video</b-dropdown-item>
                            <b-dropdown-item to="/element-gradation">Element Gradation</b-dropdown-item>
                            <b-dropdown-item to="/element-progress-circle">Element Progress Circle</b-dropdown-item>
                        </b-nav-item>
                    </b-nav-item-dropdown >
                    <b-nav-item-dropdown text="BLOGS">
                        <b-dropdown-item to="/blog-list-large-image" target="_blank">Blog List Large Image</b-dropdown-item>
                        <b-dropdown-item to="/blog-details" target="_blank">Blog Details</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </div>
    </b-navbar>
</template>

<script>
    export default {
        name:'HeaderElement',
        data (){
            return {
                load: false,
                limitPosition: 200,
                scrolled: false,
                lastPosition: 500,
            }
        },
        methods: {
            // sticky menu script
            handleScroll() {
                if (this.lastPosition < window.scrollY && this.limitPosition < window.scrollY) {
                    this.scrolled = true;
                    // move up!
                } 
                if (this.lastPosition > window.scrollY) {
                    this.scrolled = true;
                    // move down
                }
                this.lastPosition = window.scrollY;
                this.scrolled = window.scrollY > 50;
            },

            // offcanvas searchbox
            toggleClass(addRemoveClass, className) {
                const el = document.querySelector('#search-overlay');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
            // offcanvas searchbox
            mobiletoggleClass(addRemoveClass, className) {
                const el = document.querySelector('#offcanvas-menu');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
        }, 
        created() {
            window.addEventListener("scroll", this.handleScroll);
        },
        destroyed() {
            window.removeEventListener("scroll", this.handleScroll);
        },
    }
</script>

<style lang="scss">
    .mobile-menu-bar {
        color:#6d70a6;
        font-size: 25px;
        border: 1px solid#6d70a6;
        padding: 8px 10px 10px;
        line-height: 1;
        height: 42px;
        margin-top: 6px;
        border-radius: 4px;
    }

    .element-menu {
        [aria-expanded="false"] {
            background-color: transparent;
        }
        .dropdown-item {
            font-size: 14px;
            &:hover {
                color: #5945e6;
                background-color: transparent;
            }
        }
        .dropdown-menu {
            border: none;
            border-bottom: 3px solid #5945e6;
            margin-top: -2px;
        }
    }
    .mega-menu {
        .dropdown-menu {
            min-width: 100%;
        }
        .mega-submenu {
            width: 33.33%;
            float: left;
            .nav-link {
                padding: 20px 10px !important;
                .mega-title {
                    .dropdown-item {
                        font-weight: 500;
                        color: #000;
                    }
                    
                }
            }
        }
    }
</style>