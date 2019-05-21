import React, { Component, Fragment } from 'react';
import { withStyles, Divider, Typography, Grid } from '@material-ui/core';

import DonateDialog from './DonateDialog';

import config from '../config';

import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.light
  },
  footer: {
    color: '#FFF',
    padding: theme.spacing.unit * 2
  },
  link: {
    textDecoration: 'none',
    cursor: 'pointer'
  },
  gridItem: {
    marginBottom: theme.spacing.unit * 2
  }
});

const ExternalFooterLink = withStyles(styles)(
  ({ children, classes, ...rest }) => {
    return (
      <Typography
        gutterBottom
        component="a"
        target="_blank"
        color="inherit"
        rel="noopener noreferrer"
        className={classes.link}
        {...rest}
      >
        {children}
      </Typography>
    );
  }
);

const FooterLink = withStyles(styles)(({ children, classes, ...rest }) => {
  return (
    <Typography
      color="inherit"
      gutterBottom
      component={Link}
      className={classes.link}
      {...rest}
    >
      {children}
    </Typography>
  );
});

@withStyles(styles)
class AppFooter extends Component {
  state = {
    isDonateOpen: false
  };

  render() {
    const { classes } = this.props;
    const { isDonateOpen } = this.state;
    return (
      <Fragment>
        <div className={classes.root}>
          <Divider />
          <Grid container spacing={0} className={classes.footer}>
            <Grid item xs={12} md={6} className={classes.gridItem}>
              <Typography
                variant="h5"
                color="inherit"
                gutterBottom
                className={classes.stellarguard}
              >
                StellarGuard
              </Typography>
              <Typography
                color="inherit"
                className={classes.copyright}
                gutterBottom
              >
                2019 © StellarGuard LLC
              </Typography>
              <Typography color="inherit" gutterBottom>
                help@stellarguard.me
              </Typography>
              <Typography color="inherit" gutterBottom>
                v{config.version}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography color="inherit" variant="h6" gutterBottom>
                Links
              </Typography>
              <ExternalFooterLink onClick={this.openDonateDialog}>
                Donate
              </ExternalFooterLink>
              <FooterLink to="/faq">FAQ</FooterLink>
              <FooterLink to="/supported-wallets">Supported Wallets</FooterLink>
              <ExternalFooterLink href="https://github.com/stellarguard/stellarguard/issues">
                Request a Feature or Report a Bug
              </ExternalFooterLink>
              <ExternalFooterLink href="https://www.reddit.com/r/StellarGuard/">
                Discuss StellarGuard
              </ExternalFooterLink>
              <ExternalFooterLink href="https://github.com/stellarguard/stellarguard">
                Source Code
              </ExternalFooterLink>
              <FooterLink to="/terms-of-service">Terms of Service</FooterLink>
              <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
            </Grid>
          </Grid>
        </div>
        <DonateDialog open={isDonateOpen} onClose={this.closeDonateDialog} />
      </Fragment>
    );
  }

  openDonateDialog = () => {
    this.setState({ isDonateOpen: true });
  };

  closeDonateDialog = () => {
    this.setState({ isDonateOpen: false });
  };
}

export default AppFooter;
