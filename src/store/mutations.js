export const mutations = {
  addTodo (state, todo) {
    if (!state.model.list) {
      state.model.list = []
    }
    if (!state.model.idx) {
      state.model.idx = 1
    } else {
      state.model.idx++
    }
    todo.idx = state.model.idx
    state.model.list.push(todo)
  },
  removeTodo (state, todo) {
    state.model.list.splice(state.model.list.indexOf(todo), 1)
  },
  editTodo (state, { todo, content = todo.content, complete = todo.complete }) {
    todo.content = content
    todo.complete = complete
  }
}
