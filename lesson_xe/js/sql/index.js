const users = [
    {id: 1, name: 'john', age: 28, sex: 'male'},
    {id: 2, name: 'bob', age: 33, sex: 'male'},
    {id: 3, name: 'tom', age: 22, sex: 'male'},
    {id: 4, name: 'alice', age: 18, sex: 'female'},
    {id: 5, name: 'rihana', age: 35, sex: 'female'},
    {id: 6, name: 'sara', age: 20, sex: 'female'}
]
// SQL 业务能力封装起来
// es5 function 类
// 抽象
function SQL(table){
  this.table = table; //数据源
  // 结构的保存变量 当下的结果， 保存每一步的操作过后的结果
  this._result = null; // 挂载 this 对象属性？
  this._getRows = function() {
    return this._result ? this._result : this.table;
  }
}
SQL.prototype.where = function(predicate){
  // filter
  // console.log(predicate)
  let rows = this._getRows();
  // console.log(rows,'222222222222')
  // 如果是数组的化
  if(Array.isArray(rows)){
    this._result = rows.filter(predicate)
  } else {
    // object
    // 拿出每一个数组， filter， 返回的仍然是 object
    this._result = Object.keys(rows)
      .reduce(function(groups,group){
        groups[group] = rows[group].filter(predicate)
        return groups;
      },{})
  }
  // 如果是对象的
  return this
}
SQL.prototype.groupBy = function(key){
  // console.log(key)
  let rows = this._getRows(); // 私有方法
  this._result = rows.reduce(function(groups, row){
    let group = row[key]
    // console.log(group)
    if(!groups[group]){
      groups[group] = []
    }
    groups[group].push(row)
    return groups;
  },{})
// console.log(this._result)
  return this;
}
SQL.prototype.getResult = function(){
  return this._result;
}
let sql = new SQL(users)
let predicate = function(row){
  return row.age<30
}

let result = sql
.groupBy('sex')  //链式调用
.where(predicate)
.getResult()
console.log(result)