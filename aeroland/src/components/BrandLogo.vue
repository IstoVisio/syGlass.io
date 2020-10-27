<template>
    <div class="row brand-logo-wrapper">
        <div v-for="(brand, index) in brands" :key="index" class="col-lg-2 col-md-3 col-sm-4 col-6 brand-logo wow move-up">
            <div class="brand-logo__image">
                <img :src="brand.logo" class="img-fluid" :alt="brand.alt">
            </div>
            <div class="brand-logo__image-hover">
                <img :src="brand.logoHover" class="img-fluid" :alt="brand.alt">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BrandLogo',
        data (){
            return {
                brands: [
                    {
                        logo: require("../assets/img/brand/aeroland-client-logo-01.png"), 
                        logoHover: require("../assets/img/brand/aeroland-client-logo-01-hover.png"), 
                        alt: 'partner logo'
                    },
                    {
                        logo: require("../assets/img/brand/aeroland-client-logo-02.png"), 
                        logoHover: require("../assets/img/brand/aeroland-client-logo-02-hover.png"),
                        alt: 'partner logo'
                    },
                    {
                        logo: require("../assets/img/brand/aeroland-client-logo-03.png"), 
                        logoHover: require("../assets/img/brand/aeroland-client-logo-03-hover.png"),
                        alt: 'partner logo'
                    },
                    {
                        logo: require("../assets/img/brand/aeroland-client-logo-04.png"), 
                        logoHover: require("../assets/img/brand/aeroland-client-logo-04-hover.png"),
                        alt: 'partner logo'
                    },
                    {
                        logo: require("../assets/img/brand/aeroland-client-logo-05.png"), 
                        logoHover: require("../assets/img/brand/aeroland-client-logo-05-hover.png"),
                        alt: 'partner logo'
                    },
                    {
                        logo: require("../assets/img/brand/aeroland-client-logo-06.png"), 
                        logoHover: require("../assets/img/brand/aeroland-client-logo-06-hover.png"),
                        alt: 'partner logo'
                    },
                    {
                        logo: require("../assets/img/brand/aeroland-client-logo-07.png"), 
                        logoHover: require("../assets/img/brand/aeroland-client-logo-07-hover.png"),
                        alt: 'partner logo'
                    },
                    {
                        logo: require("../assets/img/brand/aeroland-client-logo-08.png"), 
                        logoHover: require("../assets/img/brand/aeroland-client-logo-08-hover.png"),
                        alt: 'partner logo'
                    },
                    {
                        logo: require("../assets/img/brand/aeroland-client-logo-09.png"), 
                        logoHover: require("../assets/img/brand/aeroland-client-logo-09-hover.png"),
                        alt: 'partner logo'
                    },
                    {
                        logo: require("../assets/img/brand/aeroland-client-logo-10.png"), 
                        logoHover: require("../assets/img/brand/aeroland-client-logo-10-hover.png"),
                        alt: 'partner logo'
                    },
                    {
                        logo: require("../assets/img/brand/aeroland-client-logo-11.png"), 
                        logoHover: require("../assets/img/brand/aeroland-client-logo-11-hover.png"),
                        alt: 'partner logo'
                    },
                    {
                        logo: require("../assets/img/brand/aeroland-client-logo-12.png"), 
                        logoHover: require("../assets/img/brand/aeroland-client-logo-12-hover.png"),
                        alt: 'partner logo'
                    },
                ]
            }
        }
    }
</script>