# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## 项目配置

1. Vite
2. Vue3
3. Store
4. Vuex 数据持久化
5. axios
6. 软连接

## 发送请求

```js
const getPexelsData = async () => {
  // 触发接口请求
  const res = await getPexelsList(query)
  categorys.value = res
}
```


## 项目目录

见 `assets` 文件夹

## 项目配置

```
Router
Vuex
Scss
// 标准代码格式化
Linter / Formatter(ESLint + Standard config)
yarn
axios
```
## 样式
1. 初始化
2. html font-size基准: 100px

## Store 使用

1. 在 `modules` 中增加仓库
2. 在 `getters.js` 中设置简单访问
3. 在 `index.js` 中注册模块
4. 组件中使用
5. 在 `template` 中可以直接 `$store.getters.` 访问数据

## axios 的使用

1. 在 `src\utils\request.js` 中配置基本信息
2. 在 `src\api` 下创建每个模块的请求方法
3. 在 `src\store\modules\category.js` 的 action 中请求数据并保存到 `store` 的 `state` 中
4. 组件从 `store` 中获取后台请求到的数据使用

## Prettierrc(代码格式化配置)

.prettierrc

```
{
  // 不尾随分号
  "semi": false,
  // 使用单引号
  "singleQuote": true,
  // 多行逗号分割的语法中，最后一行不加逗号
  "trailingComma": "none"
}
```
