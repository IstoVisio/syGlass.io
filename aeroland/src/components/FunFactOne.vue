<template>
    <div class="row mtn-30">
        <div class="col-lg-3 col-md-6 col-sm-6 wow move-up">
            <div class="fun-fact--one mt-30 text-center">
                <h5 class="fun-fact__title">Successfully <br> served</h5>
                <div class="fun-fact__count counter">
                    <ICountUp
                        :endVal="250"
                    />
                </div>
                <span class="fun-fact__text">HAPPY CLIENTS</span>
            </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 wow move-up">
            <div class="fun-fact--one mt-30 text-center">
                <h5 class="fun-fact__title">Successfully <br> completed</h5>
                <div class="fun-fact__count counter">
                    <ICountUp
                        :endVal="250"
                    />
                </div>
                <span class="fun-fact__text">BRANDING PROJECTS</span>
            </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 wow move-up">
            <div class="fun-fact--one mt-30 text-center">
                <h5 class="fun-fact__title">Recruit more <br> than</h5>
                <div class="fun-fact__count counter">
                    <ICountUp
                        :endVal="245"
                    />
                </div>
                <span class="fun-fact__text">PROFESSIONAL EXPERTS</span>
            </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 wow move-up">
            <div class="fun-fact--one mt-30 text-center">
                <h5 class="fun-fact__title">Published <br> widely</h5>
                <div class="fun-fact__count counter">
                    <ICountUp
                        :endVal="480"
                    />
                </div>
                <span class="fun-fact__text">BLOG POSTS</span>
            </div>
        </div>
    </div>
</template>

<script>
    import ICountUp from 'vue-countup-v2';
    export default {
        name: 'FunFactOne',
        components: {
            ICountUp
        },
        data() {
            return {
                delay: 300
            };
        }
    };
</script>