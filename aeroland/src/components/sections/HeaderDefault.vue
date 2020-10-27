<template>
    <b-navbar type="light" toggleable="xl" fixed="top" v-b-scrollspy:nav-scroller class="header-area" :class="{'is-sticky': scrolled}">
        <div class="container-fluid container-fluid--cp-150">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-navbar-brand class="navbar-brand" to="/"><img :src='"../../assets/img/logo/logo-dark.png"' alt="logo"></b-navbar-brand>
            <b-btn-group class="header-config-wrapper">
                <b-btn class="header-config" @click="toggleClass('addClass', 'active')"><i class="far fa-search"></i></b-btn>
                <b-link class="ht-btn ht-btn--outline hire-btn d-none d-xl-block">Hire Us Now</b-link>
            </b-btn-group>
            <b-collapse class="default-nav justify-content-center"  is-nav id="nav_collapse">
                <!-- clinic nav component -->
                <ClinicNav />
            </b-collapse>
        </div>
    </b-navbar>
</template>

<script>
    import ClinicNav from '../ClinicNav'
    export default {
        components: {
            ClinicNav
        },
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
            },

            // offcanvas searchbox
            toggleClass(addRemoveClass, className) {
                const el = document.querySelector('#search-overlay');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
        }, 
        created() {
            window.addEventListener("scroll", this.handleScroll);
        },
        destroyed() {
            window.removeEventListener("scroll", this.handleScroll);
        },
    }
</script>