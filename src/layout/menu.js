import { Menu } from 'antd';

export const AppMenu = ()=>{

  const items = [
    { label : 'Home', key:"home"},
    { label : "Changelog", key:"changelog"}
  ]

  return (
    <Menu items={items}/>
  )
}