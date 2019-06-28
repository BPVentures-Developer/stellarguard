import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import PageTitle from './PageTitle';
import AppLoader from '../AppLoader';
const styles = theme => ({
  root: {
    height: '100%',
    minHeight: 'calc(100vh - 130px)',
    width: '100%'
  },
  body: {
    height: '100%'
  }
});

class Page extends Component {
  render() {
    const { classes, title, children, loading } = this.props;
    return (
      <React.Fragment>
        {loading && <AppLoader />}
        <div className={classes.root}>
          {title && <PageTitle>{title}</PageTitle>}
          <div className={classes.body}>{children}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Page);
