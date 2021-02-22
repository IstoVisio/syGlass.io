<template>
    <div class="footer-area-wrapper section-space--pb_60" :class="FooterStyle">
        <div class="footer-area">
            <div class="container">
                <div class="text-center">
                        <div class="text-center">
                            <router-link to="/">
                                <img src="../assets/img/syglass/Artboardx.png" class="img-fluid logo-dark" style="width: 20vw; min-width: 330px;" alt="logo">
                            </router-link>
                        </div class="text-center">
                        <ul class="footer-widget__list text-center">
                            <li>128 Fountain View, Morgantown, WV 26505</li>
                            <li>
                                <a href="mailto:info@syglass.io" class="hover-style-link">info@syglass.io</a>
                            </li>
                            <li>
                                <a href="tel:(+1)3046773045" class="hover-style-link">(+1) 304 677 3045</a>
                            </li>
                            <li>
                                <a href="www.syglass.io" target="_blank" class="hover-style-link hover-style-link--green">www.syglass.io</a>
                            </li>
                        </ul>
                    </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'FooterMain',
        props: ["FooterStyle"]
    }
</script>
