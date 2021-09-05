import React, { ReactNode, FC } from 'react';
import './App.sass';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Home from './components/pages/home';
import { Button, Card, CardStack, Row, Text } from './trunks-ui/trunks-ui';
import GettingStarted from './components/pages/getting-started';
import ComponentsPage from './components/pages/components';

export default function App() {

  return (
    <>
      <Router>
          <div className='header'>
            <h1 className='site-title'>
              <Link to='/home'>{`{ trunks-ui }`}</Link>
            </h1>
            <nav className='header-menu'>
              <Link to='/getting-started'>
                <Button type='textonly' size='small'>
                  Getting Started
                </Button>
              </Link>
              <Link to='/components'>
                <Button type='textonly' size='small'>
                  Components
                </Button>
              </Link>
              <Link to='/docs'>
                <Button type='textonly' size='small'>
                  Docs
                </Button>
              </Link>
              <a
                href='http://github.com/eliwimmer'
                rel='noreferrer'
                target='_blank'
              >
                <Button type='textonly' size='small'>
                  GitHub
                </Button>
              </a>
            </nav>
          </div>

         

            <Switch>
              <Route path='/home'>
                <Home />
              </Route>
              <Route path='/getting-started'>
                <GettingStarted />
              </Route>
              <Route path='/components'>
                <ComponentsPage />
              </Route>
            </Switch>
      </Router>
      
    </>
  );
}
