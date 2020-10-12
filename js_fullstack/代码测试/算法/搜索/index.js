var city = [
  {
    code: 0,
    name: "beijing",
  },
  {
    code: 211,
    name: "jiangsu",
    children: [
      {
        code: 212,
        name: "nanjing",
      },
    ],
  },
];

function search(city, code) {
  let res = "";
  dps(city, code);
  function dps(city, code) {
    for (let child of city) {
      if (child["code"] === code) {
        res = child["name"];
        return res;
      } else if (child["children"]) {
        dps(child["children"], code);
      }
    }
  }
  return res;
}
console.log(search(city, 212));
