<template>
    <div class="app-showcase-process-step__one">
        <div class="row">
            <div class="col-lg-5 col-md-5">
                <div class="app-showcase-process-step__media text-center wow move-up">
                    <img :src="img" class="img-fluid" alt="thumbnail">
                </div>
            </div>
            <div class="col-lg-7 col-md-7">
                <div class="app-showcase-process-step__content section-space--mt_40">
                    <div class="app-showcase__inner">
                        <div class="sub__title mb-20 wow move-up">
                            <h6 class="font-weight--blod">{{ subtitle }}</h6>
                        </div>
                        <h4 class="font-weight--light wow move-up">{{ title }}</h4>
                        <div class="sub-text section-space--mb_40  wow move-up">
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
        name: 'LoginScreen',
        data (){
            return {
                img: require("../assets/img/features/aeroland-app-showcase-image-03.jpg"),
                subtitle: "01 – login screen",
                title: "Everything starts with the login screen",
                desc: "The design of a login screen is intended to give users a quick and secure way to access their personal account. Bot detection algorithm is available for selection."
            }
        }
    };
</script>
