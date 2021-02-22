<template>
    <div class="ht-tab-wrap">
        <b-tabs v-model="tabIndex" class="ht-tab-menu wow move-up">
            <b-tab title="Load" active class="cyclebutton">
                <!-- tab content one component -->
                <TabContentOne />  
            </b-tab>
            <b-tab title="Analyze" class="cyclebutton">
                <!-- tab content two component -->
                <TabContentTwo /> 
            </b-tab>
            <b-tab @click="scrollToElement" title="Share" class="cyclebutton">
                <TabContentTwo />  
            </b-tab>
        </b-tabs>
        
        <div class="container section-space--pt_120" >
            <div class="row">
                <div class="col">
                    <img src="../assets/img/syglass/20200522090256.png" class="img-fluid" alt="hero thumb">
                </div>
                <div class="col">
                    <img src="../assets/img/syglass/2020-05-22_10-10-43.png" class="img-fluid" alt="hero thumb">
                </div>
                <div class="col">
                    <img src="../assets/img/syglass/20181022162002.png" class="img-fluid" alt="hero thumb">
                </div>
                <div class="col">
                    <img src="../assets/img/syglass/2020-05-20_11-57-50.png" class="img-fluid" alt="hero thumb">
                </div>
            </div>
            <div class="scroll-to-me"> </div>
        </div>
    </div>
</template>

<script>
    import TabContentOne from '../components/TabContentOne'
    import TabContentTwo from '../components/TabContentTwo'

    export default {
        name: 'TabOne',
        components: {
            TabContentOne,
            TabContentTwo,
        },
        data: function ()  {
            return {
                tabIndex: 0,
            }
        },
        methods: {
            scrollToElement() {
                const el = this.$el.getElementsByClassName('scroll-to-me')[0];
                //console.log(button);
                if (el) {
                // Use el.scrollIntoView() to instantly scroll to the element
                el.scrollIntoView({behavior: 'smooth'});
                }
            },

        },
        mounted() {
            this.scrollToElement()
        }
        

    };   
</script>
