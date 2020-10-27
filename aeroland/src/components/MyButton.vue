<template>
    <button 
        :class="type"
        :disabled="disabled"
    >
        {{ text }}
    </button>
</template>

<script>
    export default{
        name: 'MyButton',
        props: {   
            type: String,
            disabled: Boolean,
            text: String,
        }
    };
</script>