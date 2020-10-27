<template>
    <div class="app-showcase-process-step section-space--pb_30">
        <div class="container">
            <!-- login screen component -->
            <LoginScreen />
            <!-- Showcase Advanced Features -->
            <ShowcaseAdvancedFeatures />
            <!-- Creative App Display -->
            <CreativeAppDisplay />
        </div>
    </div>
</template>

<script>
    import LoginScreen from "../components/LoginScreen";
	import ShowcaseAdvancedFeatures from "../components/ShowcaseAdvancedFeatures";
	import CreativeAppDisplay from "../components/CreativeAppDisplay";
    export default{
        components: {
            LoginScreen,
			ShowcaseAdvancedFeatures,
			CreativeAppDisplay,
        }
    };
</script>

<style lang="scss">

</style>