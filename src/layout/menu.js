import { Link } from 'react-router-dom'
import { Menu } from 'antd';

export const AppMenu = ()=>{

  const items = [
    { label : (<Link to="">Home</Link>) , key:"home"},
    { label : (<Link to="changelog">Changelog</Link>), key:"changelog"}
  ]

  return (
    <Menu items={items}/>
  )
}