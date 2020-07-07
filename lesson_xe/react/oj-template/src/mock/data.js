// 假数据 真数据用一下
import Mock from 'mockjs';
export default Mock.mock('/posts/','get',{
  success: true,
  title: 'xiaoming',
  message:'时间管理大师',
  'list | 5-10':[{
    'title': "@title()",
    'email': "@email",
    "id": "@id",
    'key|+1': 1
  }]
})