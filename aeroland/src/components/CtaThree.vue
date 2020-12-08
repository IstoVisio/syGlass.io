
<template>
    <div class="cta-image-area cta-image-bg_05 ">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="cta-image">
                        <div class="row align-items-center">
                            <div class="col-lg-6 order-2 order-lg-1">
                                <div class="cta-image__content">
                                    <h4 class="cta-image__title text-white mb-20 wow move-up">Free download of syGlass View</h4>
                                    <div class="cta-image__text text-white mb-20 wow move-up">
syGlass View is a free version of syGlass that is redefining the communication of scientific data.


Explore image volumes provided by scientists and educators around the world in virtual reality.
</div>
                                    <router-link to="viewDownload" class="btn btn--green wow move-up">
                                        <span class="btn-icon  ml-0 mr-2"><i class="fa fa-arrow-alt-to-bottom"></i></span> Get syGlass
                                    </router-link>
                                </div>
                            </div>
                            <div class="col-lg-6 order-1 order-lg-2">
                                <div class="cta-image_two section-space--mt_60 wow move-up">
                                    <img src="../assets/img/syglass/occulus.png" class="img-fluid">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CtaThree',
    }
</script>
