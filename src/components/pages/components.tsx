import './styles/components.sass';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  NavLink,
} from 'react-router-dom';
import Buttons from './components/buttons';
import { Text } from '../../trunks-ui/trunks-ui';
export default function ComponentsPage() {
  let match = useRouteMatch();
  return (
    <div className='components-body'>
      <nav className='side-menu'>
        <NavLink
          className='menu-item'
          activeClassName='menu-item-selected'
          to={`${match.url}/Overview`}>
          Overview
        </NavLink>
        <div className='menu-divider' />
        <NavLink
          className='menu-item'
          activeClassName='menu-item-selected'
          to={`${match.url}/buttons`}>
          Buttons
        </NavLink>
        <NavLink
          className='menu-item'
          activeClassName='menu-item-selected'
          to={`${match.url}/card`}>
          Card
        </NavLink>
        <NavLink
          className='menu-item'
          activeClassName='menu-item-selected'
          to={`${match.url}/select`}>
          Select
        </NavLink>
        <NavLink
          className='menu-item'
          activeClassName='menu-item-selected'
          to={`${match.url}/tags`}>
          Tags
        </NavLink>
        <NavLink
          className='menu-item'
          activeClassName='menu-item-selected'
          to={`${match.url}/text`}>
          Text
        </NavLink>
        <NavLink
          className='menu-item'
          activeClassName='menu-item-selected'
          to={`${match.url}/dropdown`}>
          Dropdown
        </NavLink>
        <NavLink
          className='menu-item'
          activeClassName='menu-item-selected'
          to={`${match.url}/checkbox`}>
          Checkbox
        </NavLink>
        <NavLink
          className='menu-item'
          activeClassName='menu-item-selected'
          to={`${match.url}/input`}>
          Input
        </NavLink>
        <NavLink
          className='menu-item'
          activeClassName='menu-item-selected'
          to={`${match.url}/radio`}>
          Radio
        </NavLink>
        <NavLink
          className='menu-item'
          activeClassName='menu-item-selected'
          to={`${match.url}/switch`}>
          Switch
        </NavLink>
        <NavLink
          className='menu-item'
          activeClassName='menu-item-selected'
          to={`${match.url}/date-picker`}>
          Date Picker
        </NavLink>
        <NavLink
          className='menu-item'
          activeClassName='menu-item-selected'
          to={`${match.url}/carousel`}>
          Carousel
        </NavLink>
        <NavLink
          className='menu-item'
          activeClassName='menu-item-selected'
          to={`${match.url}/table`}>
          Table
        </NavLink>
        <NavLink
          className='menu-item'
          activeClassName='menu-item-selected'
          to={`${match.url}/tabs`}>
          Tabs
        </NavLink>
        <NavLink
          className='menu-item'
          activeClassName='menu-item-selected'
          to={`${match.url}/alert`}>
          Alert
        </NavLink>
        <NavLink
          className='menu-item'
          activeClassName='menu-item-selected'
          to={`${match.url}/message`}>
          Message
        </NavLink>
        <NavLink
          className='menu-item'
          activeClassName='menu-item-selected'
          to={`${match.url}/notification`}>
          Notification
        </NavLink>
        <NavLink
          className='menu-item'
          activeClassName='menu-item-selected'
          to={`${match.url}/popover`}>
          Popover
        </NavLink>
      </nav>
      <div className='display-area'>
        <Switch>
          <Route path={`${match.path}/buttons`}>
            <Buttons />
          </Route>
        </Switch>
      </div>
    </div>
  );
}