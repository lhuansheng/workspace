// 与进制转换类似
interface StackObj {
  // 手动维护 指针
  [propName: number]: any;
}
export default class ObjStack {
  private items: StackObj; // JSON 代替
  private count: number;
  // 构造器
  constructor() {
    this.items = {}
    this.count = 0
  }
  push(item: any) {
    // hashmap O(1) 空间不连续
    this.items[this.count] = item
    this.count++
  }
  pop() {
    if(this.isEmpty()) {
      return undefined
    }
    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }
  isEmpty():Boolean {
    return this.count===0
  }
  peek() {
    if(this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }
  clear() {
    this.items={}
    this.count = 0
  }
  size() : number {
    return this.count
  }
  toString() {
    if(this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[0]}`
    for(let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`
    }
    return objString
  }
}