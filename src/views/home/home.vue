<template>
  <div class="page">
    <h1 class="title text-bold">Guillaume Laville</h1>
    <div class="container-img">
      <img src="../../assets/images/face_1.jpeg" class="img img-circle" />
    </div>
    <ul class="d-flex justify-content-center mt-3">
      <li class="d-flex align-items-center">
        <i class="fas fa-map-marker-alt me-2"></i
        ><span><b>Lyon - France</b></span>
      </li>
    </ul>
    <hr class="hr" />
    <div class="networks">
      <a
        href="https://www.instagram.com/guillaume.laville/"
        class="network gradient-yellow"
      >
        <span class="img-circle fa fa-instagram"></span>
      </a>
      <a
        href="https://www.linkedin.com/in/guillaume-l-a54b18173/"
        class="network gradient-yellow"
      >
        <span class="img-circle fa fa-linkedin"></span>
      </a>
      <a
        href="https://www.youtube.com/channel/UCgC910SfBDjaSwSdkz00cSQ"
        class="network"
      >
        <span class="img-circle fa fa-youtube"></span>
      </a>
    </div>
    <div>
      <router-link to="/skills" class="shortcut gradient-blue"
        ><span class="img-circle fa fa-code"></span
        ><span class="shortcut-text">Education & Skills</span></router-link
      >
      <router-link to="/projects/web" class="shortcut gradient-purple"
        ><span class="img-circle fa fa-laptop"></span
        ><span class="shortcut-text">Digital projects</span></router-link
      >
      <router-link to="/projects/art" class="shortcut gradient-red"
        ><span class="img-circle fa fa-paint-brush"></span
        ><span class="shortcut-text">Artistic creations</span></router-link
      >
      <router-link to="/contact" class="shortcut gradient-orange"
        ><span class="img-circle fa fa-paper-plane"></span
        ><span class="shortcut-text">Contact</span></router-link
      >
    </div>
  </div>
</template>

<script src="./home.js">
</script>
