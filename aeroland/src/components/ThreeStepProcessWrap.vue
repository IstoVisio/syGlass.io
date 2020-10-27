<template>
    <div>
        <div class="app-showcase-process-wrapper section-space--pt_30" id="service">
			<div class="container">
				<div class="row">
					<div class="col">
						<ChartCircleTwo circleValue="02" class="section-space--mb_40" />
					</div>
				</div>
			</div>
            <div class="app-showcase-section__titel">
                <div class="vc_row-separator center_curve bottom">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <path d="M 0 0 Q 50 200 100 0"></path>
                    </svg>
                </div>
            </div>
        </div>
		<div class="app-showcase-step-wrap">
			<ThreeStepProcess />
			<!-- App Showcase Process Step component -->
			<AppShowcaseProcessStep />
		</div>
    </div>
</template>

<script>
    import ChartCircleTwo from '../components/ChartCircleTwo'
    import ThreeStepProcess from '../components/ThreeStepProcess'
    import AppShowcaseProcessStep from '../components/AppShowcaseProcessStep'
    export default{
        name: 'ThreeStepProcessWrap',
        components: {
            ChartCircleTwo,
            ThreeStepProcess,
            AppShowcaseProcessStep
        }
    };
</script>

<style lang="scss">

</style>