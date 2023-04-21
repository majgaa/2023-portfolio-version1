<template>
  <div>
    <div>
      <!-- v-for on state -->
    <!--   <div class="portfolio-item" v-for="item in portfolioDetails" :key="item"> -->
      <div class="" v-if="portfolioDetails" >
        <p class="" :class="portfolioDetails.category">
          {{ portfolioDetails.category }}
        </p>
        
       
        <div class="images">
          
            <img :src="portfolioDetails.image" alt="image"  height="120">
           
        </div>
        
        <div class="text-container">
        <h4 class="overskrift">{{ portfolioDetails.title }}</h4>
        <p>
          {{ portfolioDetails.text }}
        </p>
        </div>
        

      </div>

      <div v-else>Loading...</div>
      
      <button class="tilbage" @click="goBack()">Tilbage</button>
       
    </div>
  </div>
</template>

<style scoped>
.images{
  display: flex;
  justify-content: center;
}
.images img{
  display: block;
  Width:500px;


}

.overskrift{
  font-size:40px;
  display:flex;
  justify-content: center;
  padding:40px;
}

.text-container{
  border:1px #e5fcf5 solid;
  margin:20px;
  text-align: center;
  padding:20px;
}

.tilbage{
  font-size: 15px;
  padding:20px;
  margin:20px;
}


</style>

<script setup>
import { toRefs, computed } from 'vue'
import portfoliodb from '../modules/portfoliodb';

//part 4 - router to go back
import { useRouter } from 'vue-router'
const router = useRouter()

  // part 1 - get state from portfoliodb
  const { state  } = portfoliodb()

  // part 2 - get id from route
  const props = defineProps({
    id: String
  })
  const { id } = toRefs(props)

  // part 3 - filter state on id -> must be computed to work with v-for
  const portfolioDetails = computed(() => { 
    return state.value.find(item => item.id == id.value)
  })

  const goBack = () => {
    router.go(-1)
  } 
</script>
