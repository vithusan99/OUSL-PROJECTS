<template>
  <div class="home">
    <div class="hm-title">
        Pearl Of The Indian <br> Ocean
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    
  }
}
</script>
<style scoped>
img{
 
}
.home{
  height: 200vh;
  width: 100%;
  background-image: url(../assets/Homepage-img/waqll-1.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

}
.hm-title{
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: start;
  height: 100vh;
  /* margin: 5rem; */
  font-size: 6rem;
  color: khaki;
  font-weight: 900;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>