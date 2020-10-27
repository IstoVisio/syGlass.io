<template>
    <div class="search-overlay" id="search-overlay">
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
                                <span class="mobile-navigation-close-icon" @click="toggleClass('removeClass', 'active')"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="search-overlay__body">
                <div class="search-overlay__form">
                    <form action="#">
                        <input type="text" placeholder="Enter search keyword...">
                        <button type="submit"><i class="far fa-search"></i></button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        methods: {
            // offcanvas searchbox
            toggleClass(addRemoveClass, className) {
                const el = document.querySelector('#search-overlay');
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