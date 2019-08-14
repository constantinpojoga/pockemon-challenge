import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import ScrollToTop from 'react-router-scroll-top';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import PageSpinner from 'components/PageSpinner/PageSpinner';
import Header from 'components/Header/Header';
import { store } from 'store/store';
import './App.scss';

// Pages
const Homepage = lazy(() => import('pages/Homepage/Homepage'));

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Provider store={store}>
          <Router>
            <ScrollToTop>
              <Header />

              <div className="main">
                <Suspense fallback={<PageSpinner />}>
                  <Switch>
                    {/* <Route exact path="/character/id" component={Character} /> */}
                    <Route exact path="/" component={Homepage} />
                    <Redirect to="/" />
                  </Switch>
                </Suspense>
              </div>
            </ScrollToTop>
          </Router>
        </Provider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
