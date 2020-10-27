<template>
    <div class="row">
        <div class="col-lg-8 col-md-10 ml-auto mr-auto">
            <div class="section-title-wrapper text-center section-space--mb_50 wow move-up">
                <h2 class="section-title font-width-bold">Subscribe to receive updates</h2>
            </div>
            <!-- newsletter form -->
            <div class="newsletter-form--two section-space--mb_40 text-center wow move-up">
                <form action="#">
                    <input type="text" placeholder="Your name">
                    <input type="email" placeholder="Email">
                    <button class="ht-btn ht-btn-md">Subscribe</button>
                </form>
            </div>
            <!-- newsletter text -->
            <h6 class="sub-heading text-center wow move-up">What’s next in AeroLand? <router-link to="" class="hover-style-link hover-style-link--green">Learn more</router-link></h6>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'newsletterTwo'
    }
</script>