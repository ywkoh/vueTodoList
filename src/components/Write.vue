<template>
  <div class="section">
    <h2>{{ title }}</h2>
    <div class="title_wrap"><label for="ipTitle">제목</label> <input id="ipTitle" type="text" v-model="itemTitle"></div><br />
    <div class="content_wrap"><label for="ipContent">내용</label> <input id="ipContent" type="text" v-model="itemContent"></div><br />
    <button @click="addAndGo()">저장</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Write',
  data () {
    return {
      title: 'Write',
      itemTitle: '',
      itemContent: ''
    }
  },
  methods: {
    ...mapActions(['addModel']),
    addAndGo () {
      this.addModel({'title': this.itemTitle, 'content': this.itemContent})
      this.$router.replace('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .section{margin-bottom:10px}
</style>
