import React from 'react'
import BottomNavigationMap from '../../components/BottomNavigationMap';
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import FlightIcon from '@material-ui/icons/FlightLand'

const styles = theme => ({
    main: {
        height: '82vh',
        maxHeight: '92vh',
        overflow: 'auto',
        padding: '1em'
    },
    paper: {
        padding: '0.5em'
    }
})

const tracks = [
    { wo: '34324324', from: 'Plant D', to: 'Plant B' },
    { wo: '34324325', from: 'Plant C', to: 'Plant A' },
    { wo: '34324326', from: 'Plant B', to: 'Plant D' }
]

const Track = (props) => {
    const { classes } = props

    return (
        <>
            <AppBar style={{ height: '10vh' }} position="static" color="default">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        History Pengiriman
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.main}>
                <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="stretch"
                    spacing="16"
                >
                    {tracks.map((d, i) => <Grid key={i+1} item xs={12}>
                        <Paper className={classes.paper} elevation={1}>
                            <div className="text-center p-2 bg-success text-white rounded">Sudah Diterima</div>
                            <div className="text-center p-1 bg-white shadow-sm rounded small">Diterima pada 15 Maret 2019 | 08:00</div>
                            <div className="d-flex p-2 w-100 border-bottom">
                                <div className="flex-fill text-center">
                                    Dari {d.from}
                                </div>
                                <div className="text-center">
                                    <FlightIcon/>
                                </div>
                                <div className="flex-fill text-center">
                                    Ke {d.to}
                                </div>
                            </div>
                            <div className="text-center pt-1">
                                No. WO : {d.wo} <a href="#">(Detail)</a>
                            </div>
                        </Paper>
                    </Grid>)}
                </Grid>
            </div>
            <BottomNavigationMap page={2}/>
        </>
    )
}

Track.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Track)