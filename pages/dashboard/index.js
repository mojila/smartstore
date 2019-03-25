import React from 'react'
import dynamic from 'next/dynamic'
import BottomNavigationMap from '../../components/BottomNavigationMap'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { Marker } from 'react-map-gl'
import NoSsr from '@material-ui/core/NoSsr';

const plants = [
    { latitude: -7.24917, longitude: 112.75083, name: 'Plant A' },
    { latitude: -7.29920, longitude: 112.71090, name: 'Plant B' },
    { latitude: -7.21, longitude: 112.73, name: 'Plant A' },
    { latitude: -7.24940, longitude: 112.79, name: 'Plant B' },
]

const DynamicComponentWithNoSSR = dynamic(() => import('../../components/Map'), {
    ssr: false
})

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2
    },
});

const Dashboard = (props) => {
    const { classes } = props

    return (
        <>
            <DynamicComponentWithNoSSR>
                { plants.map((d, i) => <Marker
                    key={i+1}
                    latitude={d.latitude}
                    longitude={d.longitude}
                    offsetLeft={-20}
                    offsetTop={-10}
                >
                    <Paper className={classes.root} elevation={1}>
                        <Typography className="pointer" component="p">
                            { d.name }
                        </Typography>
                    </Paper>
                </Marker>) }
            </DynamicComponentWithNoSSR>
            <NoSsr>
                <BottomNavigationMap page={0}/>
            </NoSsr>
        </>
    )
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Dashboard)