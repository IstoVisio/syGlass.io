<template>
    <div class="testimonial-slider-area section-space--pb_120 section-space-custom-pt bg-gray" id="review">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title-wrapper text-center section-space--mb_60">
                        <h6 class="section-sub-title mb-20 font-weight--bold wow move-up">Write & read reviews</h6>
                        <h2 class="section-title font-weight--blod wow move-up">Right from the word go</h2>
                    </div>
                </div>
            </div>
            <!-- testimonial component -->
            <TestimonialTwo />
        </div>
    </div>
</template>

<script>
    import TestimonialTwo from '../../components/TestimonialTwo'
    
    export default {
        name: 'EbookTestimonial',
        components: {
            TestimonialTwo
        }
    };
</script>