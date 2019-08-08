<template>
  <div id='app'>
    <img src='./assets/logo.png' />
    <router-view />
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      naem: '',
      age: ''
    }
  },
  methods: {
    onload: () => {
      this.$Api.Get().then( res => {
        this.$Toast(res.data)
      }).catch( error => {
        this.$Toast(error.data)
      })
    }
  },
  created: () => {
    onload()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
