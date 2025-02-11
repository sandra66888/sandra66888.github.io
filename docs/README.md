---
title: My Markdown Blog Post
date: 2023-01-01
author: John Doe
tags: [markdown, blogging, tutorial]
lang: zh-CN
description: 页面的描述1
---
<!-- 相对路径 -->
<!-- test -->
```ts title=".vuepress/config.ts"
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: '你好， VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```
```ts{1,7-9}
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: '你好， VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```
一加一等于： {{ 1 + 1 }}

<span v-for="i in 3"> span: {{ i }} </span>




[[toc]]
[首页](../README.md)  
[配置参考](../reference/config.md)  
[快速上手](./getting-started.md)

<!-- 绝对路径 -->

[指南 > 介绍](/zh/guide/introduction.md)  
[配置参考 > markdown.links](/zh/reference/config.md#links)

<!-- URL -->

[GitHub](https://github.com)

