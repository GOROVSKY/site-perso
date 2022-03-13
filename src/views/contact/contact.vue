<template>
  <div class="page padding page-padding d-flex-center">
    <div class="title-sm">
      Contact me by email for any proposals or questions.
    </div>
    <div class="contact-info">
      <span class="email">guillaume.laville69@gmail.com</span>
      <span class="fa fa-copy d-none d-sm-flex cursor-pointer" @click="copyEmail()"></span>
      <a href="mailto:guillaume.laville69@gmail.com" class="container-logo"
        ><span class="fa fa-envelope"></span
      ></a>
    </div>
    <hr />
    <div class="title-sm">I am available on social networks.</div>
    <div class="networks m-0">
      <a
        href="https://www.instagram.com/guillaume.laville/"
        class="network gradient-yellow"
      >
        <span class="img-circle fa fa-instagram gradient-instagram text-white"></span>
      </a>
      <a
        href="https://www.linkedin.com/in/guillaume-l-a54b18173/"
        class="network gradient-yellow"
      >
        <span class="img-circle fa fa-linkedin bg-blue"></span>
      </a>
      <a
        href="https://www.youtube.com/channel/UCgC910SfBDjaSwSdkz00cSQ"
        class="network"
      >
        <span class="img-circle fa fa-youtube bg-red"></span>
      </a>
    </div>
  </div>
</template>

<script src="./contact.js">
</script>

<style scoped>
.contact-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-black);
  color: var(--color-white);
  border-radius: var(--height-shortcut);
  font-weight: 600;
  padding-left: 20px;
  border: 2px solid var(--color-white);
  height: var(--height-shortcut);
  width: 90%;
  max-width: 400px;
  min-width: max-content;
}

.container-logo {
  background-color: rgb(255, 66, 138);
  color: white;
  border: 2px solid white;
  height: calc(100% + 4px);
  width: var(--height-shortcut);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 20px;
  border-radius: var(--height-shortcut);
  margin-right: -2px;
  transition: 0.5s;
}

.contact-info:hover .container-logo {
  transform: rotate(360deg);
}
</style>