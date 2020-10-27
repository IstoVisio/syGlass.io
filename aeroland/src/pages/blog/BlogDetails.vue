<template>
    <div class="main-container">

        <router-view></router-view>

        <!-- Navbar section -->
        <HeaderElement />

        <!-- breadcrumb strat -->
        <Breadcrumb>
            <template slot="breadcrumb">
                <div class="breadcrumb_box text-center">
                    <h2 class="breadcrumb-title">Blog Details</h2>
                    <!-- breadcrumb-list start -->
                    <ul class="breadcrumb-list">
                        <li class="breadcrumb-item">
                            <router-link :to="{name:'HomeBranding'}">Home</router-link>
                        </li>
                        <li class="breadcrumb-item">
                            <router-link :to="{name:'BlogListLargeImage'}">Blog</router-link>
                        </li>
                        <li class="breadcrumb-item active">Blog Details</li>
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
                            <div class="single-blog-item">
                                <!-- Post Feature Start -->
                                <div class="post-feature blog-thumbnail  wow move-up">
                                    <img class="img-fluid" src="@/assets/img/blog/blog-770x420.jpg" alt="Blog Images">
                                </div>
                                <!-- Post Feature End -->

                                <!-- Post info Start -->
                                <div class="post-info lg-blog-post-info  wow move-up">
                                    <div class="post-categories">
                                        <router-link to="/blog-list-large-image">App Release</router-link>
                                    </div>

                                    <h4 class="post-title font-weight--light">
                                        Specialized Design Tools for 2019
                                    </h4>

                                    <div class="post-meta mt-20">
                                        <div class="post-author">
                                            <router-link to="">
                                                <img class="img-fluid avatar-96" src="@/assets/img/team/admin.png" alt="admin photo"> 
                                                Harry Ferguson
                                            </router-link>
                                        </div>
                                        <div class="post-date">
                                            <span class="far fa-calendar meta-icon"></span>
                                            January 14, 2019
                                        </div>
                                        <div class="post-comments">
                                            <span class="far fa-comment-alt meta-icon"></span>
                                            <router-link to="" class="smooth-scroll-link">4 Comments</router-link>
                                        </div>
                                    </div>

                                    <div class="post-excerpt mt-15">
                                        <p>The three-day, Ireland-based conference is now in its 10th year, and will feature a line-up of political illustrators, graphic designers, advertising agencies and film directors.</p>

                                        <blockquote>
                                            <p class="p1">The role of the designer is that of a good, thoughtful host anticipating the needs of his guests. –Charles Eames</p>
                                        </blockquote>

                                        <p>Offset Dublin has revealed some of its speakers for 2019, which include political illustrator Edel Rodriguez and newly-appointed Pentagram partner Yuri Suzuki.</p>

                                        <p>The three-day annual conference has been running since 2010, and has since branched out with smaller conferences in Sheffield and London.</p>

                                        <p>Offset Dublin is the original branch of the festival brand, and will run from 5-7 April, moving from its previous venue of the Bord Gáis Energy Theatre to The Point Square. There will be two stages with 100 speakers in total.</p>
                                        <p>Source:&nbsp;designweek.co.uk</p>

                                        <div class="entry-post-share-wrap  border-bottom">
                                            <div class="row align-items-center">
                                                <div class="col-lg-6 col-md-6">
                                                    <div class="entry-post-tags">
                                                        <div class="tagcloud-icon">
                                                            <i class="fa fa-tags"></i>
                                                        </div>
                                                        <div class="tagcloud">
                                                            <router-link to="">Designer</router-link>, 
                                                            <router-link to="">Font</router-link>, 
                                                            <router-link to="">Mockup</router-link>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-lg-6 col-md-6">
                                                    <div id="entry-post-share" class="entry-post-share">
                                                        <div class="share-label">
                                                            Share this post
                                                        </div>
                                                        <div class="share-media">
                                                            <span class="share-icon far fa-share-alt"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="entry-author">
                                            <div class="author-info">
                                                <div class="author-avatar">
                                                    <img src="@/assets/img/team/avatar-06-90x90.png" alt="image">
                                                    <div class="author-social-networks">
                                                        <div class="inner">
                                                            <a class="hint--bounce hint--top hint--primary" aria-label="Twitter" href="https://twitter.com/" target="_blank">
                                                                <i class="fab fa-twitter"></i>
                                                            </a>

                                                            <a class="hint--bounce hint--top hint--primary" aria-label="Facebook" href="https://www.facebook.com/" target="_blank">
                                                                <i class="fab fa-facebook-f"></i>
                                                            </a>

                                                            <a class="hint--bounce hint--top hint--primary" aria-label="Instagram" href="https://www.instagram.com/" target="_blank">
                                                                <i class="fab fa-instagram"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="author-description">
                                                    <h6 class="author-name">Harry Ferguson</h6>
                                                    <div class="author-biographical-info">
                                                        Harry Ferguson is an author, blogger, and designer living in a suburb of Washington, DC. When he’s not designing, blogging, or writing, Ferguson can be found with his head in a book or pinning like a madman.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="related-posts-wrapper">

                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <h5 class="widget-title font-weight--light">Related Posts </h5>
                                                </div>
                                                <div class="col-lg-6">
                                                    <!-- Single Valid Post Start -->
                                                    <router-link class="single-valid-post-wrapper" to="">
                                                        <div class="single-blog__item">
                                                            <div class="single-valid__thum bg-img">
                                                            </div>
                                                            <div class="post-content">
                                                                <div class="post-info">
                                                                    <div class="post-meta">
                                                                        <div class="post-categories">
                                                                            <span>App Release</span>
                                                                        </div>
                                                                    </div>
                                                                    <h6 class="post-title font-weight--bold">Designers’ Identities & Social Unconscious Bias</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </router-link>
                                                    <!-- Single Valid Post End -->
                                                </div>
                                            </div>
                                        </div>

                                        <div class="comment-list-wrapper">

                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <h5 class="widget-title font-weight--light">Comments (4) </h5>
                                                </div>
                                                <div class="col-lg-12">

                                                    <ol class="comment-list">
                                                        <li class="comment">
                                                            <div class="comment-2">
                                                                <div class="comment-author vcard">
                                                                    <img alt="" src="@/assets/img/team/avatar-05-60x60.png">
                                                                </div>
                                                                <div class="comment-content">
                                                                    <div class="meta">
                                                                        <h6 class="fn">Edna Watson</h6>
                                                                        <div class="comment-datetime"> November 13, 2018 at 4:31 am </div>
                                                                    </div>
                                                                    <div class="comment-text">
                                                                        <p>Working with AeroLand is like having a family member who can fix everything. They know what you need, exactly when you need it.</p>
                                                                    </div>

                                                                    <div class="comment-actions">
                                                                        <a class="comment-reply-link" href="javascript:void(0)">Reply</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <ol class="children">
                                                                <li class="comment">
                                                                    <div class="comment-3">
                                                                        <div class="comment-author vcard">
                                                                            <img alt="" src="@/assets/img/team/avatar-06-60x60.png">
                                                                        </div>
                                                                        <div class="comment-content">
                                                                            <div class="meta">
                                                                                <h6 class="fn">James Scott</h6>
                                                                                <div class="comment-datetime">
                                                                                    November 13, 2018 at 4:44 am 
                                                                                </div>
                                                                            </div>
                                                                            <div class="comment-text">
                                                                                <p>Working with AeroLand is like having a family member who can fix everything. They know what you need, exactly when you need it.</p>
                                                                            </div>

                                                                            <div class="comment-actions">
                                                                                <a class="comment-reply-link" href="javascript:void(0)">Reply</a> 
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li><!-- comment End -->
                                                            </ol><!-- children End -->
                                                        </li><!-- comment End-->
                                                        <li class="comment">
                                                            <div class="comment-5">
                                                                <div class="comment-author vcard">
                                                                    <img alt="" src="@/assets/img/team/avatar-06-60x60.png">
                                                                </div>
                                                                <div class="comment-content">
                                                                    <div class="meta">
                                                                        <h6 class="fn">James Scott</h6>
                                                                        <div class="comment-datetime">
                                                                            November 13, 2018 at 4:50 am 
                                                                        </div>
                                                                    </div>
                                                                    <div class="comment-text">
                                                                        <p>Working with AeroLand is like having a family member who can fix everything. They know what you need, exactly when you need it.</p>
                                                                    </div>

                                                                    <div class="comment-actions">
                                                                        <a class="comment-reply-link" href="javascript:void(0)">Reply</a> 
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li><!-- comment End-->
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="comment-list-wrapper">

                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <h5 class="widget-title font-weight--light">Leave your thought here </h5>
                                                    <p>Your email address will not be published. Required fields are marked *</p>
                                                </div>

                                                <div class="col-lg-12">
                                                    <div class="contact-from-wrapper section-space--mt_30">
                                                        <form>
                                                            <div class="contact-page-form">
                                                                <div class="contact-input">
                                                                    <div class="contact-inner">
                                                                        <input name="name" type="text" placeholder="Name *">
                                                                    </div>
                                                                    <div class="contact-inner">
                                                                        <input name="email" type="email" placeholder="Email *">
                                                                    </div>
                                                                </div>
                                                                <div class="contact-inner contact-message">
                                                                    <textarea name="message" placeholder="Message *"></textarea>
                                                                </div>
                                                                <div class="comment-submit-btn">
                                                                    <button class="ht-btn ht-btn-md" type="submit">Submit</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
