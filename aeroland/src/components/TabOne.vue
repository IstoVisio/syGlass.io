<template>
    <div class="ht-tab-wrap">
        <b-tabs v-model="tabIndex" class="ht-tab-menu wow move-up">
            <b-tab title="Load" active class="cyclebutton">
                <TabContentOne />  
            </b-tab>
            <b-tab title="Analyze" class="cyclebutton">
                <TabContentTwo /> 
            </b-tab>
            <b-tab @click="scrollToElement" title="Share" class="cyclebutton">
                <TabContentTwo />  
            </b-tab>
        </b-tabs>
        <div class="container" >
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
                if (el) {
                el.scrollIntoView({behavior: 'smooth'});
                }
            },
        }        
    };   
</script>
