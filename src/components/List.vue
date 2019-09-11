<template>
  <div class="section">
    <h2>{{ title }}</h2>
    <ul v-if="list && list.length">
      <li v-for="( item, index ) in list" :key="index" :class="{'none': ( completeFlag === 'complete' && !item.complete ) || ( completeFlag === 'incomplete' && item.complete )}">
        <a @click="goEdit(item)">
          <span :class="{'complete': item.complete}" class="item_content">{{item.content}}</span>
        </a>
        <button class="btn_del" @click="delItem(item)">X</button>
        <button v-if="item.complete" class="btn_toggle" @click="toggleItem(item)">완료취소</button>
        <button v-if="!item.complete" class="btn_toggle" @click="toggleItem(item)">완료</button>
      </li>
    </ul>
    <div v-if="list && list.length" class="btn_wrap">
      <a @click="setVisible('')" :class="{'on':completeFlag===''}">전체</a>
      <a @click="setVisible('complete')" :class="{'on':completeFlag==='complete'}">완료목록</a>
      <a @click="setVisible('incomplete')" :class="{'on':completeFlag==='incomplete'}">미완목록</a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'List',
  data () {
    return {
      title: 'List',
      list: [],
      completeFlag: ''
    }
  },
  created () {
    this.setList()
  },
  methods: {
    ...mapActions(['delItem', 'toggleItem']),
    ...mapGetters(['getModel']),
    setList () {
      this.list = this.$store.state.model.list
    },
    setVisible (val) {
      this.completeFlag = val
    },
    goEdit (item) {
      this.$store.state.model.editItem = item
      this.$router.replace('/Edit')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .section {width:70%;margin:0 auto 10px}
  .section ul{border:1px solid #e5e5e5; text-align:left; padding:10px}
  .section ul li{display:block;margin-bottom:5px}
  .section ul li.none{display:none}
  .section ul li .item_title{font-weight:bold}
  .section ul li .item_title.complete, .section ul li .item_content.complete{text-decoration:line-through}
  .section .btn_del{float:right}
  .section .btn_toggle{float:right;margin-right:5px}
  .btn_wrap a{padding: 0 5px;font-size:13px}
  .btn_wrap a.on{font-weight:bold}
</style>
