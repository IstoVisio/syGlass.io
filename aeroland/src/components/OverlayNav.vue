<template>
    <b-navbar>
        <b-collapse class="default-nav justify-content-center"  is-nav id="nav_collapse">
            <b-navbar-nav class="navbar-nav d-block overlay-nav">
                <b-nav-item to="/" @click="toggleClass('removeClass', 'active')"><span>Landing</span></b-nav-item>
                <b-nav-item href="#home" class="scroll" @click="toggleClass('removeClass', 'active')"><span>Home</span></b-nav-item>
                <b-nav-item href="#about" class="scroll" @click="toggleClass('removeClass', 'active')"><span>About</span></b-nav-item>
                <b-nav-item href="#service" class="scroll" @click="toggleClass('removeClass', 'active')"><span>Service</span></b-nav-item>
                <b-nav-item href="#contact" class="scroll" @click="toggleClass('removeClass', 'active')"><span>Contact</span></b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
    export default {
        name:'OverlayNav',
        methods: {
            // offcanvas searchbox
            toggleClass(addRemoveClass, className) {
                const el = document.querySelector('#overlay-menu');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            }
        }
    }
</script>