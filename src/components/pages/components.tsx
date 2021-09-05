import './styles/components.sass';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  NavLink,
} from 'react-router-dom';
import { Text } from '../../trunks-ui/trunks-ui';
import ButtonsPage from './components/buttons-page';
import CardsPage from './components/cards-page';
import TagsPage from './components/tags-page';
import { SelectPage } from './components/select-page';
import { CheckboxPage } from './components/checkbox-page';
import { Space } from '../../trunks-ui/trunks-ui';
export default function ComponentsPage() {
  let match = useRouteMatch();
  return (
    <>
    <div className="page-container">
      <nav className='side-menu'>
        <Space inline />
        <NavLink
          className='menu-item'
          activeClassName='menu-item-selected'
          to={`${match.url}/Overview`}>
          Overview
        </NavLink>

        {/* MENU HEADER */}
        <Space inline />
        <div className='menu-divider' />
        <span
          style={{
            padding: '12px 0px 12px 0px',
            textAlign: 'center',
            fontWeight: 800,
            color: '#1976D2',
            background: '#FAFAFA',
            boxShadow: '0px 4px 4px 0px rgba(0,0,0,4%)',
          }}>
          Forms
        </span>
        <div className='menu-divider' />

        {/* BUTTON */}
        <NavLink
          className='menu-item'
          activeClassName='menu-item-selected'
          to={`${match.url}/buttons`}>
          Button
        </NavLink>

        {/* SELECT */}
        <NavLink
          className='menu-item'
          activeClassName='menu-item-selected'
          to={`${match.url}/select`}>
          Select
        </NavLink>

        {/* INPUT */}
        <NavLink
          className='menu-item'
          activeClassName='menu-item-selected'
          to={`${match.url}/input`}>
          Input
        </NavLink>

        {/* CHECKBOX */}
        <NavLink
          className='menu-item'
          activeClassName='menu-item-selected'
          to={`${match.url}/checkbox`}>
          Checkbox
        </NavLink>

        {/* RADIO */}
        <NavLink
          className='menu-item'
          activeClassName='menu-item-selected'
          to={`${match.url}/radio`}>
          Radio
        </NavLink>

        {/* MENU HEADER */}
        <Space inline />
        <div className='menu-divider' />
        <span
          style={{
            padding: '12px 0px 12px 0px',
            fontWeight: 800,
            textAlign: 'center',
            color: '#1976D2',
            background: '#FAFAFA',
            boxShadow: '0px 4px 4px 0px rgba(0,0,0,4%)',
          }}>
          Content
        </span>
        <div className='menu-divider' />

        {/* TEXT */}
        <NavLink
          className='menu-item'
          activeClassName='menu-item-selected'
          to={`${match.url}/text`}>
          Text
        </NavLink>

        {/* CARD */}
        <NavLink
          className='menu-item'
          activeClassName='menu-item-selected'
          to={`${match.url}/cards`}>
          Card
        </NavLink>

        {/* TAGS */}
        <NavLink
          className='menu-item'
          activeClassName='menu-item-selected'
          to={`${match.url}/tags`}>
          Tags
        </NavLink>

        {/* MENU HEADER */}
        <Space inline />
        <div className='menu-divider' />
        <span
          style={{
            padding: '12px 0px 12px 0px',
            fontWeight: 800,
            textAlign: 'center',
            color: '#1976D2',
            background: '#FAFAFA',
            boxShadow: '0px 4px 4px 0px rgba(0,0,0,4%)',
          }}>
          Layout
        </span>
        <div className='menu-divider' />

        {/* SPACE */}
        <NavLink
          className='menu-item'
          activeClassName='menu-item-selected'
          to={`${match.url}/space`}>
          Space
        </NavLink>

        {/* ROW */}
        <NavLink
          className='menu-item'
          activeClassName='menu-item-selected'
          to={`${match.url}/row`}>
          Row
        </NavLink>

        {/* COLUMN */}
        <NavLink
          className='menu-item'
          activeClassName='menu-item-selected'
          to={`${match.url}/column`}>
          Column
        </NavLink>

        {/* MENU HEADER */}
        <Space inline />
        <div className='menu-divider' />
        <span
          style={{
            padding: '12px 0px 12px 0px',
            fontWeight: 800,
            textAlign: 'center',
            color: '#1976D2',
            background: '#FAFAFA',
            boxShadow: '0px 4px 4px 0px rgba(0,0,0,4%)',
          }}>
          Interactive
        </span>
        <div className='menu-divider' />

        {/* DROPDOWN */}
        <NavLink
          className='menu-item'
          activeClassName='menu-item-selected'
          to={`${match.url}/dropdown`}>
          Dropdown
        </NavLink>

        {/* DATE PICKER */}
        <NavLink
          className='menu-item'
          activeClassName='menu-item-selected'
          to={`${match.url}/date-picker`}>
          Date Picker
        </NavLink>

        {/* CAROUSEL */}
        <NavLink
          className='menu-item'
          activeClassName='menu-item-selected'
          to={`${match.url}/carousel`}>
          Carousel
        </NavLink>

        {/* TABLE */}
        <NavLink
          className='menu-item'
          activeClassName='menu-item-selected'
          to={`${match.url}/table`}>
          Table
        </NavLink>

        {/* TABS */}
        <NavLink
          className='menu-item'
          activeClassName='menu-item-selected'
          to={`${match.url}/tabs`}>
          Tabs
        </NavLink>

        {/* MENU HEADER */}
        <Space inline />
        <div className='menu-divider' />
        <span
          style={{
            padding: '12px 0px 12px 0px',
            fontWeight: 800,
            textAlign: 'center',
            color: '#1976D2',
            background: '#FAFAFA',
            boxShadow: '0px 4px 4px 0px rgba(0,0,0,4%)',
          }}>
          Informative
        </span>
        <div className='menu-divider' />

        {/* ALERT */}
        <NavLink
          className='menu-item'
          activeClassName='menu-item-selected'
          to={`${match.url}/alert`}>
          Alert
        </NavLink>

        {/* MESSAGE */}
        <NavLink
          className='menu-item'
          activeClassName='menu-item-selected'
          to={`${match.url}/message`}>
          Message
        </NavLink>

        {/* NOTIFICATION */}
        <NavLink
          className='menu-item'
          activeClassName='menu-item-selected'
          to={`${match.url}/notification`}>
          Notification
        </NavLink>

        {/* POPOVER */}
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
            <ButtonsPage />
          </Route>
          <Route path={`${match.path}/cards`}>
            <CardsPage />
          </Route>
          <Route path={`${match.path}/tags`}>
            <TagsPage />
          </Route>
          <Route path={`${match.path}/select`}>
            <SelectPage />
          </Route>
          <Route path={`${match.path}/checkbox`}>
            <CheckboxPage />
          </Route>
        </Switch>
      </div>
      </div>
    </>
  );
}
