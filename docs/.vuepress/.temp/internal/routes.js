export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/shareit/Desktop/blog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"My Markdown Blog Post"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/shareit/Desktop/blog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
