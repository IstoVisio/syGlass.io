<template>
    <div class="icon-process-area section-space--pb_120">
        <div class="container">
            <SectionTitle sectionTitle="The 3-step process" />
            <Gradation />
        </div>
    </div>
</template>

<script>
    import SectionTitle from '../components/SectionTitle'
    import Gradation from '../components/Gradation'

    export default{
        name: 'ThreeStepProcess',
        components: {
            SectionTitle,
            Gradation
        }
    };
</script>

<style lang="scss">

</style>