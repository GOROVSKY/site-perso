<template>
  <div class="page">
    <h1 class="pb-4 pt-4 text-bold">Guillaume Laville</h1>
    <div class="container-img">
      <img src="../../assets/images/face_1.jpeg" class="img img-circle" />
      <div class="welcome-message">
        &lt;p&gt;Welcome on my website&lt;/p&gt;
      </div>
    </div>
    <ul class="d-flex justify-content-between mt-4">
      <li class="d-flex-center">
        <i class="fas fa-code"></i><span>Web developer</span>
      </li>
      <li class="d-flex-center">
        <i class="fas fa-palette"></i><span>Artist</span>
      </li>
      <li class="d-flex-center">
        <i class="fas fa-paw"></i><span>Animal lover</span>
      </li>
    </ul>
    <hr />
    <div>
      <router-link to="/projects/web" class="shortcut"
        >Digital projects</router-link
      >
      <router-link to="/projects/art" class="shortcut"
        >Artistic creations</router-link
      >
      <router-link to="/" class="shortcut">Pets and more</router-link>
      <router-link to="/contact" class="shortcut">Contact</router-link>
    </div>
  </div>
</template>

<script src="./home.js">
</script>

<style scoped>
.container-img {
  height: 30%;
  min-height: 200px;
  position: relative;
  width: min-content;
  margin: auto;
}

.img-circle {
  border-radius: 50%;
  height: 100%;
}

.welcome-message {
  position: absolute;
  left: 80%;
  top: 10%;
  background-color: black;
  padding: 5px 10px;
  border-radius: 10px;
  font-family: Consolas;
  width: 145px;
}

.shortcut {
  background-color: black;
  width: 50%;
  margin: 20px auto;
  padding: 10px 20px;
  border-radius: 3px;
  font-weight: 600;
  display: block;
}
</style>