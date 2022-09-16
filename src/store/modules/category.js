import { getCategory } from '@/api/category'

export default {
  // 独立作用域
  namespaced: true,
  state: () => ({
    // navigationBar 展示的数据源
    categorys: []
  }),
  mutations: {
    /**
     * 为 categorys 赋值
     */
    setCategorys(state, categorys) {
      state.categorys = [...categorys]
    }
  },
  actions: {
    /**
     * 获取 category 数据，并自动保存到 vuex 中
     */
    async useCategoryData(context) {
      const { categorys } = await getCategory()
      context.commit('setCategorys', categorys)
    }
  }
}
