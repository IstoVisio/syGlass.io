<template>
    <div class="tabs-wrapper section-space--pt_120 section-space--pb_60" :class="BgGradient">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <slick class="slick1 tab-slider-nav"
                        :options="slickOptions">
                        <div class="tab-slider-nav--list wow move-up">
                            <i class="ht-slider-tab-icon fal fa-align-left"></i>
                            <h5>Visualize Image Data and 3D Meshes</h5>
                            <p>syGlass can read image data from TIFF, PNG, JPEG, DICOM, VSI, OIR, IMS, CZI, ND2, and LIF files, and import OBJ and STEP files as mesh surfaces.</p>
                        </div>
                        <div class="tab-slider-nav--list wow move-up">
                            <i class="ht-slider-tab-icon fal fa-rocket"></i>
                            <h5>Better Technology, Lower Costs</h5>
                            <p>Resources shouldn’t stand in the way of your discoveries. That’s why we provide our cutting-edge technology to researchers and educators around the world at an extremely affordable price </p>
                        </div>
                        <div class="tab-slider-nav--list wow move-up">
                            <i class="ht-slider-tab-icon fal fa-chart-pie"></i>
                            <h5>Meet With Others Online.</h5>
                            <p>Dive deep into your data with others in MultiView, our online collaboration system..</p>
                        </div>
                    </slick>
                </div>
                <div class="col-lg-8">
                    <slick class="slick2"
                        :options="slickOptions2">
                            <div class="pro-large-img img-zoom">
                                <img class="img-fluid" src="../assets/img/syglass/skullMesh.png" alt="product-details" />
                            </div>
                            <div class="pro-large-img img-zoom">
                                <img class="img-fluid" src="../assets/img/syglass/20200522090256.png" alt="product-details" />
                            </div>
                            <div class="pro-large-img img-zoom">
                                <img class="img-fluid" src="../assets/img/syglass/multiview.png" alt="product-details" />
                            </div>
                    </slick>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Slick from 'vue-slick';

    export default {
        name: 'TabTwo',
        props: ["BgGradient"],
        components: {
            Slick
        },
        data() {
            return {
                slickOptions: {
                    slidesToShow: 3,
                    focusOnSelect: true,
                    vertical: true,
                    asNavFor: '.slick2',
					
                },
                slickOptions2: {
					autoplay: true,
					autoplaySpeed: 3000,
                    arrows: false,
                    fade:true,
                    dots:true,
                    asNavFor: '.slick1',

                }
            };
        }
    };
</script>