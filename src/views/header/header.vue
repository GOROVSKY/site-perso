<template>
  <div class="header">
    <!-- <div class="container-img">
      <img
        src="../../assets/images/face_1.jpeg"
        class="img img-circle cursor-pointer"
        @click="$router.push('/')"
      />
    </div> -->
    <div class="text-start" @click="$router.push('/')">
      <div style="font-size: 0.8rem">Guillaume Laville</div>
      <div class="text-bold" style="font-size: 1.7rem" id="header-vue-name">
        {{ vueName }}
      </div>
    </div>
    <div @click="displayMenu()" class="container-icons">
      <i class="fa fa-2x cursor-pointer fa-bars" id="btn-menu-bars"></i>
      <i class="fa fa-2x cursor-pointer fa-times" id="btn-menu-times"></i>
    </div>
  </div>

    <div class="menu-float" id="menu-float">
      <router-link to="/" class="menu-link" @click="menuDisplayed = false">
        Home
      </router-link>
      <hr />
      <router-link
        to="/projects/web"
        class="menu-link"
        @click="displayMenu()"
      >
        Web projects
      </router-link>
      <hr />
      <router-link
        to="/projects/art"
        class="menu-link"
        @click="displayMenu()"
      >
        Art projects
      </router-link>
      <hr />
      <router-link
        to="/contact"
        class="menu-link"
        @click="displayMenu()"
      >
        Contact
      </router-link>
    </div>
</template>

<script src="./header.js">
</script>

<style>
.container-icons {
  position: relative;
  height: 80%;
}

.container-icons .fa {
  position: absolute;
  right: 0;
  top: 20%;
}

#btn-menu-times {
  opacity: 0;
}

.menu-float {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.952);
  width: 100vw;
  height: calc(150vh);
  top: var(--height-header);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5%;
  opacity: 0;
}

.menu-link {
  font-weight: 700;
  font-size: 2rem;
}

.menu-float hr {
  border: 2px solid var(--color-white);
  width: 100%;
}

.menu-float .router-link-active {
  background: -webkit-linear-gradient(
    left,
    red,
    orange,
    yellow,
    green,
    cyan,
    blue,
    violet
  );
  background: -o-linear-gradient(
    right,
    red,
    orange,
    yellow,
    green,
    cyan,
    blue,
    violet
  );
  background: -moz-linear-gradient(
    right,
    red,
    orange,
    yellow,
    green,
    cyan,
    blue,
    violet
  );
  background: linear-gradient(
    to right,
    red,
    orange,
    yellow,
    green,
    cyan,
    blue,
    violet
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--color-black);
  height: var(--height-header);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  border-bottom: 2px solid var(--color-orange);
  border-image-slice: 1;
  border-image-source: blue;
  border-image-source: -webkit-linear-gradient(
    left,
    red,
    orange,
    yellow,
    green,
    cyan,
    blue,
    violet
  );
  border-image-source: -o-linear-gradient(
    right,
    red,
    orange,
    yellow,
    green,
    cyan,
    blue,
    violet
  );
  border-image-source: -moz-linear-gradient(
    right,
    red,
    orange,
    yellow,
    green,
    cyan,
    blue,
    violet
  );
  border-image-source: linear-gradient(
    to right,
    red,
    orange,
    yellow,
    green,
    cyan,
    blue,
    violet
  );
  box-shadow: 0 0 5px var(--color-white-transparent);
}

.header .container-img {
  min-height: unset;
  height: 80%;
  margin: 0;
}
</style>