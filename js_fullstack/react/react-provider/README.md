## provider
在 provider 里面使用 consumer 都是合法的
 ```js
 <Provider value={{
      state,
      setTheme
      }}> 
      ```
用 value 传值

## consumer
 <Consumer>
          {
            (obj) => {
              console.log(obj)
              return (
                <span style={{color:obj.state.theme}}>span</span>
              )
            }
          }
        </Consumer>
consumer 里面必须是个方法，方法里面provider的值给 return 里面的dom