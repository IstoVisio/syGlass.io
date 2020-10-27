
<template>
    <div class="test-area py-5">
        <div class="container">
            <div class="row">
                <div v-for="(item, index) in data" :key="index" class="col-md-4 text-center">
                    <div class="image">
                        <img :src="item.thumb" alt="thumbnail">
                    </div>
                    <div class="content">
                        <h6>{{ item.title }}</h6>
                        <p>{{ item.desc }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../data/data.json'
    export default {
        data (){
            return {
                data
            }
        }
    }
</script>




