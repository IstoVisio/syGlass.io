<template>
    <div class="row">
        <div class="col-md-6">
            <div class="feature-list-progress section-space--pt_60">
                <div class="feature-list-progress__counter">
                    <div class="circle-progress-wrapper">
                        <div class="chart-progress">
                            <div class="chart-progress__inner-wrapper">
                                <div class="chart-progress__inner">
                                    <vue-circle
                                        :progress="95"
                                        :size="160"
                                        line-cap="round"
                                        :fill="fill"
                                        :thickness="4"
                                        :start-angle="0"
                                        :show-percent="true">
                                    </vue-circle>
                                </div>
                            </div>
                        </div>
                        <div class="circle-design one"></div>
                        <div class="circle-design two"></div>
                    </div>
                </div>
                <div class="feature-list-progress__info">
                    <h6 class="feature-list-progress__title mb-20">Digital Marketing</h6>
                    <ul class="feature-list-progress__list">
                        <li>Keyword rank tracking</li>
                        <li>Website audit</li>
                        <li>Marketing, SEO</li>
                        <li>Social Media</li>
                        <li>Social Media</li>
                        <li>On-page SEO Audit</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-6">
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
                                        :show-percent="true">
                                    </vue-circle>
                                </div>
                            </div>
                        </div>
                        <div class="circle-design circle-design--blue one"></div>
                        <div class="circle-design circle-design--blue two"></div>
                    </div>
                </div>
                <div class="feature-list-progress__info">
                    <h6 class="feature-list-progress__title mb-20">Digital Marketing</h6>
                    <ul class="feature-list-progress__list">
                        <li>Digital Marketing</li>
                        <li>Website audit</li>
                        <li>Marketing, SEO</li>
                        <li>Social Media</li>
                        <li>Social Media</li>
                        <li>On-page SEO Audit</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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