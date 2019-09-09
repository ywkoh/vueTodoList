<template>
  <div class="section">
    <h2>{{ title }}</h2>
    <ul v-if="list && list.length">
      <li v-for="( item, index ) in list" :key="index">
        <router-link :to="'/Edit?idx=' + item.idx">
          <span class="item_title">[{{item.idx}}] {{item.title}} : </span><span class="item_content">{{item.content}}</span>
        </router-link>
        <button class="btn_del" @click="delItem(item.idx)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'List',
  data () {
    return {
      title: 'List',
      list: []
    }
  },
  created () {
    this.initModel()
    this.setList()
  },
  methods: {
    ...mapActions(['delItem', 'initModel']),
    ...mapGetters(['getModel']),
    setList () {
      this.list = this.$store.state.model.list
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .section {width:70%;margin:0 auto}
  .section ul{border:1px solid #e5e5e5; text-align:left; padding:10px}
  .section ul li{display:block;margin-bottom:5px}
  .section ul li .item_title{font-weight:bold}
  .section .btn_del{float:right}
</style>
