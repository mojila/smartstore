import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore'
import DriveIcon from '@material-ui/icons/DriveEta'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import NotificationIcon from '@material-ui/icons/NotificationsActiveOutlined'
import Router from 'next/router'

const styles = {
  root: {
    width: '100%',
    height: '8vh',
    positon: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 99,
    boxShadow: '0 -5px 5px -5px #333'
  },
};

class BottomNavigationMap extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  componentDidMount() {
    const { page } = this.props

    this.setState({ value: page })
  }

  render() {
    const { classes, page } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        className={classes.root}
      >
        <BottomNavigationAction label="Warehouse" icon={<LocationOnIcon />}
          onClick={() => Router.push('/dashboard')}/>
        <BottomNavigationAction label="Pelacakan" icon={<DriveIcon />} 
          onClick={() => Router.push('/dashboard/track')}/>
        <BottomNavigationAction label="Riwayat" icon={<RestoreIcon />}
          onClick={() => Router.push('/dashboard/history')}/>
        <BottomNavigationAction label="Pemberitahuan" icon={<NotificationIcon />}
          onClick={() => Router.push('/dashboard/notification')}/>
      </BottomNavigation>
    );
  }
}

BottomNavigationMap.propTypes = {
  classes: PropTypes.object.isRequired,
  page: PropTypes.object.isRequired
};

export default withStyles(styles)(BottomNavigationMap);