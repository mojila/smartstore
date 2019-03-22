import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore'
import DriveIcon from '@material-ui/icons/DriveEta'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import NotificationIcon from '@material-ui/icons/NotificationsActiveOutlined'

const styles = {
  root: {
    width: '100%',
    height: '8vh',
    positon: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 99
  },
};

class BottomNavigationMap extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        className={classes.root}
      >
        <BottomNavigationAction label="Plant List" icon={<LocationOnIcon />} selected />
        <BottomNavigationAction label="Tracking" icon={<DriveIcon />} />
        <BottomNavigationAction label="History" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Notification" icon={<NotificationIcon />}/>
      </BottomNavigation>
    );
  }
}

BottomNavigationMap.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomNavigationMap);