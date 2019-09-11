export default {
  addModel (context, data) {
    context.commit('addTodo', data)
  },
  delItem (context, todo) {
    context.commit('removeTodo', todo)
  },
  toggleItem (context, todo) {
    context.commit('editTodo', { todo, complete: !todo.complete })
  },
  editModel (context, { todo, value }) {
    context.commit('editTodo', { todo, content: value })
  }
}
