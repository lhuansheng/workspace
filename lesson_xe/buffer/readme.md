## buffer 的那些事

### 为什么 buffer 会产生？
  由于应用场景不同，再 Node 中，应用需要处理网络协议，操作数据库，处理图片，接受上传文件等，再网络流和文件的操作中，还要处理大量二进制数据，JavaScript 自有的字符串远远不能满足这些需求，于是 Buffer 对象应运而生。
### Buffer 结构
  类似 Array 对象，主要操作字节。 从两方面认识模块结构和对象层面
### 模块结构(不理解)
  Node 在进程启动时就已经加载，无需使用 requre()即可使用
### Buffer 对象
  类似数组,得到 16 进制两位数,即 0-255
  ```js
  var str = "学习node.js";
  var buf = new Buffer(str, "utf-8");
  console.log(buf);
  // => <Buffer e5 ad a6 e4 b9 a0 6e 6f 64 65 2e 6a 73>
  ```
  Buffer 有 length 属性,可通过下标访问元素
  ```js
  var buf = new Buffer(100);
  console.log(buf.length); // => 100
  ```
  可以通过下标赋值
  ```js
  buf[10] = 100;
  console.log(buf[10]); //=>100
  ```
  值得注意的是,如果给的值不在 0-255 之间
  ```js
  buf[20] = -100;
  console.log(buf[20]); // 156
  buf[21] = 300;
  console.log(buf[21]); // 44
  buf[22] = 3.1415;
  console.log(buf[22]); // 3
  ```
  规则是如果给的值小于 0,给该值逐次加 256,直到在 0-255 之间,同理,如果大于 255,逐次减 256,如果小数,舍弃小数
### Buffer 内存分配
  Node 采用 slab 分配机制(申请一块固定大小的内存区域),它有三种状态
  -  full: 完全分配
  -  partial: 部分分配
  -  empty: 未分配
    需要 buffer 是,可以通过 new Buffer(size)得到指定内存大小
    Node 以 8KB 分大小内存,Buffer.poolSize = 8 \* 1024;
    一个 slab 值为 8kb,以它作为单元分配内存
  1. 分配小 Buffer 对象
     若小于 8kb,Buffer 会使用一个局部变量 pool 作为中间处理对象,处于分配状态的 slab 单元都会指向它. 如下,以下新申请的 SlowBuffer 会指向一个全新的 slab 单元
  ```js
  var pool;
  function allocPool() {
    pool = new SlowBuffer(Buffer.poolSize);
    pool.used = 0;
  }
  ```
  如下为全新slab单元
  |                                 | 8kb 的pool
  used:0
  此时 slab 状态为 empty
  当 new Buffer(1024), 这次构造将检查pool对象,若没有,新建slab单元指向它,if (!pool || pool.length - pool.used < this.length) allocPool(); 同时当前buffer对象的parent 属性指向slab, 并记录是从哪个位置（offset)开始使用，slab自身记录被使用了多少字节
  存放进去之后slab 状态为partial
  当再一次创建时判断剩余空间是否充足，够就存，不够，构造新的slab。 原来的slab空间浪费
  2. 分配小 Buffer 对象
  超过8kb buffer对象，直接分配一个SlowBuffer为slab单元

### Buffer 的转换
  buffer 对象可以与字符串相互转换，支持 ASCII,UTF-8,UTF-16LE/UCS-2,Base64,Binary,Hex
  1. 字符串转buffer
  主要通过构造函数完成
  new Buffer(str, [encoding]); 
  存储的之内是一种编码类型，一个buffer对象可以存储不同编码类型的字符串转码的值，调用write()
  buf.write(string,[offset],[length],[encoding])
  2. Buffer 转字符串
  转换十分简单,如下
  buf.toString([encoding],[start],[end])
  3. Buffer不支持的编码类型
    Buffer.isEncoding(encoding)判断是否支持转换
    
  

  
