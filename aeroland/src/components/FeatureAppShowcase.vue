<template>
    <div class="feature-app-showcase section-space--pt_120" id="about">
            <div class="container">
				<div class="row">
					<div class="col">
						<ChartCircleTwo circleValue="01" class="section-space--mb_40" />
					</div>
				</div>
				<SectionTitle sectionTitle="Innovative Ideas for Apps" class="wow move-up" />
				<FeatureApp />
            </div>
        </div>
</template>

<script>
    import SectionTitle from '../components/SectionTitle'
    import ChartCircleTwo from '../components/ChartCircleTwo'
    import FeatureApp from '../components/FeatureApp'
    export default{
        name: 'FeatureAppShowcase',
        components: {
            SectionTitle,
            ChartCircleTwo,
            FeatureApp
        }
    };
</script>

<style lang="scss">

</style>