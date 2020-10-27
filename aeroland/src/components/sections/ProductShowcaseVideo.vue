<template>
    <div class="product-showcase-video-wrapper section-space--pt_60 section-space--pb_120" id="video">
        <div class="container-fluid container-fluid--cp-120">
            <div class="row align-items-center">
                <div class="col-xl-8 col-lg-7">
                    <div class="product-showcase-video video-popup video-link">
                        <silentbox-single src="https://www.youtube.com/watch?v=9No-FiEInLA">
                            <div class="single-popup-wrap">
                                <img class="img-fluid" src="../../assets/img/bg/product-showcase-video-poster.jpg" alt="">
                                <div class="ht-popup-video video-button video-overlay">
                                    <div class="video-button__three">
                                        <div class="video-play">
                                            <span class="video-play-icon"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </silentbox-single>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-5 wow move-up">
                    <div class="product-showcase-video-title">
                        <h6 class="sub-heading">Video intro</h6>
                        <h3 class="font-weight--light text-black">The best companion for busy people on the go. Safe and reliable at best.</h3>
                        <div class="buy-now-button section-space--mt_40">
                            <button class="ht-btn ht-btn-md">$139 Buy now</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'ProductShowcaseVideo',
    };
</script>