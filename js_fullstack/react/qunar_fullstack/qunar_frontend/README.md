- 全栈项目
一分为二的思想
前后端分离
UI 与 redux 分离
  城市数据怎么做
  - cityData null
    action-type
  - action setCityData
  - 是否显示 isCitySelectorVisible false
    ACTION_SET_CITY_SELECTOR_VISIBLE
    isLoadingCityData
    ACTION_SET_IS_LOADING_CITY_DATA
  - 后端api 设计流程
    1. mongodb/mysql 写真后端，
      mockerAPI 解决了跨域
    2. 模块化输出 api 配置
    3. require json Mocker.mock random 
      由于城市 配置
  - api -> action -> reducer -> connect -> 组件

  - 数据请求都 放在 actions 中 
    异步的actions 中， dispatch 多个 action

    
    

