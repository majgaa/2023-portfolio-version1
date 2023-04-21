<template>
  <div class="about">
   <!--  {{ state }} -->
   <div>
    <!-- part 0 -->
    <div :class="{ active: isActive }"></div>

    <!-- part 1 -->
      
      <p></p>
      
      <br>
    
    
   
   </div> 
   <br>

   <div class="portfolio-container">
   <div class="portfolio-item"  v-for="item in state" :key="item">
    <div>
      <p class="category" :class="item.category">
        {{ item.category }}
      </p>
      <h4 class="title">{{ item.title }}</h4>
      <img class="billeder" :src="item.image" alt="image" width="200" height="200">
     
      
      <br>
      
      <!-- part 3 -->
      <RouterLink :to="{ name: 'portfoliodetail', params: { id: item.id }}" class="semere">Se mere</RouterLink>
     
    </div>
    </div>
  </div>


  </div>
</template>

<script setup>
// part 0 - showcase class binding with isActive
import { ref } from 'vue'
// part 1 - get state from portfoliodb
import portfoliodb from '../modules/portfoliodb';

const isActive = ref(true)

// part 1 - get state from portfoliodb
const { state  } = portfoliodb()

</script>
<style>

  .about {
    min-height: 100%;
   }

  .portfolio-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center; 
  }

  .portfolio-item {
    padding: 1rem;
   
    box-sizing: border-box;
    width: 30.333%;
    margin: 0;
    position: relative;
  }

  .portfolio-item > div {
    margin: 1rem;
    border: 1px solid #ccc;
    padding: 1rem;
    height: 300px;
  }

  .category {
    display: inline-block;
    padding: 0.25rem 0.5rem;
   
    font-size: 12px;
    font-weight: 700;


    text-transform: uppercase;
  }

  .billeder{
    display:block;
    margin:0 auto;
    height:140px;
  }

  .billeder img {

  }

  .title{
    text-align:center;
    font-size:18px;
    padding:5px;
  }

  .Web {
    color: #cd5c0b;
    border-left: 2px solid #cd5c0b;
  }

  .Video {
    color: #23b062;
    border-left: 2px solid #23b062;
  }

  .Photoshop {
    color: #2f4ccb;
    border-left: 2px solid #2f4ccb;
  }

  .incomplete {
    color: #bc0c0c;
  }

  .complete {
    color: #14b314;
  }

  .semere{
    position: absolute;
    bottom: 3px;
  }


</style>
