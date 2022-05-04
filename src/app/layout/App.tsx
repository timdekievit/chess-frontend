import '../../styles/App.css'
import Board from './Board';
import React, { useEffect } from 'react';
import Homepage from '../../features/home/Home';
import { observer } from 'mobx-react-lite';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from "react-router-dom";
import LoginForm from '../../features/home/users/LoginForm';
import RegisterForm from '../../features/home/users/RegisterForm';
import { useStore } from '../stores/Store';

function App() {

  const { commonStore, userStore } = useStore();
  useEffect(() => {
    if (commonStore.token) {
      userStore.getUser().finally(() => commonStore.setAppLoaded())
    } else {
      commonStore.setAppLoaded();
    }
  }, [commonStore, userStore])

  if (!commonStore.appLoaded) return <></>

  return (
    <section className='container'>

      <Route exact path='/' component={Homepage} />

      <Route path={'/(.+)'}
        render={() => (
          <>
            <Switch>
              <Route exact path='/chess' component={Board} />
              <Route path="/login" component={LoginForm} />
              <Route path="/register" component={RegisterForm} />
            </Switch>
          </>
        )}
      />
    </section>
  );
}

export default observer(App);
