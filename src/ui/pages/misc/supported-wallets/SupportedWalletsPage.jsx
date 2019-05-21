import React, { Component } from 'react';
import { withStyles, Grid, Typography } from '@material-ui/core';
import { Helmet } from 'react-helmet';

import { observer } from 'mobx-react';
import { withRouter } from 'react-router';

import { Page, DashboardFab } from '../../../components';

import {
  MyStellarToolsCard,
  StellarLaboratoryCard,
  StargazerCard,
  StellarSignerCard,
  StellarportCard,
  StellarAccountViewerCard,
  InterstellarExchangeCard,
  RocketWalletCard,
  StellarAuthenticatorCard,
  NucleoWallet,
  AbellxWalletCard,
  LobstrCard,
  StellarTermCard
} from './Wallets';

const styles = theme => ({
  partialSupport: {
    marginTop: theme.spacing.unit * 2
  },
  walletDevs: {
    marginTop: theme.spacing.unit * 2
  }
});

class WalletGridItem extends Component {
  render() {
    const { children } = this.props;
    return (
      <Grid item xs={12} sm={6}>
        {children}
      </Grid>
    );
  }
}

@withStyles(styles)
@withRouter
@observer
class SupportedWalletsPage extends Component {
  state = {};

  static FullySupportedWallets = [
    StellarportCard,
    StellarTermCard,
    InterstellarExchangeCard,
    LobstrCard,
    StargazerCard,
    AbellxWalletCard,
    MyStellarToolsCard,
    NucleoWallet,
    StellarAuthenticatorCard,
    RocketWalletCard
  ];

  static PartiallySupportedWallets = [
    StellarAccountViewerCard,
    StellarLaboratoryCard,
    StellarSignerCard
  ];

  render() {
    const { classes } = this.props;

    return (
      <Page>
        <Helmet>
          <title>StellarGuard | Supported Wallets</title>
        </Helmet>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Fully Supported Wallets
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              These wallets have direct integration with StellarGuard.
            </Typography>
            <Typography variant="subtitle1">
              Instead of copying your transaction to StellarGuard you can use
              the wallet like normal and transactions will be submited to
              StellarGuard.
            </Typography>
          </Grid>
          {this.renderWallets(SupportedWalletsPage.FullySupportedWallets)}
          <Grid item xs={12} className={classes.partialSupport}>
            <Typography variant="h6" gutterBottom>
              Partially Supported Wallets
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              These wallets allow you to copy the signed transaction XDR so you
              can submit it yourself to StellarGuard. There may be more wallets
              that support this method than those listed here.
            </Typography>
          </Grid>
          {this.renderWallets(SupportedWalletsPage.PartiallySupportedWallets)}
        </Grid>
        <Grid item xs={12} className={classes.walletDevs}>
          <Typography variant="subtitle1" gutterBottom>
            Are you a wallet developer and want to integrate StellarGuard and be
            featured here? Email developers@stellarguard.me
          </Typography>
        </Grid>
        <DashboardFab />
      </Page>
    );
  }

  renderWallets(wallets) {
    return wallets.map((Wallet, i) => (
      <WalletGridItem key={i}>
        <Wallet />
      </WalletGridItem>
    ));
  }
}

export default SupportedWalletsPage;
