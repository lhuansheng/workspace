// 假数据 真数据用一下
import Mock from 'mockjs';

export default Mock.mock('/posts','get',{
  'person|40-60' :[
    {'tab|1':[
      'all',
      'b',
      'c'
    ],
    'subtab|1':[
      'all',
      'b',
      'c',
      'd',
      'e',
      'f'
    ],
    img:"@Image('100x100','@color','小猫咪')",
    'title|1':['浏览器工作原理','后端技术面试','趣谈Linux操作系统'],
    alllessons:'@integer(25,88)',
    currLearnLessons:'@integer(1,25)',
    hasfinished:'@integer(0,99)%'
    }
  ]
})
