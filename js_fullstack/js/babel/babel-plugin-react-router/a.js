import A from './index';
import B from './a'
import C from './b'
export default [
  {
    path: '/',
    component: A,
    routes: [
      {
        path: '/a',
        component: B
      },
      {
        path: '/b',
        component: C
      }
    ]
  }
]
