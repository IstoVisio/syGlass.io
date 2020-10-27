<template>
    <div class="clinic-feature section-space--pt_120 section-space--pb_90" id="service">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title-wrapper text-center section-space--mb_60">
                        <h6 class="section-sub-title mb-20 font-weight--bold wow move-up">What’s included?</h6>
                        <h2 class="section-title font-weight--blod wow move-up">Experienced staff. Excellent care.</h2>
                    </div>
                </div>
            </div>
            <!-- clinic feature component -->
            <ClinicFeature />
        </div>
    </div>
</template>

<script>
    import ClinicFeature from '@/components/ClinicFeature'

    export default {
        name: 'ClinicFeatureSection',
        components: {
            ClinicFeature
        }
    };
</script>