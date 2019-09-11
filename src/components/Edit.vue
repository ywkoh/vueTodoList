<template>
  <div class="section">
    <h2>{{ title }}</h2>
    <div class="content_wrap"><label for="ipContent">내용</label> <input id="ipContent" type="text" v-model="todo.content"></div><br />
    <button @click="editAndGo()">저장</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Edit',
  data () {
    return {
      title: 'Edit',
      todo: null
    }
  },
  created () {
    this.initPage()
  },
  methods: {
    ...mapActions(['editModel', 'initModel']),
    initPage () {
      console.log('this.$route.query.idx', this.$route.query.idx)
      this.todo = this.$store.state.model.editItem
      console.log('todo', this.todo)
    },
    editAndGo () {
      this.editModel({'todo': this.todo, 'content': this.itemContent})
      this.$router.replace('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .section{margin-bottom:10px}
</style>
