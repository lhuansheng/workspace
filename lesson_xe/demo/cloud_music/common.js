window.onload = function(){
    const tabLinks = this.document.querySelectorAll('.tabbar a')
    tabLinks.forEach(function(link){
        link.addEventListener('click',function(event){
            event.preventDefault()
            //取消之前的selected
            document.querySelector('.selected')
            .classList.remove('selected')
            this.classList.add('selected')
            
        },false)
    })

    //先拿到 swiper 的数据
    // bannerList 数据
    // XMLHttpRequest 难 现代版 fetch
    this.fetch('http://127.0.0.1:3000/banner') //fetch 拿到数据
    .then(data => data.json()) //转换为 json
    .then(data =>{
        console.log(data)
    })
}