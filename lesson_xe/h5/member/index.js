// console.log('hello member')
//members: MembersEntity[]  声明members属性必须为上面的类型
var members = [
  {
    id: 1314,
    name: "小狼人",
    avatar:
      "https://user-gold-cdn.xitu.io/2019/4/2/169dbc34d71fe2d9?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1",
    phone: "10086",
    countryside: "上饶",
  },
  {
    id: 520,
    name: "小二鬼",
    avatar:
      "https://user-gold-cdn.xitu.io/2020/4/15/1717df5260831711?imageView2/1/w/180/h/180/q/85/format/webp/interlace/1",
    phone: "10086",
    countryside: "上饶"
  },
  {
    id: 10000,
    name: "小毛孩",
    avatar:
      "https://user-gold-cdn.xitu.io/2020/4/8/17155deae0fa6ae1?imageView2/1/w/180/h/180/q/85/format/webp/interlace/1",
    phone: "10086",
    countryside: "上饶"
  },
];
var tbody = document.querySelector("#member tbody");
//从一个json数组变成了 html 数组 tbody 最想要的
tbody.innerHTML = members
  .map(function (member) {
    return (
        `
        <tr>
            <td>${member.id}</td>
            <td>${member.name}</td>
            <td>
            <img src = "${member.avatar}">
            <td>${member.phone}</td>
            <td>${member.countryside}</td>
            </td>
        </tr>
        `
    );
  })
  .join("");
const myform = document.forms.myform;

myform.addEventListener("submit", () => {
  event.preventDefault();
  const IDInput = myform.IDInput.value;
  const nameInput = myform.nameInput.value;
  const avatarInput = myform.avatarInput.value;
  const phoneInput = myform.phoneInput.value;
  const countrysideInput = myform.countrysideInput.value;
  console.log(IDInput, nameInput, avatarInput,phoneInput,countrysideInput);
  tbody.innerHTML += `
  <tr>
      <td>${IDInput}</td>
      <td>${nameInput}</td>
      <td>
      <img src = "${avatarInput}">
      </td>
      <td>${phoneInput}</td>
      <td>${countrysideInput}</td>
  </tr>
  `;
});
