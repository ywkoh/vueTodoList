import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    model: {}
  },
  mutations: {
    setModel: function (state, data) {
      state.model = data
      var str = JSON.stringify(data)
      sessionStorage.setItem('todoModel', str)
    }
  },
  actions: {
    initModel: function (context) {
      var obj = JSON.parse(sessionStorage.getItem('todoModel'))
      if (!context.state.model.list && obj.list && obj.list.length) {
        context.commit('setModel', obj)
      }
    },
    addModel: function (context, data) {
      var model = context.state.model
      if (!model.list) {
        model.list = []
      }
      if (!context.state.model.idx) {
        context.state.model.idx = 0
      }
      data.idx = ++context.state.model.idx
      model.list.push(data)
      context.commit('setModel', model)
    },
    delItem: function (context, idx) {
      var model = context.state.model
      var num = -1
      for (var i = 0; i < model.list.length; i++) {
        if (model.list[i].idx === idx) {
          num = i
          break
        }
      }
      console.log(num)
      if (num > -1) {
        model.list.splice(num, 1)
        context.commit('setModel', model)
      }
    },
    editModel: function (context, data) {
      var model = context.state.model
      var num = -1
      for (var i = 0; i < model.list.length; i++) {
        if (model.list[i].idx === parseInt(data.idx, 10)) {
          num = i
          break
        }
      }
      model.list[num] = data
      context.commit('setModel', model)
    }
  }
})
