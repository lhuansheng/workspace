var locationList = [
  { id: 1, pid: 0 },
      { id: 2, pid: 1 },
      { id: 3, pid: 2 },
      { id: 4, pid: 0 },
];
let k = [
  {id:1,pid:0,children:[
    {id:2,pid:1,children:[
     { id:3,pid:2}
    ]}
  ]},
  {id:4,pid:0}
]

var res = trans(locationList)
console.log(res);
function trans(arr) {
 let res = []
 function insert(i) {
  if(arr[i].pid === 0) {
    res.push(arr[i])
  }
  

 }
 for(let i = 0; i < arr.length; i++) {
    insert(i)
 }
}