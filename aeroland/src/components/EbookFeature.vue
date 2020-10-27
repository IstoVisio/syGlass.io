<template>
    <div class="row">
        <div v-for="ebook in ebooks" :key="ebook.id" class="col-lg-4 col-md-6 wow move-up">
            <div class="service-grid">
                <div class="ht-service-box--two text-center">
                    <router-link :to="'branding'">
                        <div class="image mb-20">
                            <img :src="ebook.icon" class="img-fluid" :alt="ebook.alt">
                        </div>
                        <div class="content">
                            <h6 class="sub-heading">{{ ebook.subheading }}</h6>
                            <h6 class="ht-heading mb-15">{{ ebook.heading }}</h6>
                            <div class="service_text">{{ ebook.text }}</div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'EbookFeature',
        data (){
            return {
                ebooks: [
                    {
                        icon: require('../assets/img/icons/aeroland-ebook-box-image-02.png'), 
                        alt:'aeroland-ebook-box-image-02', 
                        heading:'Web Development', 
                        subheading:'01', 
                        text:'Our technical experts have a flair for developing clean-coded & seamless websites based on customers’ needs'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-ebook-box-image-01.png'),
                        alt:'aeroland-ebook-box-image-01', 
                        heading:'Social Media', 
                        subheading:'02', 
                        text:'Our technical experts have a flair for developing clean-coded & seamless websites based on customers’ needs'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-ebook-box-image-03.png'), 
                        alt:'aeroland-ebook-box-image-03', 
                        heading:'SEO Marketing', 
                        subheading:'03', 
                        text:'Our technical experts have a flair for developing clean-coded & seamless websites based on customers’ needs'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-ebook-box-image-04.png'), 
                        alt:'aeroland-ebook-box-image-04', 
                        heading:'Keyword Search', 
                        subheading:'04', 
                        text:'Our technical experts have a flair for developing clean-coded & seamless websites based on customers’ needs'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-ebook-box-image-05.png'), 
                        alt:'aeroland-ebook-box-image-05', 
                        heading:'Email Optimization', 
                        subheading:'05', 
                        text:'Our technical experts have a flair for developing clean-coded & seamless websites based on customers’ needs'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-ebook-box-image-06.png'), 
                        alt:'aeroland-ebook-box-image-06', 
                        heading:'Web Design', 
                        subheading:'06', 
                        text:'Our technical experts have a flair for developing clean-coded & seamless websites based on customers’ needs'
                    },
                ]
            }
        }
    }
</script>
