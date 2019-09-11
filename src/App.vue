<template>
  <div id="app">
    <h1>Todo App</h1>
    <router-view/>
    <router-link class="bottom_link" to="/">List</router-link>
    <router-link class="bottom_link" to="/Write">Write</router-link>
  </div>
</template>

<script>
export default {
  name: 'App'
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
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;text-decoration: none
}
.bottom_link{padding:0 10px}
</style>
