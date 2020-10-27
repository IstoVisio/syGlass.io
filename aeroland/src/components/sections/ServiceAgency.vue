<template>
    <div class="digital-agency-assistance-area  section-space--ptb_120" id="about">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="digital-agency-section-title text-center section-space--mb_60">
                        <h6 class="section-sub-title mb-20 font-weight--bold wow move-up">Welcome to AeroLand</h6>
                        <h3 class="section-title font-weight--light mb-15 wow move-up">Offer your business with the best <br> assistance for growth.</h3>
                    </div>
                </div>
            </div>

            <!-- service agency component -->
            <ServiceItemAgency />
        </div>
    </div>
</template>

<script>
    import ServiceItemAgency from '../ServiceItemAgency'
    export default{
        name: 'ServiceAgency',
        components: {
            ServiceItemAgency
        }
    };
</script>

<style lang="scss">

</style>