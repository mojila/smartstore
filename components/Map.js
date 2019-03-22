import React, { useState } from 'react'
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2
    },
});

const Map = (props) => {
    const { classes, children } = props

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
            <div style={{position: 'absolute', right: '1em', top: '1em'}}>
                <NavigationControl onViewportChange={(newViewport) => setViewport(newViewport)} />
            </div>

            { children }
        </ReactMapGL>
    )
}

Map.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Map)