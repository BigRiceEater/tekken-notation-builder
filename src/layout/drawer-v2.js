import { push as Drawer} from 'react-burger-menu';
import { AppMenu } from './menu'

export const AppDrawer = () => {
  return (
    <Drawer pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
      <AppMenu />
    </Drawer>
  )
}