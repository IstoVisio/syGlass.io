<template>
    <div class="ht-tab-wrap">
        <b-tabs class="ht-tab-menu wow move-up">
            <b-tab title="Featured" active>
                <!-- tab content one component -->
                <TabContentOne />  
            </b-tab>
            <b-tab title="Our mission">
                <!-- tab content two component -->
                <TabContentTwo /> 
            </b-tab>
            <b-tab title="New Friendly Support">
                <!-- tab content third component -->
                <TabContentThree /> 
            </b-tab>
        </b-tabs>
    </div>
</template>

<script>
    import TabContentOne from '../components/TabContentOne'
    import TabContentTwo from '../components/TabContentTwo'
    import TabContentThree from '../components/TabContentThree'

    export default {
        name: 'TabOne',
        components: {
            TabContentOne,
            TabContentTwo,
            TabContentThree
        }
    };
</script>