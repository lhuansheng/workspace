## Link引入的css和import引入的css有啥区别
这题考查link和@import间的区别，知识点偏
老了，不过我们还是了解下
1、link引入的css可以同时加载，@import引
入的css是在页面加载完毕后再加载
2、link是html标签，没有兼容性问题，而@i
mport是css2之后引入的，存在一定的兼容性
问题，但是目前来看，由于基本都是CSS2-C
ss3了，因此使用上没有啥兼容性问题了
3、JS可以通过DOM操作link标签，但是无法
操作@import
4、当然一般建议优先使用link，减少使用@i
mport

## <script async></script>
## <script defer></script>
https://segmentfault.com/q/1010000000640869