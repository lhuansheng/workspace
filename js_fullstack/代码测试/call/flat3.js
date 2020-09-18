var ary = [1, [2, [3, [4, 5]]], 6]
// reduce
function flat(arr) {//.concat([3,4])和.concat(3,4)均可
  return arr.reduce((pre,item) => pre.concat(Array.isArray(item)?flat(item):item),[])
}

console.log(flat(ary))