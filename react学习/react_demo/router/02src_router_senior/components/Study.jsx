import React from 'react'
let learn = [
  {id:1,learn:'math',hobby:'games'},
  {id:2,learn:'PE',hobby:'comic'},
  {id:3,learn:'English',hobby:'opera'},
]
function Study(props) {
  console.log(props)
  let a = learn.find((item)=>{
    // console.log(item.id)
    return item.id==props.match.params.id
  })
  console.log(a)
  return (
    <ul>
     {
        <li key={a.id}>{a.learn}--{a.hobby}</li>
     } 
    </ul>
  )
}

export default Study
