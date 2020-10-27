<template>
    <div class="start-ups-feature-wrap">
        <div class="modern-grid">
            <div v-for="iconbox in iconboxs" :key="iconbox.id" class="ht-box-icon style-02 wow move-up">
                <router-link :to="'branding'" class="link-secret">
                    <div class="icon-box-wrap">
                        <div class="icon react" :class="{'java':iconbox.java, 'macos':iconbox.macos, 'window':iconbox.window, 'android':iconbox.android, 'php':iconbox.php}">
                            <i :class="iconbox.icon"></i>
                        </div>
                        <div class="content">
                            <h6 class="heading">{{ iconbox.heading }}</h6>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'StartUpFeature',
        data (){
            return {
                iconboxs: [
                    {
                        icon: 'fab fa-react', 
                        heading: 'React Native'
                    },
                    {
                        icon: 'fab fa-microsoft', 
                        heading: 'Windows', 
                        window:true
                    },
                    {
                        icon: 'fab fa-apple', 
                        heading: 'MacOS', 
                        macos:true
                    },
                    {
                        icon: 'fab fa-java', 
                        heading: 'Java', 
                        java:true
                    },
                    {
                        icon: 'fab fa-android', 
                        heading: 'Android', 
                        android:true
                    },
                    {
                        icon: 'fab fa-php', 
                        heading: 'PHP', 
                        php:true
                    },
                ]
            }
        }
    }
</script>
