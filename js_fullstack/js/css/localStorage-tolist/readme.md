## map
1. map 强调有映射的功能  渲染
ul.innerHTML = todo.map((item,i)
可以将json对象数组里面的值一个个拿出来，进行一定的操作，比如渲染（将之展现在html页面上）

2. map 映射
    ```js
    let t4 = arr.map(function(num){//内部自己定义函数不用，等着map回头调用，叫做回调函数
        return num*2
    })
    ```

