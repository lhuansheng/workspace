import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import Search from './Search'

class Main extends React.Component{
  constructor(){
    super()
  }
  componentDidMount(){ //生命周期
    
    const params = this.props.match.params
    const searchTerm = params.searchTerm||undefined;
    console.log(searchTerm,"-------------------------")
    this.loadBeers(searchTerm)
  }
  loadBeers(){
    
  }
  render(){
    return(
      // 每个页面， 由组件构成
      <div className="wrapper">
        <Header siteName="Beer me!"/>
        <Search />
        {/* <Link to='/about'>about</Link> */}
        
      </div>
    )
  }
}

export default Main;