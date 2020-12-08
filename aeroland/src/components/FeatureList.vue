<template>
    <div class="feature-icon-list">
        <div class="row">
            <div class="col-lg-6">
                <div class="feature-icon-list__media wow move-up">
                    <img src="../assets/img/syglass/microscope.png" class="img-fluid" alt="">
                </div>
            </div>
            <div class="col-lg-6">
                <div class="feature-icon-list__content">
                    <div class="feature-icon-list-wrapper">
                        <div v-for="feature in features" :key="feature.id" class="single-feature-icon wow move-up">
                            <div class="single-feature-icon__media">
                                <img :src="feature.icon" class="img-fluid" alt="">
                            </div>
                            <div class="single-feature-icon__content">
                                <h6 class="title">{{ feature.title }}</h6>
                                <div class="text">{{ feature.desc }}</div>
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
        name: 'featureList',
        data (){
            return {
                features: [
                    {
                        icon: require('../assets/img/icons/aeroland-branding-box-image-01-1.png'),
                        title: 'Stable Even For Massive Datasets',
                        desc: 'syGlass is a software product that allows you to render large, volumetric data in its true, three-or-four dimensional form. Modern imaging techniques leave you inundated with large volumetric data, but syGlass can prepare up to 20 TB of data at a time, without crashing.'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-branding-box-image-02-1.png'),
                        title: 'Highly Responsive Tools',
                        desc: 'Data is scaled to allow you to see minute details in extreme detail. Perform analysis with enhanced precision, then annotate the data in syGlass with a vast array of practical tools.'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-branding-box-image-03-1.png'),
                        title: 'VR > 2D Monitors',
                        desc: 'Complete your work with natural, controlled motion. The stereoscopic vision of a VR headset fully leverages your visual cortex. This lowers the cognitive load, allowing you to process what you’re seeing, faster. Spend time enhancing your research in VR, rather than reconstructing the morphology of your data'
                    },
                ]
            }
        }
    }
</script>
