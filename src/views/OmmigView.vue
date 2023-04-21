<script setup>


</script>

<template>
  <main class="container">
    <!-- HTML indhold til forsiden -->

    <div class="columns-2">
      <div class="">
        <h1 class="titel"><br>LIDT OM MIG</h1>
        <p3><br>På det professionelle plan har det først og fremmest stor betydning for mig, 
          at føre mine opgaver til dørs. En af mine største styrker er at jeg evner at se helheden i projekter og at føre 
          en rød tråd igennem det. Jeg arbejder godt både selvstændigt og i teams,  hvor 
          jeg dagligt medbringer en god energi, samt et positivt og løsningsorienteret sind. 
          I mine tidligere jobs har jeg lært og evnet at kunne arbejde godt under pres og at 
          have mange bolde i luften på samme tid. Her på multimediedesigner uddannelsen er jeg 
          blevet præsenteret for viden og redskaber som jeg glæder mig enormt meget til at bruge
           i praksis på arbejdsmarkedet. Mine største interesse områder er helt sikkert visuel kommunikation
          , online marketing, design og branding. 
           <br><br>

Som person er jeg smilende, rummelig og nærværende. Jeg er også et menneske der er meget 
lige til, og jeg foretrækker ærlig og direkte kommunikation i et godt samarbejde. Jeg drømmer
om og arbejder på at kvalificere mig til en hverdag med arbejdsopgaver som jeg elsker at stå op til
hver morgen.</p3>

<div class="LOGO">
<img src="@/assets/MGlogo.png">
      </div>
    </div>
     



      <div class="forside-hero-right">
        <img src="@/assets/ommigMG.jpg" alt="">
      </div>
    </div>
      <div class="linje"></div>

    
  </main>

  <div class="columns-4">

    <a href="https://firebasestorage.googleapis.com/v0/b/portfolio-2023-484f1.appspot.com/o/IG-grøn.png?alt=media&token=608ee8ab-7975-4901-a00d-62d331502659" target="blank">
    <div class="ig">
    <img src="@/assets/IG-grøn.png" alt="">
  </div>
  </a>

  <a href="https://www.linkedin.com/in/majken-gaasedal-303262269/" target="blank">
  <div class="in">
    <img src="@/assets/in-grøn.png" alt="">
  </div>
</a>

<a href="src/assets/VisitkortMG.pdf" target="blank">
  <div class="mail">
    <img src="@/assets/mail-grøn.png" alt="">
  </div>
</a>

<a href="src/assets/VisitkortMG.pdf" target="blank">
  <div class="mobil">
    <img src="@/assets/mobil-grøn.png" alt="">
  </div>
</a>

</div>

</template>

<style scoped>
img{
height:650px;
justify-content:center;
}

.titel{
  font-size:2em;
}

.LOGO img{
  width: 245px;
  height:auto;
  margin: 30px auto;
}


.linje{
  height:1px;
  background-color: #e5fcf5;
  margin:20px;
}

.columns-4{
  background-color:#E5FCF5;
  color:#484538;
  height:150px;
  width:100%;
  padding:60px 0 60px 175px;
  margin:0;
  
}

.overskrift{
font-size: 30px; 
}

.ig img{
  height:50px;
  width:auto;
  display:flex;
  justify-content:center;
}

.in img{
  height:50px;
  width:auto;
  display:flex;
  justify-content:center;
}

.mail img{
  height:40px;
  width:auto;
  display:flex;
  justify-content:center;
}

.mobil img{
  height:50px;
  width:auto;
  display:flex;
  justify-content:center;
}

</style>
