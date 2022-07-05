/*
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-04 22:17:41
 * @LastEditors: sj
 * @LastEditTime: 2022-07-05 00:07:56
 */
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  // presets: [["es2015", { "modules": false }]],
  plugins: [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
