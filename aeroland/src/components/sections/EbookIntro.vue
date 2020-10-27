<template>
    <div class="ebook-feature section-space--pt_120 section-space--pb_60" id="intro">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title-wrapper text-center section-space--mb_60">
                        <h6 class="section-sub-title mb-20 font-weight--bold wow move-up">What’s included?</h6>
                        <h2 class="section-title font-weight--blod wow move-up">We deliver the best services for <br> app design and coding</h2>
                    </div>
                </div>
            </div>
            <!-- ebook features component -->
            <EbookFeature />
        </div>
    </div>
</template>

<script>
    import EbookFeature from '@/components/EbookFeature'

    export default {
        name: 'EbookIntro',
        components: {
            EbookFeature
        }
    };
</script>