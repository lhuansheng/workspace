## 原型链继承
<script>
  function Animal(){
    this.live = 'land'
    this.eat = []
  }
  function Cat () {
    Animal.call(this) 
    this.sound = '喵喵喵'
  }
  Cat.prototype = new Animal()
  let c1 = new Cat()
  let c2 = new Cat()
  let c3 = new Cat()
  let c4 = new Cat()
  c1.eat.push('fish')
  c2.eat.push('meat')
</script>


## 继承属性
``` js
