import React, { Component } from 'react';
import {
  withStyles,
  Typography,
  AppBar,
  Toolbar,
  IconButton
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import ToolbarActions from './ToolbarActions';
import MouseoverPopover from './MouseoverPopover';
import config from '../config';

const styles = theme => ({
  root: {
    width: '100%'
  },
  name: {
    flex: 1,
    textDecoration: 'none'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
});

function AppName() {
  if (config.isTestNetwork) {
    return 'StellarGuard - TestNet';
  } else {
    return 'StellarGuard';
  }
}

@inject('rootStore')
@observer
class AppHeader extends Component {
  handleToggleMenuClick = () => {
    this.props.rootStore.uiState.toggleAppDrawer();
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.handleToggleMenuClick}
            >
              <MenuIcon />
            </IconButton> */}
            <Typography
              variant="h6"
              color="inherit"
              className={classes.name}
              component={Link}
              to="/"
            >
              <AppName />
            </Typography>
            <ToolbarActions />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(AppHeader);
