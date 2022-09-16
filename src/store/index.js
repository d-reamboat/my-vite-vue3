import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import category from './modules/category'
import getters from './getters'

const store = createStore({
  getters,
  modules: {
    category
  },
  plugins: [
    //数据持久化
    createPersistedState({
      // 保存到 localStorage 中的 key
      key: 'my-category',
      // 需要保存的模块
      paths: ['category']
    })
  ]
})

export default store
