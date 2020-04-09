// js es6 class 关键字
const UUID = require('uuid')//引入第三方库，

class Wallet{
    //属性和方法组成
    constructor(){ //构造函数里声明
        this._id = UUID.v1().replace(/-/g,"")   //命名规则约定   _变量  私有

        //创建时间  不能改
        this._createTime = new Date()  //类型转换 
        // 余额  怎么设计?

        this._balance = 0; //余额设计成私有的属性  读与写要遵守一定的规则  安全

        // console.log(this.id)
        //console.log('欢迎使用支付宝钱包')
        // 设计支付宝用的钱包，几十亿都在用的
        //19979113182
        //数字货币的概念 比特币，
        //  1. 唯一 id, autoincrement  Node, 绝对不会重复

    }
    getBalance(){
        let time = this.getCreateTime();
        console.log(time)
        console.log(this._balance)
        
    }
    // 能这么写吗？
    // setBalance(){

    // }

    increaseBalance(increaseAmount){
        console.log('多了'+ increaseAmount)
        this._balance += increaseAmount
    }
    decreaseBalance(decreaseAmount){
        this._balance -= decreaseAmount
    }

    setId(){
        throw new Error('私有属性_id不可以修改')
    }
    getId(){
        return this._id
    }
    getCreateTime(){  //public
        return this._createTime
    }
    

}

const zzwWallet = new Wallet();//实例化
// console.log(zzwWallet.getId())
// console.log(zzwWallet.getCreateTime())
console.log(zzwWallet.getBalance())
zzwWallet.increaseBalance(10.0)
zzwWallet.decreaseBalance(8.1)
console.log(zzwWallet.getBalance())

//zzwWallet.setId();
//zzwWallet.id='12212'//id 属性只读，但不能修改
////console.log(zzwWallet.id) // id 是 zzwWallet 的public 属性


