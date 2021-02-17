<template>
    <b-navbar type="dark" toggleable="xl" fixed="top" v-b-scrollspy:nav-scroller class="header-area" :class="{'is-sticky': scrolled}">
        <div class="container-fluid container-fluid--cp-150">
            
			<b-navbar-brand class="navbar-brand" to="/"><img :src='"../assets/img/syglass/Artboard 1.png"' alt="logo"></b-navbar-brand>
            <b-btn-group class="header-config-wrapper" style="margin-left: -190px">
                <!-- <b-btn class="header-config"><i class="fa fa-shopping-cart"></i></b-btn> -->
                <!--b-btn class="header-config" @click="toggleClass('addClass', 'active')"><i class="far fa-search"></i></b-btn>
                <b-link class="ht-btn ht-btn--outline hire-btn d-none d-xl-block">Get syGlass</b-link-->
            </b-btn-group>
            <b-collapse class="default-nav justify-content-center"  is-nav >
                <b-navbar-nav class="main-menu"  style="font-size: 20px;">
                    <b-nav-item href="/" class="scroll"><span>HOME</span></b-nav-item>
                    <b-nav-item href="#visualize" class="scroll"><span>VISUALIZE</span></b-nav-item>
                    <b-nav-item href="#analyze" class="scroll"><span>ANALYZE</span></b-nav-item>
					<b-nav-item href="#communicate" class="scroll"><span>COMMUNICATE</span></b-nav-item>
					<b-nav-item href="#view" class="scroll"><span style="color: #44A3F2">VIEW</span></b-nav-item>
                    <b-nav-item href="#faq" class="scroll"><span>FAQ</span></b-nav-item>
                    <b-nav-item href="#contact" class="scroll"><span>CONTACT</span></b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </div>
    </b-navbar>
</template>

<script>
    export default {
        name:'HeaderSoftware',
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
