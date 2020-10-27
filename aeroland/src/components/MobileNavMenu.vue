<template>
    <div class="mobile-navigation">
        <nav class="offcanvas-navigation" id="offcanvas-navigation">
            <ul>
                <li><router-link to="/">Landing</router-link></li>
                <li class="menu-item-has-children">
                    <router-link to="/">Home Pages</router-link>
                    <ul class="sub-menu">
                        <li><router-link to="/branding">Home Branding</router-link></li>
                        <li><router-link to="/sass">Home Sass</router-link></li>
                        <li><router-link to="/software">Home Software</router-link></li>
                        <li><router-link to="/start-up">Home Start-up</router-link></li>
                        <li><router-link to="/app-landing">Home App Landing</router-link></li>
                        <li><router-link to="/showcase">Home App Showcase</router-link></li>
                        <li><router-link to="/ebook">Home Ebook</router-link></li>
                        <li><router-link to="/clinic">Home Clinic</router-link></li>
                        <li><router-link to="/payment">Home Payment</router-link></li>
                        <li><router-link to="/agency">Home Agency</router-link></li>
                        <li><router-link to="/product-showcase">Product Showcase</router-link></li>
                    </ul>
                </li>
                <li class="menu-item-has-children">
                    <router-link to="">ELEMENT PAGES</router-link>
                    <ul class="sub-menu">
                        <li class="menu-item-has-children">
                            <router-link to="">ELEMENTS 01</router-link>
                            <ul class="sub-menu">
                                <li><router-link to="/element-tab">Element Tab</router-link></li>
                                <li><router-link to="/element-accordion">Element Accordion</router-link></li>
                                <li><router-link to="/element-team-member">Element Team Member</router-link></li>
                                <li><router-link to="/element-buttons">Element Buttons</router-link></li>
                            </ul>
                        </li>
                        <li class="menu-item-has-children">
                            <router-link to="">ELEMENTS 02</router-link>
                            <ul class="sub-menu">
                                <li><router-link to="/element-cta">Element Cta</router-link></li>
                                <li><router-link to="/element-testimonial">Element Testimonial</router-link></li>
                                <li><router-link to="/element-box-icon">Element Box Icon</router-link></li>
                                <li><router-link to="/element-counters">Element Counters</router-link></li>
                            </ul>
                        </li>
                        <li class="menu-item-has-children">
                            <router-link to="">ELEMENTS 03</router-link>
                            <ul class="sub-menu">
                                <li><router-link to="/element-pricing-box">Element Pricing Box</router-link></li>
                                <li><router-link to="/element-popup-video">Element Popup Video</router-link></li>
                                <li><router-link to="/element-gradation">Element Gradation</router-link></li>
                                <li><router-link to="/element-progress-circle">Element Progress Circle</router-link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="menu-item-has-children">
                    <router-link to="">PORTFOLIO PAGES</router-link>
                    <ul class="sub-menu">
                        <li class="menu-item-has-children">
                            <router-link to="">Portfolio Group 01</router-link>
                            <ul class="sub-menu">
                                <li><router-link to="/portfolio-grid">Portfolio Grid</router-link></li>
                                <li><router-link to="/Portfolio-grid-wide">Portfolio Grid Wide</router-link></li>
                                <li><router-link to="/portfolio-grid-caption">Portfolio Grid Caption</router-link></li>
                                <li><router-link to="/portfolio-grid-caption-wide">Portfolio Grid Caption Wide</router-link></li>
                            </ul>
                        </li>
                        <li class="menu-item-has-children">
                            <router-link to="">Portfolio Group 02</router-link>
                            <ul class="sub-menu">
                                <li><router-link to="/portfolio-masonry">Portfolio Masonry</router-link></li>
                                <li><router-link to="/portfolio-masonry-caption">Portfolio Masonry Caption</router-link></li>
                                <li><router-link to="/portfolio-masonry-wide">Portfolio Masonry Wide</router-link></li>
                            </ul>
                        </li>
                        <li class="menu-item-has-children">
                            <router-link to="">Portfolio Group 03</router-link>
                            <ul class="sub-menu">
                                <li><router-link to="/portfolio-details">Portfolio Details</router-link></li>
                                <li><router-link to="/portfolio-details-two">Portfolio Details Two</router-link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="menu-item-has-children">
                    <router-link to="/blog-list-large-image">Blog Pages</router-link>
                    <ul class="sub-menu">
                        <li><router-link to="/blog-list-large-image">Blog List Large Image</router-link></li>
                        <li><router-link to="/blog-details">Blog Details</router-link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'MobileNavMenu',
        mounted() {
            const offCanvasNav = document.querySelector('#offcanvas-navigation');
            const offCanvasNavSubMenu = offCanvasNav.querySelectorAll('.sub-menu');
            const anchorLinks = offCanvasNav.querySelectorAll('a');
        
            for (let i = 0; i < offCanvasNavSubMenu.length; i++){
                offCanvasNavSubMenu[i].insertAdjacentHTML("beforebegin", "<span class='menu-expand'><i></i></span>");
            }
        
            const menuExpand = offCanvasNav.querySelectorAll('.menu-expand');
            const numMenuExpand = menuExpand.length;
        
            for (let i = 0; i < numMenuExpand; i++) {
                menuExpand[i].addEventListener("click", (e) => {sideMenuExpand(e)});
            }
        
            for (let i = 0; i < anchorLinks.length; i++) {
                anchorLinks[i].addEventListener("click", () => {closeMobileMenu()});
            }

            const sideMenuExpand = (e) => {
                e.currentTarget.parentElement.classList.toggle('active');
            }
            const closeMobileMenu = () => {
                const offcanvasMobileMenu = document.querySelector('#offcanvas-mobile-menu');
                offcanvasMobileMenu.classList.remove('active');
            }
        }
    };
</script>

<style lang="scss">

    @import '../assets/scss/variabls.scss';

    /* offcanvas mobile menu */
    .mobile-navigation {
        padding: 30px 20px;
    }
    .offcanvas-navigation {
        & > ul {
            li {
                &.menu-item-has-children {
                    .sub-menu {
                        height: 0;
                        visibility: hidden;
                        opacity: 0;
                        transition: 0.3s;
                    }
                    &.active {
                        & > .sub-menu {
                            height: 100%;
                            visibility: visible;
                            opacity: 1;
                        }
                    }
                }
                & > a {
                    color: $white;
                    font-weight: 500;
                    padding: 10px 0;
                    display: block;
                    &:hover {
                        color: $white;
                    }

                }
            }
        }

        ul {
            &.sub-menu {
                margin-left: 25px;
                transition: 0.3s;
                & > li {
                    & > a {
                        font-size: 13px;
                        font-weight: 400;
                        padding: 10px 0;
                        &:hover {
                            color: $white;
                        }
                    }
                }
            }
            li {
                a {
                    text-transform: uppercase;
                }

                &.menu-item-has-children {
                    position: relative;
                    display: block;
                    a {
                        display: block;
                    }

                    &.active {
                        & > .menu-expand {
                            i {
                                &:before {
                                    transform: rotate(0);
                                }
                            }
                        }
                    }

                    .menu-expand {
                        position: absolute;
                        right: auto;
                        left: 95%;
                        top: -5px;
                        width: 30px;
                        height: 50px;
                        line-height: 50px;
                        cursor: pointer;
                        text-align: center;

                        i {

                            display: block;
                            margin-top: 27px;
                            border-bottom: 1px solid $white;
                            position: relative;
                            width: 10px;
                            transition: all 250ms ease-out;
                            &:before {
                                width: 100%;
                                content: "";
                                border-bottom: 1px solid $white;
                                display: block;
                                position: absolute;
                                top: 0;
                                transform: rotate(90deg);
                            }
                        }
                    }
                }
            }
        }
    }
</style>