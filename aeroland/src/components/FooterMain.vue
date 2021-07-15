<template>
    <div class="footer-area-wrapper section-space--pb_60" :class="FooterStyle">
        <div class="footer-area">
            <div class="container">
                <div class="text-center">
                        <div class="text-center">
                            <b-navbar-brand to="/" href="#home" id="navbar-brand" @click="scrollToTop()">
                            <img :src='"../assets/img/syglass/Artboard 1.png"' alt="logo"></b-navbar-brand>
                        </div>
                        <ul class="footer-widget__list text-center">
                            <li>128 Fountain View, Morgantown, WV 26505</li>
                            <li>
                                <a href="mailto:info@syglass.io" class="hover-style-link">info@syglass.io</a>
                            </li>
                            <li>
                                <a href="tel:(+1)3046773045" class="hover-style-link">(+1) 304 677 3045</a>
                            </li>
                            
                            <li>
                                <a @click="scrollToTop()" class="hover-style-link hover-style-link--green">www.syglass.io</a>
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
        props: ["FooterStyle"],
        data (){
            return {
                load: false,
                limitPosition: 200,
                scrolled: false,
                lastPosition: 500,
            }
        },  methods: {
            scrollToTop(){
                window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth',
                });
            }

        }
    }
    
</script>
