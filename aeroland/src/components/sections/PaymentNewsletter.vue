<template>
    <div class="newsletter-section section-space--pb_120" id="clients">
        <div class="container">
            <NewsletterTwo />
        </div>
    </div>
</template>

<script>
    import NewsletterTwo from '../NewsletterTwo'
    
    export default {
        name: 'PaymentNewsletter',
        components: {
            NewsletterTwo
        }
    };
</script>