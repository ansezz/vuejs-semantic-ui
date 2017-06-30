<template>
  <div id="app">
    <header>
      <span>Vue.js PWA</span>
    </header>
    <main>


      <s-reveal size="small" circular image instant type="rotate">
        <s-img slot="visible-content" src="./static/img/logo2.png" size="small" circular></s-img>
        <s-img slot="hidden-content" src="./static/img/logo.png" size="small" circular></s-img>
      </s-reveal>


      <s-container>


        <div class="ui" v-sdivider.horizontal></div>

        <s-flag name="ma"></s-flag>

        <s-icon icon="user"></s-icon>

        <s-button class="circular icon" text="" icon="facebook"></s-button>

        <div class="ui buttons">

          <s-button class="facebook" text="Facebook" icon="facebook"></s-button>
          <div class="or"></div>
          <s-button class="twitter" text="Twitter" icon="twitter"></s-button>
        </div>

        <img src="./assets/logo.png" alt="Vue.js PWA">

        <s-img src="./static/img/logo.png" alt="Vue.js PWA" bordered centered circular spaced size="tiny">
        </s-img>

        <router-view></router-view>

      </s-container>
      <div>
        <s-loader active indeterminate centered inline text="loading" size="massive"></s-loader>
      </div>


    </main>
  </div>
</template>

<script>
  export default {
    name: 'app',
    mounted () {
    },
    updated () {
    },
    data () {
      return {}
    }
  }
</script>

<style>
  body {
    margin: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  main {
    text-align: center;
    margin-top: 40px;
  }

  header {
    margin: 0;
    height: 56px;
    padding: 0 16px 0 24px;
    background-color: #35495E;
    color: #ffffff;
  }

  header span {
    display: block;
    position: relative;
    font-size: 20px;
    line-height: 1;
    letter-spacing: .02em;
    font-weight: 400;
    box-sizing: border-box;
    padding-top: 16px;
  }
</style>
