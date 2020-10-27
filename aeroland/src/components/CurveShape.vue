<template>
    <div class="curve-shape">
        <svg  
            x="0px"
            y="0px" 
            viewBox="0 0 3841 120"
            style="overflow:scroll;
            enable-background:new 0 0 3841 120;" 
            xml:space="preserve">
            <slot name="bgcolor"></slot>
        </svg>
    </div>
</template>

<script>
    export default {
        name: 'CurveShape',
    };
</script>

<style lang="scss" scoped>
    .curve-shape {
        margin-bottom: -12px;
        overflow-x: hidden;
        svg {
            width: 200%;
            position: relative;
            animation: move-left 6s linear infinite;
        } 
    }
        
    @keyframes move-left {
        0%{
            left: 0%;
        }
        100%{
            left: -100%;
        }     
    }
</style>