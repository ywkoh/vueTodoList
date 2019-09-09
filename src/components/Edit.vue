<template>
  <div class="section">
    <h2>{{ title }}</h2>
    <div class="title_wrap"><label for="ipTitle">제목</label> <input id="ipTitle" type="text" v-model="itemTitle"></div><br />
    <div class="content_wrap"><label for="ipContent">내용</label> <input id="ipContent" type="text" v-model="itemContent"></div><br />
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
      itemTitle: '',
      itemContent: '',
      itemIdx: -1
    }
  },
  created () {
    this.initModel()
    this.initPage()
  },
  methods: {
    ...mapActions(['editModel', 'initModel']),
    initPage () {
      console.log('this.$route.query.idx', this.$route.query.idx)
      var obj = this.$store.state.model.list.find(item => item.idx === parseInt(this.$route.query.idx, 10))
      console.log('obj', obj)
      this.itemTitle = obj.title
      this.itemContent = obj.content
      this.itemIdx = obj.idx
    },
    editAndGo () {
      this.editModel({'title': this.itemTitle, 'content': this.itemContent, 'idx': this.itemIdx})
      this.$router.replace('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .section{margin-bottom:10px}
</style>
