### webpack中动态import()打包后的文件名称定义
- - -

- 动态 `import()` 打包出来文件的 name 是按照0,1,2...依次排列，如0.js、1.js等，当希望打包出来的文件名是打包前的文件名称时，则需经历如下3个步骤：

1. 在 webpack 配置文件中的 `output` 中添加 `chunkFilename`。命名规则根据自己的项目来定，其中 `[name]` 就是文件名：
![chunk-01](/home/260239/文档/Projs/samyechan.github.io/read-notes/imgs/chunk-01.png)

2. 在动态 `import()` 代码处添加注释 `webpackChunkName` 告诉 webpack 打包后的 chunk 的名称（注释中的内容很重要，不能省掉）:
![chunk-02](/home/260239/文档/Projs/samyechan.github.io/read-notes/imgs/chunk-02.png)

3. ??? 大多数情况下我们使用动态import()是通过循环来做的，这样我们就不得不引入变量了，使用[request]来告诉webpack

