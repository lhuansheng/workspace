// window.onload = function(){
//     const tabLinks = this.document.querySelectorAll('.tabbar a')
//     const swiperWrap = this.document.querySelector('.swiper-wrapper')
//     tabLinks.forEach(function(link){
//         link.addEventListener('click',function(event){
//             event.preventDefault()
//             //取消之前的selected
//             document.querySelector('.selected')
//             .classList.remove('selected')
//             this.classList.add('selected')
            
//         },false)
//     })

//     //先拿到 swiper 的数据
//     // bannerList 数据
//     // XMLHttpRequest 难 现代版 fetch
//     this.fetch('http://127.0.0.1:3000/banner') //fetch 拿到数据
//     .then(data => data.json()) //转换为 json
//     .then(data =>{
//         console.log(data.banners)
//         //console.log(data.banners.image)
//         data.banners.forEach(function(event){
//           swiperWrap.innerHTML += `<div class="swiper-slide"><img src="${event.imageUrl}" alt=""></div>`
//         })
//         var mySwiper = new Swiper ('.swiper-container', {
//           direction: 'horizontal', // 垂直切换选项
//           loop: true, // 循环模式选项
          
//           // 如果需要分页器
//           pagination: {
//             el: '.swiper-pagination',
//           },
          
//           // 如果需要前进后退按钮
//           navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//           },
          
//           // 如果需要滚动条
//           scrollbar: {
//             el: '.swiper-scrollbar',
//           },
//         })    
//     })
       
// }