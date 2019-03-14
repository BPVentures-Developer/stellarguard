import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router';
import { observer } from 'mobx-react';

import NewTransactionStellarLabsTutorial from './transactions/NewTransactionStellarLabsTutorial';
import NewTransactionAccountViewerTutorial from './transactions/account-viewer/NewTransactionAccountViewerTutorial';
import NewTransactionInterstellarExchangeTutorial from './interstellar-exchange/NewTransactionInterstellarExchangeTutorial';
import StellarportTransactionTutorial from './stellarport/StellarportTransactionTutorial';
import LobstrTransactionTutorial from './lobstr/LobstrTransactionTutorial';
import StellarTermTranactionTutorial from './stellarterm/StellarTermTransactionTutorial';

import FourOhFourPage from '../../errors/FourOhFourPage';
@withRouter
@observer
class TutorialsRoutes extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/help/new-transaction-stellar-labs"
          component={NewTransactionStellarLabsTutorial}
        />
        <Route
          exact
          path="/help/new-transaction-account-viewer"
          component={NewTransactionAccountViewerTutorial}
        />
        <Route
          exact
          path="/help/trade-on-interstellar-exchange"
          component={NewTransactionInterstellarExchangeTutorial}
        />
        <Route
          exact
          path="/help/trade-on-stellarport"
          component={StellarportTransactionTutorial}
        />
        <Route
          exact
          path="/help/lobstr/transaction"
          component={LobstrTransactionTutorial}
        />
        <Route
          exact
          path="/help/stellarterm/transaction"
          component={StellarTermTranactionTutorial}
        />
        <Route component={FourOhFourPage} />
      </Switch>
    );
  }
}

export default TutorialsRoutes;
