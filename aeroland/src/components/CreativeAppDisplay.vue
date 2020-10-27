<template>
    <div class="app-showcase-process-step__three section-space--pt_60">
        <div class="row">
            <div class="col-lg-6">
                <div class="app-showcase-process-step__media text-center wow move-up">
                    <img src="../assets/img/features/aeroland-app-showcase-image-05.png" class="img-fluid" alt="thumbnail">
                </div>
            </div>
            <div class="col-lg-5 offset-lg-1">
                <div class="app-showcase-process-step__content section-space--pt_90">
                    <div class="app-showcase__inner">
                        <div class="sub__title mb-20">
                            <h6 class="font-weight--blod wow move-up">{{ subtitle }}</h6>
                        </div>
                        <h4 class="font-weight--light wow move-up">{{ title }}</h4>
                        <div class="sub-text section-space--mb_40 wow move-up">
                            {{ desc }}
                        </div>
                        <div class="btn-sowcase section-space--mb_40 wow move-up">
                            <a href="#" class="ht-btn ht-btn-md">Download now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'CreativeAppDisplay',
        data(){
            return {
                subtitle: "03-social share!",
                title: "Creative App Display",
                desc: "TMore than 35 social platforms are integrated into the app. Cross-platform sharing & displaying followers and likes are easy and convenient with just a few clicks."
            }
        }
    };
</script>

<style lang="scss">

</style>