import React, { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
});

const Map = (props) => {
    const { classes } = props

    const [viewport, setViewport] = useState({
        width: '100vw',
        height: '92vh',
        latitude: -7.24917,
        longitude: 112.75083,
        zoom: 11
    })

    return (
        <ReactMapGL
            mapStyle="mapbox://styles/mapbox/dark-v9"
            mapboxApiAccessToken="pk.eyJ1IjoibW9qaWxhIiwiYSI6ImNqdGpzZXA1aDB6OWM0M3FtOHVmOHo1bHgifQ.Oo-mIExOoLkeXUSL0VrASQ"
            onViewportChange={(newViewport) => setViewport(newViewport)}
            {...viewport}
        >
            <Marker
                latitude={-7.24917}
                longitude={112.75083}
                offsetLeft={-20}
                offsetTop={-10}
            >
                <Paper className={classes.root} elevation={1}>
                    <Typography component="p">
                        Plant A
                    </Typography>
                </Paper>
            </Marker>
            
            <Marker
                latitude={-7.29920}
                longitude={112.71090}
                offsetLeft={-20} 
                offsetTop={-10}
            >
                <Paper className={classes.root} elevation={1}>
                    <Typography component="p">
                        Plant B
                    </Typography>
                </Paper>
            </Marker>

            <Marker
                latitude={-7.21}
                longitude={112.73}
                offsetLeft={-20} 
                offsetTop={-10}
            >
                <Paper className={classes.root} elevation={1}>
                    <Typography component="p">
                        Plant C
                    </Typography>
                </Paper>
            </Marker>

            <Marker
                latitude={-7.24940}
                longitude={112.79}
                offsetLeft={-20} 
                offsetTop={-10}
            >
                <Paper className={classes.root} elevation={1}>
                    <Typography component="p">
                        Plant D
                    </Typography>
                </Paper>
            </Marker>
        </ReactMapGL>
    )
}

Map.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Map)