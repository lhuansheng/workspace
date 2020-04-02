window.onload = function(){
    const speed = document.querySelector('.speed');
    const bar = document.querySelector('.speed-bar');
    const video = document.querySelector('.flex');
    
    function handleMove(e){
    //    offsetTop: 获取某个dom结构距离浏览器顶部的高度
       const y = e.pageY -this.offsetTop;
        
        // offsetHeight: 获取某个dom结构自身的高度
        const percent = y / this.offsetHeight;
        console.log(percent)
       const min = 0.4;
       const max = 4;
    //    Math.round 小数的四舍五入
       const height = Math.round(percent*100)+'%';
       const playbackRate = percent * (max - min) + min;
       bar.style.height = height;
       bar.textContent = playbackRate.toFixed(2)+'x';
       video.playbackRate = playbackRate;
    }
    speed.addEventListener('mousemove',handleMove);
}