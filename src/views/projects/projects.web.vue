<template>
  <div>
    <div class="d-flex-resp">
      <a
        class="page-half page-project-web page-blackjack"
        :href="urlBlackJack"
      >
        <div class="voile bg-red"></div>
        <h2 class="title">BlackJack</h2>
        <img class="logo" src="@/assets/images/cards.png">
        <div class="project-detail">VueJs</div>
      </a>
      <a
        class="page-half page-project-web page-emergency"
        :href="urlEmergency"
      >
        <div class="voile bg-purple"></div>
        <h2 class="title">Emergency manager</h2>
        <img class="logo" src="@/assets/images/fire.png">
        <div class="project-detail">VueJs · Flask · PostgreSQL</div>
      </a>
    </div>
  </div>
</template>

<script src="./projects.web.js">
</script>

