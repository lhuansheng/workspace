export function getNewAlbum() { // 模块化到api 目录 
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 
      resolve([{
        id: 1,
        img: 'http://p1.music.126.net/_PsKVKgTAhOvXJmL-r9KlQ==/109951165041015191.jpg?imageView=1&type=webp&thumbnail=370x0',
        name: '断桥',
        singer: '程小溪',
        publicTime: '2018-01-28'
      }, {
        id: 2,
        img: 'http://p1.music.126.net/_PsKVKgTAhOvXJmL-r9KlQ==/109951165041015191.jpg?imageView=1&type=webp&thumbnail=370x0',
        name: '断桥',
        singer: '程小溪',
        publicTime: '2018-01-28'
      }, {
        id: 3,
        img: 'http://p1.music.126.net/_PsKVKgTAhOvXJmL-r9KlQ==/109951165041015191.jpg?imageView=1&type=webp&thumbnail=370x0',
        name: '断桥',
        singer: '程小溪',
        publicTime: '2018-01-28'
      }, {
        id: 4,
        img: 'http://p1.music.126.net/_PsKVKgTAhOvXJmL-r9KlQ==/109951165041015191.jpg?imageView=1&type=webp&thumbnail=370x0',
        name: '断桥',
        singer: '程小溪',
        publicTime: '2018-01-28'
      }, {
        id: 5,
        img: 'http://p1.music.126.net/_PsKVKgTAhOvXJmL-r9KlQ==/109951165041015191.jpg?imageView=1&type=webp&thumbnail=370x0',
        name: '断桥',
        singer: '程小溪',
        publicTime: '2018-01-28'
      }, {
        id: 6,
        img: 'http://p1.music.126.net/_PsKVKgTAhOvXJmL-r9KlQ==/109951165041015191.jpg?imageView=1&type=webp&thumbnail=370x0',
        name: '断桥',
        singer: '程小溪',
        publicTime: '2018-01-28'
      }, {
        id: 7,
        img: 'http://p1.music.126.net/_PsKVKgTAhOvXJmL-r9KlQ==/109951165041015191.jpg?imageView=1&type=webp&thumbnail=370x0',
        name: '断桥',
        singer: '程小溪',
        publicTime: '2018-01-28'
      }, {
        id: 8,
        img: 'http://p1.music.126.net/_PsKVKgTAhOvXJmL-r9KlQ==/109951165041015191.jpg?imageView=1&type=webp&thumbnail=370x0',
        name: '断桥',
        singer: '程小溪',
        publicTime: '2018-01-28'
      },{
        id: 9,
        img: 'http://p1.music.126.net/_PsKVKgTAhOvXJmL-r9KlQ==/109951165041015191.jpg?imageView=1&type=webp&thumbnail=370x0',
        name: '断桥',
        singer: '程小溪',
        publicTime: '2018-01-28'
      }, {
        id: 10,
        img: 'http://p1.music.126.net/_PsKVKgTAhOvXJmL-r9KlQ==/109951165041015191.jpg?imageView=1&type=webp&thumbnail=370x0',
        name: '断桥',
        singer: '程小溪',
        publicTime: '2018-01-28'
      }, {
        id: 11,
        img: 'http://p1.music.126.net/_PsKVKgTAhOvXJmL-r9KlQ==/109951165041015191.jpg?imageView=1&type=webp&thumbnail=370x0',
        name: '断桥',
        singer: '程小溪',
        publicTime: '2018-01-28'
      }, {
        id: 12,
        img: 'http://p1.music.126.net/UhvVio5QSbpJjr5o9w6Vfw==/109951164884282185.jpg?imageView=1&type=webp&thumbnail=370x0',
        name: '断桥',
        singer: '程小溪',
        publicTime: '2018-01-28'
      }])
    }, 3000);
  })
}
export function getSlideList(){
  return new Promise((resolve,reject)=>{
    resolve([{
      id: 1,
      picUrl: 'https://mat1.gtimg.com/rain/bailing20/4333e6a9ac25.uzi.png',
      linkUrl: 'https://www.baidu.com/'
    }, {
      id: 2,
      picUrl: 'https://inews.gtimg.com/newsapp_ls/0/11885314858_640330/0',
      linkUrl: 'https://www.baidu.com/'
    }, {
      id: 3,
      picUrl: 'https://inews.gtimg.com/newsapp_ls/0/11884276052_640330/0',
      linkUrl: 'https://www.baidu.com/'
    }])
  })
}