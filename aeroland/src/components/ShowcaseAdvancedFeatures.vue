<template>
    <div class="app-showcase-process-step__two section-space--pt_60">
        <div class="row align-items-center">
            <div class="col-lg-5 order-2 order-lg-1">
                <div class="app-showcase-process-step__content section-space--mt_40">
                    <div class="app-showcase__inner">
                        <div class="sub__title mb-20">
                            <h6 class="font-weight--blod  wow move-up">{{ subtitle }}</h6>
                        </div>
                        <h4 class="font-weight--light wow move-up">A Collection of <br> Advanced Features</h4>
                        <ul class="check-list green-check-list section-space--mt_30 wow move-up">
                            <li class="list-item" v-for="(list, i) in collections" :key="i">{{ list.collect }}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-lg-7 order-1 order-lg-2">
                <div class="app-showcase-process-step__media text-center wow move-up">
                    <img :src="img" class="img-fluid" alt="thumbnail">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'ShowcaseAdvancedFeatures',
        data(){
            return {
                img: require("../assets/img/features/aeroland-app-showcase-image-04.png"),
                subtitle: "02 – communicate with friends",
                collections: [
                    {
                        collect: "User-friendly, modern and intuitive"
                    },
                    {
                        collect: "Updated mobile design & features"
                    },
                    {
                        collect: "Beautiful icons, typography and images"
                    },
                    {
                        collect: "Extendable premium customer support"
                    }
                ]
            }
        }
    };
</script>