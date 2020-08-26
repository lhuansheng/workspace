var Mock = require("mockjs");

let mock1 = Mock.mock("/list/1", {
  "listInfo|50": [
    {
      //生成|num个如下格式名字的数据
      "key|+1": 1, //数字从当前数开始后续依次加一
      name: "@cname", //名字为随机中文名字
      category: "电压力锅", 
      "model|1": [
        "CYSB50YCW10DJ-100",
        "SF30HC749",
        "SDHCB830-210J",
        "SF30HC-974",
      ], //工作是数组中的一个
      entry:"@integer( 1, 9 )",
      func:["DeleteOutlined","EditOutlined","EyeInvisibleOutlined"]
    },
  ],
});

let mock2 = Mock.mock("/list/2", {
  "listInfo|1000": [
    {
      //生成|num个如下格式名字的数据
      "key|+1": 1, //数字从当前数开始后续依次加一
      name: "@cname", //名字为随机中文名字
      category: "电饭煲",
      "model|1": [
        "CYSB50YCW10DJ-100",
        "SF30HC749",
        "SDHCB830-210J",
        "SF30HC-974",
      ], //工作是数组中的一个
      entry:"@integer( 1, 9 )",
      func:["DeleteOutlined","EditOutlined","EyeInvisibleOutlined"]
    },
  ],
});

let mock3 = Mock.mock("/list/3", {
  "listInfo|50": [
    {
      //生成|num个如下格式名字的数据
      "key|+1": 1, //数字从当前数开始后续依次加一
      name: "@cname", //名字为随机中文名字
      category: "电磁炉",
      "model|1": [
        "CYSB50YCW10DJ-100",
        "SF30HC749",
        "SDHCB830-210J",
        "SF30HC-974",
      ], //工作是数组中的一个
      entry:"@integer( 1, 9 )",
      func:["DeleteOutlined","EditOutlined","EyeInvisibleOutlined"]
    },
  ],
});
let mock4 = Mock.mock("/list/0", {
  "listInfo|200": [
    {
      //生成|num个如下格式名字的数据
      "key|+1": 1, //数字从当前数开始后续依次加一
      name: "@cname", //名字为随机中文名字
      "category|1": ["电压力锅", "电饭煲", "电磁炉"], //性别是数组中的一个，随机的
      "model|1": [
        "CYSB50YCW10DJ-100",
        "SF30HC749",
        "SDHCB830-210J",
        "SF30HC-974",
      ], //工作是数组中的一个
      entry:"@integer( 1, 9 )",
      func:["DeleteOutlined","EditOutlined","EyeInvisibleOutlined"]
    },
  ],
});
export { mock1, mock2, mock3, mock4 };
