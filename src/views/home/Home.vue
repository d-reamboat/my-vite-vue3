<template>
  <div>
    <List :category="categorys" @onClickItem="onClickItem"></List>
  </div>
</template>

<script setup>
import List from './components/List.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()
store.dispatch('category/useCategoryData')
const categorys = store.getters.categorys

const onClickItem = () => {
  router.push('/about')
}
</script>

<style lang="scss" scoped></style>
