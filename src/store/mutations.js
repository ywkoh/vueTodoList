export const mutations = {
  setModel: (state, data) => {
    state.model = data
    var str = JSON.stringify(data)
    sessionStorage.setItem('todoModel', str)
  }
}
