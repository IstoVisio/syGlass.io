<template>
    <div class="offcanvas-menu" id="offcanvas-menu">
        <div class="search-overlay__inner">
            <div class="search-overlay__header">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-md-6 col-8">
                            <div class="logo">
                                <a href="index.html">
                                    <img src="../assets/img/logo/logo-dark.png" class="img-fluid" alt="site logo">
                                </a>
                            </div>
                        </div>
                        <div class="col-md-6 col-4">
                            <div class="search-content text-right">
                                <span class="mobile-navigation-close-icon" @click="mobiletoggleClass('removeClass', 'active')"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MobileNavMenu />
        </div>
    </div>
</template>

<script>

    import MobileNavMenu from '../components/MobileNavMenu'

    export default{
        components: {
            MobileNavMenu
        },
        methods: {
            // offcanvas searchbox
            mobiletoggleClass(addRemoveClass, className) {
                const el = document.querySelector('#offcanvas-menu');
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

</style>