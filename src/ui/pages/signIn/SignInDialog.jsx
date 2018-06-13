import React, { Component } from 'react';
import {
  withStyles,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  withMobileDialog
} from 'material-ui';

import SignInForm from './SignInForm';
import { LogoAvatar } from '../../components';

const styles = theme => ({
  content: {
    width: '400px',
    [theme.breakpoints.down('sm')]: {
      width: 'auto'
    }
  },
  title: {
    display: 'flex',
    alignItems: 'center'
  },
  logo: {
    marginRight: theme.spacing.unit
  }
});

class SignInDialog extends Component {
  render() {
    const { classes, onSignIn, onClose, open, fullScreen } = this.props;
    return (
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={onClose}
        aria-labelledby="sign-in-dialog"
      >
        <DialogTitle
          disableTypography
          className={classes.title}
          id="sign-in-dialog"
        >
          <LogoAvatar className={classes.logo} />
          <Typography variant="title">Sign in to StellarGuard</Typography>
        </DialogTitle>
        <DialogContent className={classes.content}>
          <SignInForm
            id="sign-in-form-for-dialog"
            onSignIn={onSignIn}
            includeActions={false}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button
            data-test="signin-dialog-signin-button"
            type="submit"
            color="primary"
            form="sign-in-form-for-dialog"
          >
            Sign in
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(withMobileDialog()(SignInDialog));
