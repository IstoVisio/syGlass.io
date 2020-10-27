<template>
    <div class="row">
        <div class="col-lg-3 col-sm-6">
            <div class="feature-list-progress section-space--pt_60">
                <div class="feature-list-progress__counter">
                    <div class="circle-progress-wrapper">
                        <div class="chart-progress">
                            <div class="chart-progress__inner-wrapper">
                                <div class="chart-progress__inner chart-progress__inner--blue">
                                    <vue-circle
                                        :progress="75"
                                        :size="160"
                                        line-cap="round"
                                        :fill="blue"
                                        :thickness="4"
                                        :start-angle="0"
                                        :show-percent="false">
                                    </vue-circle>
                                    <div class="chart-progress__inner-content">
                                        <h4 class="chart-progress__inner-text"> 
                                            <span class="chart-number">01</span>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="circle-design circle-design--blue one"></div>
                        <div class="circle-design circle-design--blue two"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6">
            <div class="feature-list-progress section-space--pt_60">
                <div class="feature-list-progress__counter">
                    <div class="circle-progress-wrapper">
                        <div class="chart-progress">
                            <div class="chart-progress__inner-wrapper">
                                <div class="chart-progress__inner">
                                    <vue-circle
                                        :progress="75"
                                        :size="160"
                                        line-cap="round"
                                        :fill="fill"
                                        :thickness="4"
                                        :start-angle="0"
                                        :show-percent="false">
                                    </vue-circle>
                                    <div class="chart-progress__inner-content">
                                        <h4 class="chart-progress__inner-text"> 
                                            <span class="chart-number">02</span>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="circle-design one"></div>
                        <div class="circle-design two"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6">
            <div class="feature-list-progress section-space--pt_60">
                <div class="feature-list-progress__counter">
                    <div class="circle-progress-wrapper">
                        <div class="chart-progress">
                            <div class="chart-progress__inner-wrapper">
                                <div class="chart-progress__inner chart-progress__inner--blue">
                                    <vue-circle
                                        :progress="75"
                                        :size="160"
                                        line-cap="round"
                                        :fill="blue"
                                        :thickness="4"
                                        :start-angle="0"
                                        :show-percent="false">
                                    </vue-circle>
                                    <div class="chart-progress__inner-content">
                                        <h4 class="chart-progress__inner-text"> <span class="chart-icon"><span class="icon"><i class="fal fa-cogs"></i></span></span></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="circle-design circle-design--blue one"></div>
                        <div class="circle-design circle-design--blue two"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6">
            <div class="feature-list-progress section-space--pt_60">
                <div class="feature-list-progress__counter">
                    <div class="circle-progress-wrapper">
                        <div class="chart-progress">
                            <div class="chart-progress__inner-wrapper">
                                <div class="chart-progress__inner">
                                    <vue-circle
                                        :progress="75"
                                        :size="160"
                                        line-cap="round"
                                        :fill="fill"
                                        :thickness="4"
                                        :start-angle="0"
                                        :show-percent="false">
                                    </vue-circle>
                                    <div class="chart-progress__inner-content">
                                        <h4 class="chart-progress__inner-text"> <span class="chart-icon"><span class="icon"><i class="fab fa-vuejs"></i></span></span></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="circle-design one"></div>
                        <div class="circle-design two"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import VueCircle from 'vue2-circle-progress'
    import VueCircle from 'vue2-circle-progress/src/index.vue'

    export default {
        components: {
            VueCircle
        },
        data (){
            return {
                fill : { gradient: ["#fad961", "#f76b1c"] },
                blue : { gradient: ["#9C7AF2", "#5E61E7"] },
            }
        }
    }
</script>