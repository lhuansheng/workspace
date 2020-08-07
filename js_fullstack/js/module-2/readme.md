## rollup
可以将所有的js文件打包，去除不需要的导出代码，如min.js

npm i rollup -S
npx rollup index.js --file dist.js --format cjs

# 对于 一个js文件引用另外一个文件，当一段时间后，被引用的文件如果发生改变，那么es-module和commonjs会发生什么变化呢？
## es-module
a中引入math中的bar,可是一段时间后，math中的bar又改变了，这时后a中的值也会跟着变，因为 两者之间仅仅只是引用关系
## commonjs
comm2引用comm1,comm1中的值变了，
如果comm1中的值是引用类型的，如对象obj，则comm2中的值也会变化(因为他们用的是同一个音引用地址)，
如果只是普通的变量，comm2中的值则不会变化


