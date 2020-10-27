<template>
    <div class="clinic-funfact-wrapper section-space--ptb_120 bg-gray" id="statistic">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title text-center section-space--mb_60">
                        <h2 class="font-weight--bold mb-10 wow move-up">No stories, facts only</h2>
                        <div class="sub-text wow move-up"> Offer your business with the best assistance for growth.</div>
                    </div>
                </div>
            </div>
            <!-- funfact component -->
            <FunFactOne />
        </div>
    </div>
</template>

<script>
    import FunFactOne from '../FunFactOne'

    export default {
        name: 'ClinicCounterup',
        components: {
            FunFactOne
        }
    };
</script>