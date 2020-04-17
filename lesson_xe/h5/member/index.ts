// // console.log('hello member')

// //有什么问题
// // 1. 写死了, 不能动态更新,
// // 2. js uuid npm
// // 3. 数据不合法, 数据不严谨  如何让不严谨的数据守规矩?
// //接口
// interface MembersEntity{
//     id: number;
//     name: string;
//     avatar: string;
// }
// //members: MembersEntity[]  声明members属性必须为上面的类型
// const members: MembersEntity[] = [
//   {
//     id: 1314,
//     name: "小狼人",
//     avatar: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1887790499,2593561230&fm=26&gp=0.jpg"
//   },
//   {
//     id: 520,
//     name: "小二鬼",
//     avatar: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587135974893&di=c64fcd22dfc751d359c0d58accbc907d&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2Fjz%2Ft7%2FQJ6474325437.jpg"
//   },
//   {
//     id: 10000,
//     name: "小毛孩",
//     avatar: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587135974892&di=de884782984e3bdaf3bd2b0febebeca9&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fblog%2F201306%2F23%2F20130623172655_zrAmz.jpeg"
//   }
// ];

// const tbody = document.querySelector('#member tbody')
// //从一个json数组变成了 html 数组 tbody 最想要的 
// tbody.innerHTML = members.map((member) =>{
//     return `
//     <tr>
//         <td>${member.id}</td>
//         <td>${member.name}</td>
//         <td>
//         <img src = "${member.avatar}">
//         </td>
//     </tr>
//     `
// }).join("")
// const form =document.forms.myform;

