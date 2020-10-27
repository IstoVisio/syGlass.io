<template>
    <b-navbar toggleable="xl" fixed="top" v-b-scrollspy:nav-scroller class="header-area text-white" :class="{'is-sticky': scrolled}">
        <div class="container-fluid container-fluid--cp-150">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-navbar-brand class="navbar-brand logo-light" to="/branding">
                <img :src='"../../assets/img/logo/light-logo.png"' alt="logo">
            </b-navbar-brand>
            <b-navbar-brand class="navbar-brand logo-dark" to="/branding">
                <img :src='"../../assets/img/logo/logo-dark.png"' alt="logo">
            </b-navbar-brand>
            <b-collapse class="default-nav justify-content-center"  is-nav id="nav_collapse">
                <b-navbar-nav class="navbar-nav main-menu text-white">
                    <b-nav-item to="/"><span>LANDING</span></b-nav-item>
                    <b-nav-item href="#home" class="scroll"><span>HOME</span></b-nav-item>
                    <b-nav-item href="#about" class="scroll"><span>ABOUT</span></b-nav-item>
                    <b-nav-item href="#service" class="scroll"><span>SERVICE</span></b-nav-item>
                    <b-nav-item href="#pricing" class="scroll"><span>PRICING</span></b-nav-item>
                    <b-nav-item href="#clients" class="scroll"><span>CLIENTS</span></b-nav-item>
                </b-navbar-nav>
            </b-collapse>
            <b-btn-group class="header-button button--white d-none d-xl-block">
                <b-link class="btn btn--white">Hire Us Now</b-link>
            </b-btn-group>
        </div>
    </b-navbar>
</template>

<script>
    export default {
        name:'Navbar',
        data (){
            return {
                load: false,
                limitPosition: 200,
                scrolled: false,
                lastPosition: 500,
            }
        },
        mounted (){
            (function() {
                scrollTo();
            })();

            function scrollTo() {
                const links = document.querySelectorAll('.scroll > a');
                links.forEach(each => (each.onclick = scrollAnchors));
            }

            function scrollAnchors(e, respond = null) {
                const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
                e.preventDefault();
                var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
                const targetAnchor = document.querySelector(targetID);
                if (!targetAnchor) return;
                const originalTop = distanceToTop(targetAnchor);
                window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
                const checkIfDone = setInterval(function() {
                    const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 190;
                    if (distanceToTop(targetAnchor) === 0 || atBottom) {
                        targetAnchor.tabIndex = '-1';
                        targetAnchor.focus();
                        //window.history.pushState('', '', targetID);
                        clearInterval(checkIfDone);
                    }
                }, 800);
            }
        },
        methods: {
            // sticky menu script
            handleScroll() {
                if (this.lastPosition < window.scrollY && this.limitPosition < window.scrollY) {
                    this.scrolled = true;
                    // move up!
                } 
                
                if (this.lastPosition > window.scrollY) {
                    this.scrolled = true;
                    // move down
                }
                
                this.lastPosition = window.scrollY;
                this.scrolled = window.scrollY > 50;
            }
        }, 
        created() {
            window.addEventListener("scroll", this.handleScroll);
        },
        destroyed() {
            window.removeEventListener("scroll", this.handleScroll);
        },
    }
</script>