前端， 后端
全栈， 名企就业为主，   AI

package.json  项目描述文件

写一个函数 ，读取src 目录下所有的文件，到一个数组，并把它输出
伪代码：
src 目录，所有文件，
如果它是文件，放入结果数组  api
如果是目录，进入这个目录，


不要等到学了好多才做项目
边学边做
1. 写伪代码  理清思路
2. 百度
3. 细化难点
4. 难受一点, 好成长

递归是算法里的基础思想
递归读取目录下的所有文件,
大任务可以细化为多个小任务,解决方式都类似
并且有退出条件  回归

作业
老师爬楼梯,它可以每次走1级或者走2级,输入楼梯的级数,求不同的走法数



function getDirFiles(startPath){
    //子目录， 孙目录  递归目录
    // 递归
    // 1. 一个大问题  可以分解成很多个相同的小问题
    // 2. 退出条件  目录下没有子目录了
    let result =[]
    // process  是 node 全局变量  进程
   // console.log(path.join(process.cwd(),startPath),'------')
    // 1. 读取所有文件?
    let files= fs.readdirSync(path.join(process.cwd(),startPath))
   // console.log(files)
   for(let file of files){
       //console.log(file)
       let stats = fs.statSync(path.join(process.cwd(),startPath,file))
       if(stats.isFile()){
           result.push(file)
       }
       if(stats.isDirectory()){
           
       }
       //console.log(stats)
   }
    return result
}
