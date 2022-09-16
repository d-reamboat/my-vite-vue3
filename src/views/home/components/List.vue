<template>
  <div>
    <div class="category">
      <div
        class="category_item"
        @click="onClickItem"
        v-for="item in $store.getters.categorys"
        :key="item.id"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  category: {
    type: Array,
    required: true
  }
})

const emits = defineEmits(['onClickItem'])

const onClickItem = () => {
  emits('onClickItem')
}
</script>

<style lang="scss" scoped>
.category {
  display: flex;
  width: 980px;
  margin: 0 auto;
  justify-content: space-between;
  flex-wrap: wrap;
  &_item {
    width: 80px;
    line-height: 30px;
    background-color: antiquewhite;
    text-align: center;
    border-radius: 50%;
  }
}
</style>
