<template>
    <b-navbar type="dark" toggleable="xl" fixed="top" v-b-scrollspy:nav-scroller class="header-area" :class="{'is-sticky': scrolled}">
        <div class="container-fluid container-fluid--cp-150">
            
            <div class= "container" >
            <b-navbar-brand to="/" href="#home" id="navbar-brand" @click="scrollToTop()"><img :src='"../assets/img/syglass/Artboard 1.png"' alt="logo"></b-navbar-brand>
            <b-list-group horizontal>
            <b-list-group-item href="https://www.linkedin.com/company/istovisio" target="_blank" class="social-link item flex-fill"> <i class="fab fa-linkedin-in social-link-icon"></i></b-list-group-item>
            <b-list-group-item href="https://twitter.com/syGlassVR" target="_blank" class="social-link item flex-fill"> <i class="fab fa-twitter social-link-icon"></i></b-list-group-item>
            <b-list-group-item href="https://www.instagram.com/syglassvr/" target="_blank" class="social-link item flex-fill"> <i class="fab fa-instagram social-link-icon"></i></b-list-group-item>
            </b-list-group>
            </div>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            
            <!--
            <div class ="container-fluid" id="no-wrap">-->
            <div class = "container">
            <b-collapse id="nav-collapse" is-nav >
                <b-navbar-nav class="main-menu default-nav d-flex justify-content-center" type="dark" style="font-size: 20px;">
                    <b-nav-item to= "/education/" tag="li" href="#eduhome" class="scroll" id="b"><span>Home</span></b-nav-item>
                    <b-nav-item href="#citizenScience" class="scroll"><span>Citizen Science</span></b-nav-item>
                    <b-nav-item href="#education" class="scroll" ><span>Curriculum </span></b-nav-item>
					
                    <b-nav-item href="#focus" class="scroll"><span>Focus</span></b-nav-item>
                    <b-nav-item href="#contact" class="scroll"><span>Contact</span></b-nav-item>
                </b-navbar-nav>
            </b-collapse>
            </div>

            </div>
        <!--</div>-->
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

                /*
                if (distanceToTop<10) {
                    document.getElementById("b").id = "bootstrap-overrides";
                } else {
                    document.getElementById("bootstrap-overrides").id = "b";
                }*/

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
            scrollToTop(){
                window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
                });
            },
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
        }
    }
</script>


<style scoped>
    .navbar .container {
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items:baseline;
    }
    
    .list-group-item {
    position: relative;
    display: block;
    padding: 8px;
    background-color: transparent;
    border: transparent;
    }

    .list-group-item-action {
    width: 100%;
    color: #b5b5b5;
    text-align: inherit;
    }

    .list-group-item-action:hover {
    z-index: 1;
    color: #44A3F2;
    text-decoration: none;
    background-color: transparent;
    }

    .navbar-brand {
        margin-right: 2rem;
    }

    .navbar-dark .navbar-toggler {
    color: black;
    border-color: rgba(243, 122, 122, 0.1);
    }

    [aria-expanded="false"] {
    background-color: transparent;
    }

    .navbar.header-area {
    background-color: black;
    }
    
</style>
