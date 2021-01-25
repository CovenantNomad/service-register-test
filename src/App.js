import React from 'react'
import { BrowserRouter, Switch, Route  } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

import { SettingProvider } from './context/SettingContext'
import { UserProvider } from './context/UserContext'

// import NavBar from './components/NavBar'
import LoadingPage from './pages/LoadingPage'
import LandingPage from './pages/LandingPage'
import SundayService from './pages/services/SundayService'
import WednesdayService from './pages/services/WednesdayService'
import FridayService from './pages/services/FridayService'
import Resultpage from './pages/ResultPage'
import AdminPage from './pages/AdminPage'
import AuthPage from './pages/AuthPage'

function App() {

  return (
    <SettingProvider>
      <UserProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Wrapper>
            <Container>
              <Switch>
                <Route exact path={'/service-register-test/'} component={LoadingPage} />
                <Route exact path={'/service-register-test/main'} component={LandingPage} />
                <Route exact path={'/service-register-test/wednesday'} component={WednesdayService} />
                <Route exact path={'/service-register-test/friday'} component={FridayService} />
                <Route exact path={'/service-register-test/sunday'} component={SundayService} />
                <Route exact path={'/service-register-test/result'} component={Resultpage} />
                <Route exact path={'/service-register-test/auth'} component={AuthPage} />
                <Route exact path={'/service-register-test/admin'} component={AdminPage} />
              </Switch>
            </Container>
          </Wrapper>
        </BrowserRouter>
      </UserProvider>
    </SettingProvider>

  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
  }
`;

  const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: scroll;
  `;

  const Container = styled.div`
    width: 100%;
    max-width: 585px;
    display: flex;
    flex-direction: column;
  `;





export default App;
