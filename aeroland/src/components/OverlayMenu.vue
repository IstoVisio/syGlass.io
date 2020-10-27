<template>
    <div class="overlay-menu-wrapper" id="overlay-menu">
        <div class="overlay-menu-inner">
            <div class="overlay-menu text-center">
                <OverlayNav />
            </div>
            <button @click="toggleClass('removeClass', 'active')" class="page-close"></button>
        </div>
    </div>
</template>

<script>
    import OverlayNav from '../components/OverlayNav'
    export default{
        name: 'OverlayMenu',
        components: {
            OverlayNav
        },
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
    };
</script>

<style lang="scss">
    @import '../assets/scss/variabls.scss';
    .overlay-menu-wrapper {
        background-image: linear-gradient(138deg, #5E61E7 0%, #9C7AF2 100%);
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        opacity: 0;
        visibility: hidden;
        transform: scale(0.8);
        transition: 0.4s;
        z-index: 9999;
        &.active {
            opacity: 1;
            visibility: visible;
            transform: scale(1);
        }
    }
    .overlay-menu-inner {
        position: relative;
        width: 100%;
        height: 100%;
        .overlay-menu {
            width: 300px;
            height: auto;
            left: 50%;
            top: 50%;
            position: absolute;
            transform: translate(-50%, -50%);
        }
        .overlay-nav {
            li {
                a {
                    font-size: 30px;
                    font-weight: 600;
                    color: $white;
                    span {
                        color: $white;
                    }
                }
            }
        }
    }
    .page-close {
        position: fixed;
        top: 80px;
        right: 90px;
        z-index: 100000;
        font-size: 100px;
        line-height: 0;
        cursor: pointer;
        height: 40px;
        width: 40px;
        transition: $transition--default;
        background-color: transparent;
        border: none;
        &::after, 
        &::before {
            position: absolute;
            top: 19px;
            left: 4px;
            content: "";
            width: 32px;
            height: 3px;
            background: $white;
            transform-origin: 50% 50%;
            transition: $transition--default;
        }
        &::before {
            transform: rotate(-45deg);
        }
        &::after {
            transform: rotate(45deg);
        }
    }

</style>