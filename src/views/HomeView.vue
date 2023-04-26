<script setup>


</script>

<template>
  <main class="container">
    <!-- HTML indhold til forsiden -->

    <div class="columns-2 ">
      <div class="forside-hero-left">
        <img src="@/assets/MGlogo.png" alt="">
      </div>



      <div class="forside-hero-right">
        <img id="frontpage-right-img" src="@/assets/majkenPhoto.png" alt="">
      </div>
    </div>

    <div class="linje"></div>

      
    
      <div class="row forside-click-knap-container"> 
      <a href="src/assets/Vueevisitkort.pdf" target="blank" class="forside-click-knap col-2">
        <div>
          <h3>VISITKORT</h3>
        </div>
      </a>
        
      <a href="src/assets/cv.pdf" target="blank" class="forside-click-knap col-2">
        <div>
          <h3>CV</h3>
        </div>
        </a>

        <a href="https://www.linkedin.com/in/majken-gaasedal-303262269/" target="blank" class="forside-click-knap col-2">
        <div>
          <h3>LINKEDIN</h3>
        </div>
        </a>
        </div>
      
  

  </main>
</template>

<style>
body{
  font-family: "elza", sans-serif !important;
font-weight: 400 !important;
font-style: normal;
}

.forside-hero-left{
  border-right: 1px solid #e5fcf5;
}

.forside-hero-left img {
  height: 400px;
}


.forside-hero-right {
 display: flex;
 justify-content: center; 
 width:100%;
}


#frontpage-right-img {
  height: 400px;

  
}
.forside-click-knap-container {
  display: flex;
  justify-content: center;
}

.forside-click-knap {
  height:20%;
}

.forside-click-knap {
  margin-top:50px;
  margin:50px;
  width:60px;
  height:20px;
  background-color:#e5fcf5;
  color:#484538;
  text-align:center;
  font-weight:bold;
}

.col-2{
  margin-top:50px;
  padding:0px;
  margin:50px;
  width:80px;
  height:25px;
  background-color:#e5fcf5;
  color:#484538;
}

.linje{
  height:1px;
  background-color: #e5fcf5;
  margin:20px;
}

</style>