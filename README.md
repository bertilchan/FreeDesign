# FreeDesign

### 项目运行

* 安装依赖：`npm install`
* 运行项目：`npm run serve`
* 打包：`npm run build`

### 分支命名规范

统一为`feat/xxx`

### 代码提交规范

push 代码的commit 版本描述统一为：

```
feat: 新特性
fix: 修改问题
refactor: 代码重构
docs: 文档修改
style: 代码格式修改, 注意不是 css 修改
test: 测试用例修改
chore: 其他修改, 比如构建流程, 依赖管理.
pref: 性能提升的修改
build: 对项目构建或者依赖的改动
ci: CI 的修改
revert: revert 前一个 commit
```
### notice
* 执行build时先删除原有的dist
* 不需手动copy dist文件到server中的webapp更新，已在jenkins中实现

### Link

[线上地址](http://47.107.78.74:3333/)

[API文档]()

[后端代码仓库](https://github.com/bertilchan/FreeDesign-Server)