<template>
    <div class="main-container">

        <router-view></router-view>

        <!-- Navbar section -->
        <HeaderElement />

        <!-- breadcrumb strat -->
        <Breadcrumb>
            <template slot="breadcrumb">
                <div class="breadcrumb_box text-center">
                    <h2 class="breadcrumb-title">Blog</h2>
                    <!-- breadcrumb-list start -->
                    <ul class="breadcrumb-list">
                        <li class="breadcrumb-item">
                            <router-link :to="{name:'HomeBranding'}">Home</router-link>
                        </li>
                        <li class="breadcrumb-item active">Blog</li>
                    </ul>
                    <!-- breadcrumb-list end -->
                </div>
            </template>
        </Breadcrumb>
        <!-- breadcrumb end -->

        <!-- blog item wrapper start -->
        <div class="blog-pages-wrapper section-space--ptb_100 border-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="main-blog-wrap">
                            <!--======= Single Blog Item Start ========-->
                            <div class="single-blog-item lg-blog-item border-bottom wow move-up">
                                <!-- Post Feature Start -->
                                <div class="post-feature blog-thumbnail">
                                    <router-link to="/blog-details">
                                        <img class="img-fluid" src="@/assets/img/blog/blog-770x420.jpg" alt="Blog Images">
                                    </router-link>
                                </div>
                                <!-- Post Feature End -->

                                <!-- Post info Start -->
                                <div class="post-info lg-blog-post-info">
                                    <div class="post-categories">
                                        <router-link to="/">App Release</router-link>
                                    </div>

                                    <h4 class="post-title font-weight--light">
                                        <router-link to="/blog-details">Specialized Design Tools for 2019</router-link>
                                    </h4>

                                    <div class="post-meta mt-20">
                                        <div class="post-author">
                                            <router-link to="/blog-details">
                                                <img class="img-fluid avatar-96" src="@/assets/img/team/admin.png" alt="image"> 
                                                Harry Ferguson
                                            </router-link>
                                        </div>
                                        <div class="post-date">
                                            <span class="far fa-calendar meta-icon"></span>
                                            January 14, 2019
                                        </div>
                                    </div>

                                    <div class="post-excerpt mt-15">
                                        <p>As a result, along with the larger corporate-backed applications, we have a huge host of small tools and libraries, each designed to solve a particular problem or preserve a certain set of possibilities. A couple of these projects have become institutions: Modernizr, keeping the technical …</p>
                                    </div>

                                    <div class="post-read-more mt-20">
                                        <router-link to="/blog-details" class="ht-btn ht-btn-sm">
                                            <span class="btn-text">Read more </span>
                                        </router-link>
                                    </div>
                                </div>
                                <!-- Post info End -->
                            </div>
                            <!--===== Single Blog Item End =========-->

                            <!--========== Single Blog Item Start ==========-->
                            <div class="single-blog-item lg-blog-item border-bottom wow move-up">
                                <!-- Post Feature Start -->
                                <div class="post-feature post-quote">
                                    <h5 class="post-quote-text">
                                        <router-link to="/blog-details">
                                            “Design is not just what it looks like and feels like. Design is how it works. –Steve Jobs”
                                        </router-link>
                                    </h5>
                                    <h6 class="post-quote-name">- Kasahara May</h6>
                                </div>
                                <!-- Post Feature End -->

                                <!-- Post info Start -->
                                <div class="post-info lg-blog-post-info">
                                    <div class="post-categories">
                                        <router-link to="">App Release</router-link>
                                    </div>

                                    <h4 class="post-title font-weight--light">
                                        <router-link to="/blog-details">Foundation 3 – the Truly Great Move</router-link>
                                    </h4>

                                    <div class="post-meta mt-20">
                                        <div class="post-author">
                                            <router-link to="/blog-details">
                                                <img class="img-fluid avatar-96" src="@/assets/img/team/admin.png" alt="image">
                                                Harry Ferguson
                                            </router-link>
                                        </div>
                                        <div class="post-date">
                                            <span class="far fa-calendar meta-icon"></span>
                                            January 14, 2019
                                        </div>
                                    </div>

                                    <div class="post-excerpt mt-15">
                                        <p>Responsive design seems to have gone from zero to about a thousand miles an hour in no time flat. And things are still changing fast enough that small development shops are hard-pushed to stay up to date, let alone conduct their own R&amp;D. That’s where Foundation…</p>
                                    </div>

                                    <div class="post-read-more mt-20">
                                        <router-link to="/blog-details" class="ht-btn ht-btn-sm">
                                            <span class="btn-text">Read more </span>
                                        </router-link>
                                    </div>
                                </div>
                                <!-- Post info End -->
                            </div>
                            <!--=========== Single Blog Item End =============-->

                            <!--========== Single Blog Item Start ==========-->
                            <div class="single-blog-item lg-blog-item border-bottom wow move-up">
                                <!-- Post Feature Start -->
                                <div class="post-feature blog-thumbnail">
                                    <router-link to="/blog-details">
                                        <img class="img-fluid" src="@/assets/img/blog/blog-09-770x420.jpg" alt="Blog Images">
                                    </router-link>
                                </div>
                                <!-- Post Feature End -->

                                <!-- Post info Start -->
                                <div class="post-info lg-blog-post-info">
                                    <div class="post-categories">
                                        <router-link to="/">App Release</router-link>
                                    </div>

                                    <h4 class="post-title font-weight--light">
                                        <router-link to="/blog-details">Specialized Design Tools for 2019</router-link>
                                    </h4>

                                    <div class="post-meta mt-20">
                                        <div class="post-author">
                                            <router-link to="/blog-details">
                                                <img class="img-fluid avatar-96" src="@/assets/img/team/admin.png" alt="image"> 
                                                Harry Ferguson
                                            </router-link>
                                        </div>
                                        <div class="post-date">
                                            <span class="far fa-calendar meta-icon"></span>
                                            January 14, 2019
                                        </div>
                                    </div>

                                    <div class="post-excerpt mt-15">
                                        <p>As a result, along with the larger corporate-backed applications, we have a huge host of small tools and libraries, each designed to solve a particular problem or preserve a certain set of possibilities. A couple of these projects have become institutions: Modernizr, keeping the technical …</p>
                                    </div>

                                    <div class="post-read-more mt-20">
                                        <router-link to="/blog-details" class="ht-btn ht-btn-sm">
                                            <span class="btn-text">Read more </span>
                                        </router-link>
                                    </div>
                                </div>
                                <!-- Post info End -->
                            </div>
                            <!--=========== Single Blog Item End =============-->

                            <!--========== Single Blog Item Start ==========-->
                            <div class="single-blog-item lg-blog-item border-bottom wow move-up">

                                <!-- Post Feature Start -->
                                <div class="post-feature post-link">
                                    <h5 class="link-text">
                                        <a href="https://themeforest.net/user/bootxperts/portfolio" target="_blank">
                                        https://themeforest.net/user/bootxperts/portfolio</a>
                                    </h5>
                                </div>
                                <!-- Post Feature End -->

                                <!-- Post info Start -->
                                <div class="post-info lg-blog-post-info">
                                    <div class="post-categories">
                                        <router-link to="">Project Showcase</router-link>
                                    </div>

                                    <h4 class="post-title font-weight--light">
                                        <router-link to="/blog-details">D&AD Festival 2019’s Brand Identity</router-link>
                                    </h4>

                                    <div class="post-meta mt-20">
                                        <div class="post-author">
                                            <router-link to="/blog-details">
                                                <img class="img-fluid avatar-96" src="@/assets/img/team/admin.png" alt="image"> Harry Ferguson
                                            </router-link>
                                        </div>
                                        <div class="post-date">
                                            <span class="far fa-calendar meta-icon"></span>
                                            January 14, 2019
                                        </div>
                                    </div>

                                    <div class="post-excerpt mt-15">
                                        <p>The collaborative working tool, used by employees to chat and share projects, has a new “simplified” logo with a smaller color palette, that does away with the brand’s characteristic slanted hashtag symbol. It’s through mistakes that you actually can grow. You have to get bad …</p>
                                    </div>

                                    <div class="post-read-more mt-20">
                                        <router-link to="/blog-details" class="ht-btn ht-btn-sm">
                                            <span class="btn-text">Read more </span>
                                        </router-link>
                                    </div>
                                </div>
                                <!-- Post info End -->
                            </div>
                            <!--=========== Single Blog Item End =============-->

                            <!--======= Single Blog Item Start ========-->
                            <div class="single-blog-item lg-blog-item border-bottom wow move-up">
                                <!-- Post Feature Start -->
                                <div class="post-feature blog-thumbnail">
                                    <router-link to="/blog-details">
                                        <img class="img-fluid" src="@/assets/img/blog/blog-01-770x420.jpg" alt="Blog Images">
                                    </router-link>
                                </div>
                                <!-- Post Feature End -->

                                <!-- Post info Start -->
                                <div class="post-info lg-blog-post-info">
                                    <div class="post-categories">
                                        <router-link to="/">App Release</router-link>
                                    </div>

                                    <h4 class="post-title font-weight--light">
                                        <router-link to="/blog-details">Specialized Design Tools for 2019</router-link>
                                    </h4>

                                    <div class="post-meta mt-20">
                                        <div class="post-author">
                                            <router-link to="/blog-details">
                                                <img class="img-fluid avatar-96" src="@/assets/img/team/admin.png" alt="image"> 
                                                Harry Ferguson
                                            </router-link>
                                        </div>
                                        <div class="post-date">
                                            <span class="far fa-calendar meta-icon"></span>
                                            January 14, 2019
                                        </div>
                                    </div>

                                    <div class="post-excerpt mt-15">
                                        <p>As a result, along with the larger corporate-backed applications, we have a huge host of small tools and libraries, each designed to solve a particular problem or preserve a certain set of possibilities. A couple of these projects have become institutions: Modernizr, keeping the technical …</p>
                                    </div>

                                    <div class="post-read-more mt-20">
                                        <router-link to="/blog-details" class="ht-btn ht-btn-sm">
                                            <span class="btn-text">Read more </span>
                                        </router-link>
                                    </div>
                                </div>
                                <!-- Post info End -->
                            </div>
                            <!--===== Single Blog Item End =========-->

                            <!--======= Single Blog Item Start ========-->
                            <div class="single-blog-item lg-blog-item border-bottom wow move-up">
                                <!-- Post Feature Start -->
                                <div class="post-feature blog-thumbnail">
                                    <router-link to="/blog-details">
                                        <img class="img-fluid" src="@/assets/img/blog/blog-10-770x420.jpg" alt="Blog Images">
                                    </router-link>
                                </div>
                                <!-- Post Feature End -->

                                <!-- Post info Start -->
                                <div class="post-info lg-blog-post-info">
                                    <div class="post-categories">
                                        <router-link to="/">App Release</router-link>
                                    </div>

                                    <h4 class="post-title font-weight--light">
                                        <router-link to="/blog-details">Creativity Boosting App is Here</router-link>
                                    </h4>

                                    <div class="post-meta mt-20">
                                        <div class="post-author">
                                            <router-link to="/blog-details">
                                                <img class="img-fluid avatar-96" src="@/assets/img/team/admin.png" alt="image"> 
                                                Harry Ferguson
                                            </router-link>
                                        </div>
                                        <div class="post-date">
                                            <span class="far fa-calendar meta-icon"></span>
                                            January 14, 2019
                                        </div>
                                    </div>

                                    <div class="post-excerpt mt-15">
                                        <p>As a result, along with the larger corporate-backed applications, we have a huge host of small tools and libraries, each designed to solve a particular problem or preserve a certain set of possibilities. A couple of these projects have become institutions: Modernizr, keeping the technical …</p>
                                    </div>

                                    <div class="post-read-more mt-20">
                                        <router-link to="/blog-details" class="ht-btn ht-btn-sm">
                                            <span class="btn-text">Read more </span>
                                        </router-link>
                                    </div>
                                </div>
                                <!-- Post info End -->
                            </div>
                            <!--===== Single Blog Item End =========-->
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <SidebarBlog />
                    </div>
                </div>
            </div>
        </div>
        <!-- blog item wrapper end -->

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
    import SidebarBlog from '@/components/SidebarBlog'
    import FooterMain from '@/components/FooterMain'
    import OffcanvasSearchBox from '@/components/OffcanvasSearchBox'
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

    export default {
        name: 'BlogListLargeImage',
        components: {
            HeaderElement,
            Breadcrumb,
            SidebarBlog,
            FooterMain,
            OffcanvasSearchBox,
            OffCanvasMobileMenu
        },
    }
</script>

