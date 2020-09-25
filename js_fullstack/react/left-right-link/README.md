## 左右滚动交互
1. const navs = Object.keys(data) 获取 左边导航数据
2. 在 useEffect 中计算每个item相对的容器距离顶部的高度,放到ranges[]
3. const [activeIndex,setActiveIndex] = useState(0)当前应该激活的左边导航数据
4. 当点击 左边，获取左边点击的tab,选中右边相同的tab,用scrolltoView将当前元素滚动到规定可是范围内  handleTabClick
5. 用 scrolltop 监听右边的dom距离顶部的高度，在某个区间就激活某个区间左边的tab，用oncroll方法监听，用tabDetail.addEventListener('scroll',onScroll) 监听

