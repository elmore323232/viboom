<template>
  <div id="app">
    <div class="container">
      <h1 class="container-title">Прогноз продвижения</h1>
      <div class="col-2">
          <h3 class="mob-title mob">Мы пользуемся только официальными инструментами рекламы, рекомендуемыми самим YouTube, поэтому все приведенные нами просмотры, лайки и комментарии будут настоящими, а подписчики живыми и заинтересованными в тематике Вашего канала</h3>
          <div class="col-1 info-block" style="">
          <h3 class="descktop">Мы пользуемся только официальными инструментами рекламы, рекомендуемыми самим YouTube, поэтому все приведенные нами просмотры, лайки и комментарии будут настоящими, а подписчики живыми и заинтересованными в тематике Вашего канала</h3>
          <div class="info-block-card">
            <div class="card-title">Введите сумму, чтобы увидеть прогноз по подписчикам и просмотрам</div>
            <div class="input-wrapper">
              <img src="./assets/icon-rub.png" alt="">
              <input type="number" class="card-input" v-model="counter" @input="updateStats" @change="setCounter(counter)">
              <span class="currency">руб.</span>
            </div>
            <div class="error" v-if="!$v.counter.between">Ошибка! Введите от {{$v.counter.$params.between.min}} до {{$v.counter.$params.between.max}}</div>
          </div>
          <span class="info-block-subtitle descktop">Прогноз подписчиков зависит от Вашего контента. Сделайте его интересным и старайтесь не снижайть планку</span>
          <div class="badges-wrapper mob">
            <div class="badge" id="views">
              <h3 class="badge-title">+{{$store.state.viewers}}</h3>
              <span class="badge-subtitle">просмотров</span>
            </div>
            <div class="badge" id="followers">
              <h3 class="badge-title">+{{$store.state.followers}}</h3>
              <span class="badge-subtitle">подписчиков</span>
            </div>
          </div>
        </div>

        <div class="col-1 graph-block">
          <div class="badges-wrapper descktop">
            <div class="badge" id="views">
              <h3 class="badge-title">+{{$store.state.viewers}}</h3>
              <span class="badge-subtitle">просмотров</span>
            </div>
            <div class="badge" id="followers">
              <h3 class="badge-title">+{{$store.state.followers}}</h3>
              <span class="badge-subtitle">подписчиков</span>
            </div>
          </div>

          <Chart></Chart>
          <span class="info-block-subtitle mob">Прогноз подписчиков зависит от Вашего контента. Сделайте его интересным и старайтесь не снижайть планку</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from './components/Chart.vue'
import { between } from 'vuelidate/lib/validators'

export default {
  name: 'App',
  components: {
    Chart,
  },

  data() {
    return {
      counter: 0,
    }
  },

  validations: {
    counter: {
      between: between(100, 15000),
    }
  },

  methods: {
    updateStats(e) {
      if(!this.$v.counter.$error){
        this.$store.dispatch('changeStats', e.target.value)
      }
    },

    setCounter(value) {
      this.$v.counter.$touch()
    }
  },
}
</script>

<style>

body {
  margin: 0;
}

  h3 {
    margin-block-end: 0;
    margin-block-start: 0;
  }
  
  .error {
    text-align: center;
    padding-top: 5px;
    font-size: 15px;
    line-height: 22px;
    font-family: 'Montserrat', sans-serif;
    color: #8c0c00;
  }

  .container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 40px;
  }

  .container-title {
    font-family: 'PT Sans', sans-serif;
    text-align: center;
    font-weight: bold;
    font-size: 46px;
    line-height: 64px;
    color: #212121;
  }

  .col-2 {
    max-width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .col-1 {
    display: flex;
    flex-direction: column;
    max-width: 47%;
  }


  .info-block {
    max-width: 590px;
  }

  .info-block h3 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
  }

  .info-block-card {
    width: 100%;
    max-width: 490px;
    height: 209px;
    background: #E2E5EE;
    border-radius: 6px;
    padding: 30px 50px;
    margin: 48px 0 30px 0;
  }

  .card-title {
    max-width: 358px;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #212121;
    font-family: 'PT Sans', sans-serif;
  }
  
  .input-wrapper {
    margin-top: 40px;
    display: flex;
    align-items: center;
  }

  .card-input {
    border: 1px solid #E2E5EE;
    box-sizing: border-box;
    border-radius: 6px;
    width: 80%;
    max-width: 308px;
    height: 44px;
    margin: 0 20px;
    padding: 0 20px;
  }

  .currency, .card-input {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    font-family: 'Montserrat', sans-serif;
    color: #212121;
  }

  .info-block-subtitle {
    color: #717171;
    font-size: 15px;
    line-height: 22px;
    font-family: 'Montserrat', sans-serif;
  }

  .badges-wrapper {
    display: flex;
    justify-content: flex-end;
  }

  .badge {
    background-color: rgba(188, 154, 244, 0.3);
    border-radius: 6px;
    width: 100%;
    max-width: 240px;
    height: 112px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .badge:last-child {
    margin-left: 24px;
  }

  .badge-title {
    font-weight: bold !important;
    font-size: 30px !important;
    line-height: 40px !important;
    font-family: 'PT Sans', sans-serif !important;
    margin-block-end: 0;
    margin-block-start: 0;
  }

  .badge-subtitle {
    font-size: 18px;
    line-height: 31px;
    font-family: 'Montserrat', sans-serif;
  }


  .mob {
    display: none;
  }

  @media(max-width: 1280px) {
    .col-2 {
      flex-direction: column;
    }

    .col-1 {
      width: 100%;
      max-width: 100%;
    }

    .mob {
      display: flex;
    }

    .descktop {
      display: none;
    }

    .info-block {
      flex-direction: row;
    }

    .badges-wrapper {
      flex-direction: column;
      width: 100%;
    }
    
    .badge:last-child {
      margin: 0;
    }

    .badge {
      height: 92px;
      max-width: 348px;
    }

    .info-block-card {
      width: 100%;
      max-width: 402px;
      height: 146px;
    }

    .badges-wrapper {
      justify-content: space-between;
      align-items: flex-end;
      max-height: 206px;
      margin: 48px 0 30px 30px;
    }

    canvas {
      width: 100% !important;
    }
    .small {
      max-width: 100%;
    }

    .mob-title {
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;
      font-family: 'Montserrat', sans-serif;
    }
  }

  @media(max-width: 767px) {
    .container {
      padding: 0;
    }

    .container-title {
      font-weight: bold;
      font-size: 32px;
      line-height: 42px;
      padding: 0 20px;
    }

    .info-block {
      flex-direction: column;
    }

    .info-block-card {
      max-width: 100%;
      width: 100%;
      justify-content: center;
      align-items: center;
      padding: 30px 0;
      border-radius: 0;
      margin-bottom: 0;
    }

    .card-title {
      margin: 0 auto;
      max-width: calc(100% - 40px);
    }

    .input-wrapper {
      justify-content: center;
      align-items: center;
      padding: 0 20px;
    }

    .card-input {
      max-width: 283px;
      height: 40px;
      margin: 0 16px;
    }

    .mob-title {
      max-width: calc(100% - 40px);
      text-align: center;
      font-size: 15px;
      line-height: 25px;
    }

    .badges-wrapper {
      margin: 16px 0;
      flex-direction: row;
    }

    .badge {
      max-width: 179px;
      height: 92px;
    }

    .badge:first-child {
      margin-left: 20px;
      margin-right: 8px;
    }

    
    .badge:last-child{
      margin-right: 20px;
      margin-left: 8px;
    }

    .col-2 {
      align-items: center
    }

    .info-block-subtitle {
      max-width: calc(100% - 40px);
      margin: 0 auto;
      margin-bottom: 50px;
    }
  }

  @media (max-width: 375px) {
    .error {
      font-size: 12px;
      line-height: 19px;
      padding-top: 2px
    }
  }

</style>
