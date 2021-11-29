<template>
<div>
    <Head/>
    <img class="vector" width="900" src="~/assets/Frame.png"/>
    <div class="container">
    <Features/>
    </div>
    </div>
</template>

<script>
import Features from '../components/Features.vue'
import Header from '../layout/header.vue'

export default {
    components: {
        Features,
        Header,
    }

}
</script>

<style>
.vector {
  position: absolute;
}
</style>
