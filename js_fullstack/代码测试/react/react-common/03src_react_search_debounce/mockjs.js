import Mock from 'mockjs';
export const mock1 =  Mock.mock('/post1','get',{
  'data|5':[{
    'key|+1': 1,
    'mock|1':['哑巴', 'Butter-fly', '肆无忌惮', '摩天大楼', '初学者'],
}]
})
export const mock2 =  Mock.mock('/post2','get',{
  'data|5':[{
    'key|+1': 1,
    'mock|1':['哑巴2', 'Butter-fly2', '肆无忌惮2', '摩天大楼2', '初学者2'],
}]
})
