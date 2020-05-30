## 弹窗
以下是一个错误的演示
1. 创建 nodtfication.jsx
2. App.js 中引入notification.jsx  import Notification from './Notification'
3. 弹窗层级应该非常高 因此 notification html不应该嵌套在里面，而是同级

正确的演示
notification应该用面向对象的方法
1. 创建 notification.jsx
2. 创建 Notification类
3. 将show 和 hidden放在 visible(visible是className)     true 可见   false 不可见
4. 渲染内容到一个div

5. 创建一个方法来实现notification实例  ref.current就是相当于new了一个Notification实例
6. 在这个方法里面 创建一个div，实例化 notification
7. 这个方法会传出两个属性 open 和 close，由于react本身的原因，必须要ref.current.open才能调用这个方法，因此，在外面在重新定义一个 notification,这里仅仅是简化输出。
将 notification 导出完事

8. 在App.js中导入 notification, 并创建两个button，一个是显示消息，一个是隐藏消息，在button里面直接调用哦 notification就可以，close同理 结束