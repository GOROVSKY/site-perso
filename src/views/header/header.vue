<template>
  <div class="header">
    <div
      class="text-start cursor-pointer"
      style="line-height: 1.2"
      @click="$router.push('/')"
    >
      <div style="font-size: 0.8rem">Guillaume Laville</div>
      <div class="text-bold" style="font-size: 1.7rem" id="header-vue-name">
        {{ vueName }}
      </div>
    </div>
    <div @click="displayMenu()" class="container-icons d-block d-xl-none">
      <i class="fa fa-2x cursor-pointer fa-bars" id="btn-menu-bars"></i>
      <i class="fa fa-2x cursor-pointer fa-times" id="btn-menu-times"></i>
    </div>
  </div>

  <div class="menu-float" id="menu-float">
    <router-link to="/" class="network" title="Home">
      <span class="img-circle fa fa-user-circle"></span>
    </router-link>
    <hr />
    <router-link to="/skills" class="network mb-2" @click="displayMenu()" title="Education & Skills"
      ><span class="img-circle bg-blue fa fa-code"></span
    ></router-link>
    <router-link to="/projects/web" class="network mb-2" @click="displayMenu()" title="Web projects"
      ><span class="img-circle bg-purple fa fa-laptop"></span
    ></router-link>
    <router-link to="/projects/art" class="network mb-2" @click="displayMenu()" title="Artistic creations"
      ><span class="img-circle bg-red fa fa-paint-brush"></span
    ></router-link>
    <router-link to="/contact" class="network mb-2" @click="displayMenu()" title="Contact"
      ><span class="img-circle bg-orange fa fa-paper-plane"></span
    ></router-link>
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
  background-color: rgba(0, 0, 0);
  width: var(--width-menu-float);
  height: calc(100vh);
  top: var(--height-header);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  opacity: 0;
  z-index: -10;
}

.menu-float .router-link-active .fa {
  border-color: white !important;
}
.menu-float .router-link-active .fa::before {
  color: white;
}

.menu-float .network .fa {
  border-color: var(--purple-light);
}

.header {
  position: fixed;
  top: 0;
  z-index: 100;
  background-color: var(--color-black);
  height: var(--height-header);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  border-bottom: 2px solid var(--color-green);
  border-image-slice: 1;
  border-image-source: var(--gradient-webkit);
  border-image-source: var(--gradient-rainbow-webkit);
  border-image-source: var(--gradient-rainbow);
  border-image-source: var(--gradient-rainbow-o);
  border-image-source: var(--gradient-rainbow-moz);

  box-shadow: 0 0 5px var(--color-white-transparent);
}

.header .container-img {
  min-height: unset;
  height: 80%;
  margin: 0;
}
</style>