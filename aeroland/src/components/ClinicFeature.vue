<template>
    <div class="row">
        <div v-for="(clinic, index) in clinics" :key="index" class="col-lg-4 col-md-6 wow move-up">
            <div class="clinic-grid mb-30">
                <div class="ht-clinic-service-box">
                    <router-link to="">
                        <span class="content-header">
                            <div class="icon">
                                <i :class="clinic.icon"></i>
                            </div>
                            <h5 class="heading">{{ clinic.heading }}</h5>
                        </span>
                        <div class="content-body">
                            <div class="service_text">{{ clinic.text }}</div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ClinicFeature',
        data (){
            return {
                clinics: [
                    {
                        icon:'fal fa-users', 
                        heading:'Experienced Experts',
                        text:'Get the best services from experienced experts in caregiving, healthcare and medical industries.'
                    },
                    {
                        icon:'fal fa-heartbeat', 
                        heading:'On-time Delivery',
                        text:'Get the best services from experienced experts in caregiving, healthcare and medical industries.'
                    },
                    {
                        icon:'fal fa-ambulance', 
                        heading:'Affordable Prices',
                        text:'Get the best services from experienced experts in caregiving, healthcare and medical industries.'

                    },
                    {
                        icon:'fal fa-briefcase-medical', 
                        heading:'Dedicated Attitude',
                        text:'Get the best services from experienced experts in caregiving, healthcare and medical industries.'
                    },
                    {
                        icon:'fal fa-bell', 
                        heading:'Dedicated Attitude',
                        text:'Get the best services from experienced experts in caregiving, healthcare and medical industries.'
                    },
                    {
                        icon:'fal fa-suitcase', 
                        heading:'Medical Training',
                        text:'Get the best services from experienced experts in caregiving, healthcare and medical industries.'
                    },
                ]
            }
        }
    }
</script>
