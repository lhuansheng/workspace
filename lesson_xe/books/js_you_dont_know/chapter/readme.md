## 作用域 是什么
- react mvvm setState state   状态机制
  变量  程序的状态 声明空间(闭包，作用域，变量查询，变量提升) 存储值  值修改
- 赋值过程
  var a = 2; 它是怎么运行的?
  var 关键字 a identifier 标识符  = 运算符  2 value literal
  1. 高级语言
    无法理解， 及无法执行
  2. 
## 寻找相关考题 ##
操作系统 -> 编译原理
引擎 V8 编译器 解析器
## 编译原理
1. 分词/词法分析阶段(Tokenizing/Lexing)
[var, a, =, 2]
token 语法错误 
最后 成为 二进制文件
2. 解析/语法分析(Parsing)
语法树
数据结构 + 算法
编译器也是一段代码 也需要运行
HTML <div></div> 形成DOM树
AST  Abstract Syntac Tree
3. 代码生成
编译器(Compiler) : 源代码 -> AST -> 字节码  -( 逐行解释执行 )> 机器码
闭包在编译过程就执行完了
解释器(Interpreter): 

JIT 即时编译器
js  运行时编译
JAVA C++ 预编译


机器码非常长，内存会有压力，因此V8 先执行 字节码，当需要机器码时，再将字节码中的相关代码转换机器码，放入cpu内存执行

