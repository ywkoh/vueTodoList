const sessionStoragePlugin = store => {
  store.subscribe((mutation, { model }) => {
    window.sessionStorage.setItem('todoModel', JSON.stringify(model))
  })
}

export default [sessionStoragePlugin]
