import _ from 'lodash';
import './style.css'
import icon from './icon.jpg'
import Data from './data.xml'
import Notes from './data.csv'
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';
console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`
function component() {
  const element = document.createElement('div');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  // lodash，现在通过一个 script 引入
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  const myimg = new Image()
  myimg.src = icon
  myimg.classList.add('myimg')
  element.appendChild(myimg)

  console.log(Data)
  console.log(Notes)
  return element;
}

document.body.appendChild(component());